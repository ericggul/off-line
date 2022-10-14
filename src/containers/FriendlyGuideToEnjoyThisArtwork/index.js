import React, { useState, useEffect, useRef } from "react";
import * as S from "./styles";

import useResize from "utils/hooks/useResize";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

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

function FriendlyGuideToEnjoyThisArtwork() {
  const [prepared, setPrepared] = useState(false);
  const [idx, setIdx] = useState(0);
  const [getAudioResponse, setGetAudioResponse] = useState(false);

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
      console.log("61");
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

  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  useEffect(() => {
    SpeechRecognition.startListening();
    const timeout = setTimeout(() => {
      SpeechRecognition.stopListening();
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (getAudioResponse) {
      SpeechRecognition.startListening({ continuous: true });
    }
  }, [getAudioResponse]);

  useEffect(() => {
    if (getAudioResponse && transcript && transcript.length > 15) {
      const timeout = setTimeout(() => {
        setGetAudioResponse(false);
        setIdx((idx) => idx + 1);
        SpeechRecognition.stopListening();
      }, 2500);

      return () => clearTimeout(timeout);
    }
  }, [listening, transcript]);

  console.log(idx);

  return (
    <S.StyledFriendlyGuideToEnjoyThisArtwork onClick={() => setPrepared(true)}>
      <S.Video ref={videoRef} />
      <S.Text> {prepared ? (idx < QUESTIONS.length ? QUESTIONS[idx] : "The End") : "CLICK"}</S.Text>
      <S.Answer>{getAudioResponse ? transcript || "" : ""}</S.Answer>
    </S.StyledFriendlyGuideToEnjoyThisArtwork>
  );
}
export default FriendlyGuideToEnjoyThisArtwork;
