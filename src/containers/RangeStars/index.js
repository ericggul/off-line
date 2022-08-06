import React, { useState, useMemo } from "react";
import * as S from "./styles";

import useResize from "utils/hooks/useResize";

const getRandom = (a, b) => Math.random() * (b - a) + a;
function Range() {
  const [value, setValue] = useState(0);
  const [windowWidth, windowHeight] = useResize();

  const division = useMemo(() => (new Date().getMinutes() % 60) + 20, []);

  const pluses = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 400; i++) {
      arr.push({
        x: getRandom(0, windowWidth),
        y: getRandom(0, windowHeight),
        show: getRandom(getRandom(division - 2, division), getRandom(division, division + 2)),
        size: getRandom(0.8, getRandom(0.8, getRandom(1, 5))),
        color: `hsl(${getRandom(197, 360)}, 80%, 91%)`,
      });
    }
    return arr;
  }, [windowWidth, windowHeight, division]);

  return (
    <S.StyledRange>
      <S.Input type="range" value={value} onChange={(e) => setValue(e.target.value)} min="0" max="100" />
      {pluses.map((plus, i) => (
        <S.Plus key={i} left={plus.x} top={plus.y} show={plus.show < value} rotation={getRandom(0, 720)} color={plus.color} size={plus.size}>
          +
        </S.Plus>
      ))}
    </S.StyledRange>
  );
}
export default Range;
