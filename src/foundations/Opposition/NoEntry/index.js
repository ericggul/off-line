import React, { useMemo } from "react";
import * as S from "./styles";
import useResize from "utils/hooks/useResize";

const getRandom = (a, b) => Math.random() * (b - a) + a;

function NoEntry({ data }) {
  const [windowWidth, windowHeight] = useResize();
  const entryPositions = useMemo(
    () =>
      new Array(64).fill(0).map((_, i) => ({
        left: getRandom(0, windowWidth),
        top: getRandom(0, windowHeight),
      })),
    []
  );

  return (
    <S.StyledNoEntry>
      {entryPositions.map((pos, i) => (
        <S.NoEntry key={i} style={{ left: `${pos.left}px`, top: `${pos.top}px`, opacity: `${Math.max(data[i * 4] - 100, 0) * 0.01}` }}>
          <S.Inner />
        </S.NoEntry>
      ))}
    </S.StyledNoEntry>
  );
}

export default NoEntry;
