import React, { useState, useMemo } from "react";
import * as S from "./styles";

import useResize from "utils/hooks/useResize";

const getRandom = (a, b) => Math.random() * (b - a) + a;
function Range() {
  const [value, setValue] = useState(0);
  const [windowWidth, windowHeight] = useResize();

  const pluses = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 300; i++) {
      arr.push({
        x: getRandom(0, windowWidth),
        y: getRandom(0, windowHeight),
        show: getRandom(getRandom(0, 50), getRandom(50, 100)),
        size: getRandom(3, 5),
      });
    }
    return arr;
  }, [windowWidth, windowHeight]);

  console.log(value);

  return (
    <S.StyledRange>
      <S.Input type="range" value={value} onChange={(e) => setValue(e.target.value)} min="0" max="100" />
      {pluses.map((plus, i) => (
        <S.Plus key={i} left={plus.x} top={plus.y} show={plus.show < value} rotation={getRandom(0, 720)} size={plus.size}>
          +
        </S.Plus>
      ))}
    </S.StyledRange>
  );
}
export default Range;
