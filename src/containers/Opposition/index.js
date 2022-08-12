import React, { useRef, useEffect, useState } from "react";
import * as S from "./styles";

//hooks
import useRecorder from "utils/hooks/useRecorder";

//components
import No from "foundations/Opposition/No";

function Opposition() {
  const { recorderState, analyserRef, dataRef, startRecording, saveRecording } = useRecorder();

  function handleClick() {
    if (recorderState.initRecording) {
      saveRecording();
    } else {
      startRecording();
    }
  }

  //drawing logic
  const [test, setTest] = useState([]);
  function draw(result) {
    setTest(result);
  }

  console.log(test);
  return (
    <S.StyledOpposition>
      <S.Button onClick={handleClick}>{recorderState.initRecording ? "Save" : "Start"}</S.Button>

      <No test={dataRef.current} />
    </S.StyledOpposition>
  );
}
export default Opposition;
