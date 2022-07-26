import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { INSTRUCTIONS, BOTTOM } from "./data";

//useSpring
import { useSpring } from "@react-spring/web";

function Instructions() {
  const [instructionNumber, setInstructionNumber] = useState(0);
  const [bottomNumber, setBottomNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBottomNumber((no) => (no + 1) % BOTTOM.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <S.StyledInstructions>
      <S.Header>창고 안전관리 수칙</S.Header>
      <S.Indicator>
        <S.Arrow onClick={() => setInstructionNumber((n) => (n === 0 ? INSTRUCTIONS.length - 1 : (n - 1) % INSTRUCTIONS.length))}>{"<"}</S.Arrow>
        {`${instructionNumber + 1}/${INSTRUCTIONS.length}`}
        <S.Arrow onClick={() => setInstructionNumber((n) => (n + 1) % INSTRUCTIONS.length)}> {">"}</S.Arrow>
      </S.Indicator>

      <S.Contents>
        <S.MainTextWrapper>
          {INSTRUCTIONS.map((inst, idx) => (
            <S.MainText key={idx} idx={idx} instructionNumber={instructionNumber}>
              {inst}
            </S.MainText>
          ))}
        </S.MainTextWrapper>
      </S.Contents>

      <S.Footer>{BOTTOM[bottomNumber]}</S.Footer>
    </S.StyledInstructions>
  );
}
export default Instructions;
