import React, { useMemo } from "react";
import * as S from "./styles";
import useResize from "utils/hooks/useResize";

const getRandom = (a, b) => Math.random() * (b - a) + a;

function NoText({ data }) {
  const [windowWidth, windowHeight] = useResize();
  const textPositions = useMemo(
    () =>
      new Array(200).fill(0).map((_, i) => ({
        left: getRandom(0, windowWidth),
        top: getRandom(0, windowHeight),
      })),
    []
  );

  return (
    <S.StyledNoText>
      {textPositions.map((pos, i) => (
        <S.Text key={i} style={{ left: `${pos.left}px`, top: `${pos.top}px`, opacity: `${data[i + 36] > 50 ? 1 : 0.1}` }}>
          No
        </S.Text>
      ))}
    </S.StyledNoText>
  );
}
export default NoText;
