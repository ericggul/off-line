import React, { useRef, useEffect, useState } from "react";
import * as S from "./styles";

//hooks
import useRecorder from "utils/hooks/useRecorder";

//components
import NoEntry from "foundations/Opposition/NoEntry";
import NoText from "foundations/Opposition/NoText";

import NoIsNo from "foundations/Opposition/NoIsNo";

function Opposition() {
  const { recorderState, analyserRef, dataRef, startRecording, saveRecording } = useRecorder();

  function handleClick() {
    if (recorderState.initRecording) {
      saveRecording();
    } else {
      startRecording();
    }
  }

  return (
    <S.StyledOpposition onClick={handleClick}>
      {/* {recorderState && recorderState.recordingSeconds && <NoIsNo seconds={recorderState.recordingSeconds} />} */}
      {dataRef && dataRef.current && <NoEntry data={dataRef.current} />}
      {dataRef && dataRef.current && <NoText data={dataRef.current} />}
    </S.StyledOpposition>
  );
}
export default Opposition;
