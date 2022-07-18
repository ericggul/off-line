import React, { useEffect, useRef } from "react";
import * as S from "./styles";
import gaze from "./gaze";

function Gazed() {
  const ref = useRef();

  async function init() {
    await gaze.loadModel();
    await gaze.setUpCamera(ref.current);

    predict();
  }

  async function predict() {
    const gazePrediction = await gaze.getGazePrediction();
    console.log(gazePrediction);
    let raf = requestAnimationFrame(predict);
  }

  useEffect(() => {
    if (ref && ref.current) {
      init();
    }
  }, [ref]);

  return <S.StyledGazed ref={ref}>Gazed</S.StyledGazed>;
}
export default Gazed;
