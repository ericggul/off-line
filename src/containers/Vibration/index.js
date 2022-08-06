import React, { useState, useEffect } from "react";
import * as S from "./styles";

const getRandom = (min, max) => Math.random() * (max - min) + min;

function Vibration() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function timeoutSequence(informationArray) {
    informationArray.map(({ pos, time }) => {
      console.log(pos, time);
      setTimeout(() => {
        setPos(pos);
      }, time);
    });
  }

  function vibration() {
    navigator.vibrate([500, 250, 500, 250, 500, 250, 500, 250, 500, 250, 500]);

    const TIME_SEQUENCE = new Array(100).fill(0).map((_, i) => ({ pos: { x: getRandom(-2, 2), y: getRandom(-2, 2) }, time: i * 15 }));
    timeoutSequence(TIME_SEQUENCE);
  }
  useEffect(() => {
    document.addEventListener("click", vibration);
    return () => document.removeEventListener("click", vibration);
  }, []);
  return <S.StyledVibration pos={pos}>.</S.StyledVibration>;
}
export default Vibration;
