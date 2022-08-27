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

//to do: self-reflection effect(using webcam)
function FriendlyGuideToEnjoyThisArtwork() {
  const [prepared, setPrepared] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (prepared) {
      const interval = setInterval(() => {
        setIdx((idx) => (idx + 1) % QUESTIONS.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [prepared]);

  useEffect(() => {
    speak(QUESTIONS[idx]);
  }, [idx]);

  function speak(sentence) {
    const synth = window.speechSynthesis;
    var msg = new SpeechSynthesisUtterance(sentence);
    msg.pitch = 1;
    msg.rate = 1;
    synth.speak(msg);
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

  return (
    <S.StyledFriendlyGuideToEnjoyThisArtwork onClick={() => setPrepared(true)}>
      <S.Video ref={videoRef} />
      <S.Text> {prepared ? QUESTIONS[idx] : "CLICK"}</S.Text>
    </S.StyledFriendlyGuideToEnjoyThisArtwork>
  );
}
export default FriendlyGuideToEnjoyThisArtwork;
