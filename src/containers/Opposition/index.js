import React, { useRef, useEffect, useState } from "react";
import * as S from "./styles";

//hooks
import useRecorder from "utils/hooks/useRecorder";

//components
import No from "foundations/Opposition/No";

function Opposition() {
  const { recorderState, analyserRef, dataRef, startRecording, saveRecording } = useRecorder();

  let nowRef = useRef(Date.now());
  let thenRef = useRef(Date.now());
  let animationRef = useRef();

  function analyseAudio() {
    animationRef.current = requestAnimationFrame(analyseAudio);
    //controlling frame
    nowRef.current = Date.now();
    let delta = nowRef.current - thenRef.current;
    if (delta > 30 && dataRef.current) {
      thenRef.current = nowRef.current;

      analyserRef.current.getByteFrequencyData(dataRef.current);
      let result = dataRef.current;
      draw(result);
    }
  }

  function draw(result) {
    console.log(result);
  }

  function stopAnalyse() {
    cancelAnimationFrame(animationRef.current);
  }

  useEffect(() => {
    if (animationRef.current) {
      return () => cancelAnimationFrame(animationRef.current);
    }
  }, [animationRef]);

  function handleClick() {
    if (recorderState.initRecording) {
      saveRecording();
      stopAnalyse();
    } else {
      startRecording();
      analyseAudio();
    }
  }

  const [recordings, setRecordings] = useState([]);
  useEffect(() => {
    if (recorderState.audio) {
      setRecordings((prev) => [...prev, recorderState.audio]);
    }
  }, [recorderState.audio]);

  return (
    <S.StyledOpposition>
      <S.Button onClick={handleClick}>{recorderState.initRecording ? "Save" : "Start"}</S.Button>
      {recordings.map((record, i) => (
        <S.Play key={i}>
          <audio controls src={record} />
        </S.Play>
      ))}
    </S.StyledOpposition>
  );
}
export default Opposition;
