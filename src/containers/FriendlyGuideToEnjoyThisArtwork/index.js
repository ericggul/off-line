import React, { useState, useEffect, useRef } from "react";
import * as S from "./styles";

import useResize from "utils/hooks/useResize";

const QUESTIONS = [
  "What is your first reaction to the work?",
  "What does it make you feel or think like that?",
  "What is it made of?",
  "Why has the artist chosen those materials?",
  "Does the size of the work affect your experience?",
  "Where is the artist from and where did they live?",
  "How has this influenced them?",
  "What do you think the work is about?",
  "Why don't you take a photograph of this list, so you can refer to it when you look at the art?",
];

const GRAMMAR_LIST = [
  "Shitty",
  "Commercial",
  "Awful",
  "Disaster",
  "Copy",
  "Copycat",
  `Don't want to`,
  "Racist",
  "Not",
  `Ain't`,
  "Never",
  "Neither",
  "Hardly",
  "Worse",
  "Worst",
  "hate",
  "hated",
  "bad",
  "no",
  "nothing",
];

//to do: self-reflection effect(using webcam)
function FriendlyGuideToEnjoyThisArtwork() {
  const [prepared, setPrepared] = useState(false);
  const [idx, setIdx] = useState(0);
  const [getAudioResponse, setGetAudioResponse] = useState(false);
  const [answer, setAnswer] = useState(false);

  useEffect(() => {
    if (prepared && idx < QUESTIONS.length) {
      speak(QUESTIONS[idx]);
    }
  }, [idx, prepared]);

  async function speak(sentence) {
    const synth = window.speechSynthesis;
    var msg = new SpeechSynthesisUtterance(sentence);
    msg.pitch = 1;
    msg.rate = 1;
    synth.speak(msg);
    msg.addEventListener("end", () => {
      setGetAudioResponse(true);
    });
  }

  //prepare video
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);
  const [windowWidth, windowHeight] = useResize();

  useEffect(() => {
    if (videoRef && videoRef.current && !videoReady && windowWidth && windowHeight) {
      prepareVideo();
    }
  }, [videoReady, videoRef, windowWidth, windowHeight]);

  async function prepareVideo() {
    if (videoRef.current === null) return;

    const video = videoRef.current;
    video.width = windowWidth;
    video.height = windowHeight;

    const videoConfig = {
      audio: false,
      video: {
        facingMode: "user",
      },
    };

    const stream = await navigator.mediaDevices.getUserMedia(videoConfig);

    video.srcObject = stream;

    await new Promise((resolve) => {
      video.onloadedmetadata = () => {
        resolve(video);
      };
    });

    video.play();
    video.addEventListener(
      "canplay",
      () => {
        video.play();
      },
      false
    );
    setVideoReady(true);
  }

  //audio rec
  useEffect(() => {
    if (getAudioResponse) {
      analyseVoice();
    }
  }, [getAudioResponse]);

  //voice recognition test
  async function analyseVoice() {
    const grammar = `#JSGF V1.0; grammar phrase; public <phrase> = ${GRAMMAR_LIST.join(" | ")};`;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;

    const recognition = new SpeechRecognition();
    if (SpeechGrammarList) {
      const speechRecognitionList = new SpeechGrammarList();
      speechRecognitionList.addFromString(grammar, 1);
      recognition.grammars = speechRecognitionList;
    }

    recognition.lang = "en-GB";
    recognition.start();

    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onerror = (event) => {
      setAnswer("not recognised");
      console.log("Error occurred in recognition: " + event.error);
    };

    recognition.onresult = (event) => {
      setAnswer(event.results[0][0].transcript);
      setGetAudioResponse(false);
    };
  }

  useEffect(() => {
    if (answer) {
      const timeout = setTimeout(() => {
        setIdx((idx) => idx + 1);
        setAnswer("");
      }, 2500);

      return () => clearTimeout(timeout);
    }
  }, [answer]);

  return (
    <S.StyledFriendlyGuideToEnjoyThisArtwork onClick={() => setPrepared(true)}>
      <S.Video ref={videoRef} />
      <S.Text> {prepared ? (idx < QUESTIONS.length ? QUESTIONS[idx] : "The End") : "CLICK"}</S.Text>
      <S.Answer>{answer}</S.Answer>
    </S.StyledFriendlyGuideToEnjoyThisArtwork>
  );
}
export default FriendlyGuideToEnjoyThisArtwork;
