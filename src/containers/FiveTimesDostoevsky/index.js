import React, { useState, useRef, useEffect } from "react";
import * as S from "./styles";

//audio player

import Audio from "static/audio/UnAmoreCosiGrande.mp3";

function FiveTimesDostoevsky() {
  const audioRef = useRef();
  const [number, setNumber] = useState(20);

  useEffect(() => {
    if (audioRef.current) {
      document.addEventListener("click", playAudio);
      return () => document.removeEventListener("click", playAudio);
    }
  }, [audioRef]);

  let nowRef = useRef();
  let thenRef = useRef();

  function playAudio() {
    initAudioSetting(audioRef.current);
    audioRef.current.play();
    nowRef.current = Date.now();
    thenRef.current = Date.now();
    analyseAudio();
  }

  const analyserRef = useRef();
  const dataRef = useRef();

  function initAudioSetting(element) {
    let AudioContext = window.AudioContext || window.webkitAudioContext;
    let audioCtx = new AudioContext();
    analyserRef.current = audioCtx.createAnalyser();
    analyserRef.current.fftSize = 512;
    let source = audioCtx.createMediaElementSource(element);
    dataRef.current = new Uint8Array(analyserRef.current.frequencyBinCount);
    source.connect(analyserRef.current);
    source.connect(audioCtx.destination);
  }

  const animationRef = useRef();

  function analyseAudio() {
    animationRef.current = requestAnimationFrame(analyseAudio);

    //controlling frame
    nowRef.current = Date.now();
    let delta = nowRef.current - thenRef.current;
    if (delta > 70) {
      thenRef.current = nowRef.current;

      analyserRef.current.getByteFrequencyData(dataRef.current);
      let sum = 0;
      // console.log(dataRef.current);
      for (let i = 0; i < dataRef.current.length; i++) {
        sum += dataRef.current[i];
      }

      let number = sum / dataRef.current.length;
      setNumber(20 + number ** 1.8);
    }
  }

  useEffect(() => {
    if (animationRef.current) {
      return () => cancelAnimationFrame(animationRef.current);
    }
  }, [animationRef]);

  return (
    <S.StyledFiveTimesDostoevsky>
      <S.Text>5 X 2 X 2 = {number.toFixed(0)}</S.Text>
      <audio crossOrigin={"anonymous"} loop ref={audioRef} src={Audio} title={"Un Amore Cosi Grande"} />
    </S.StyledFiveTimesDostoevsky>
  );
}
export default FiveTimesDostoevsky;
