import React, { useState, useEffect } from "react";
import * as S from "./styles";

function Second() {
  const [second, setSecond] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecond((sec) => {
        if (sec < -2) {
          return 5;
        } else {
          return sec - 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    speak(second);
  }, [second]);

  function speak(second) {
    if (second > 0) {
      const synth = window.speechSynthesis;

      var msg = new SpeechSynthesisUtterance(`${second} ${second >= 2 ? "seconds" : "second"}`);
      msg.pitch = 1;
      msg.rate = 1.5;
      synth.speak(msg);
    }
  }

  return <S.StyledSecond>{second > 0 ? second : ""}</S.StyledSecond>;
}
export default Second;
