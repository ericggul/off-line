import React, { useMemo, useState } from "react";
import * as S from "./styles";
import useResize from "utils/hooks/useResize";
import { useEffect } from "react";

const getRandom = (a, b) => Math.random() * (b - a) + a;

function Switch() {
  const [windowWidth, windowHeight] = useResize();
  const INTERVAL = 40;
  const xLength = useMemo(() => Math.ceil(windowWidth / INTERVAL), [windowWidth]);
  const yLength = useMemo(() => Math.ceil(windowHeight / INTERVAL), [windowHeight]);

  const formPos = useMemo(
    () =>
      new Array(xLength * yLength).fill(0).map((_, i) => ({
        x: (i % xLength) * INTERVAL,
        y: Math.floor(i / xLength) * INTERVAL,
      })),
    [windowWidth, windowHeight]
  );

  const [formVal, setFormVal] = useState(false);
  const [iterations, setIterations] = useState(-11);
  const [rebellions, setRebellions] = useState([]);

  useEffect(() => {
    if (formVal) {
      setIterations((it) => it + 1);
    }
  }, [formVal]);

  useEffect(() => {
    setRebellions((val) => {
      let whole = xLength * yLength;
      let arr = [];
      for (let i = 0; i < whole; i++) {
        if (Math.random() < Math.exp(-iterations) / (1 + Math.exp(-iterations)) ** 2) {
          arr.push(i);
        }
      }

      return [...val, ...arr];
    });
  }, [iterations, xLength, yLength]);

  console.log(rebellions);
  return (
    <S.StyledSwitch>
      {formPos.map((pos, i) => (
        <S.Input
          type="checkbox"
          key={i}
          x={pos.x}
          y={pos.y}
          checked={rebellions.includes(i) ? false : formVal}
          onChange={() => (rebellions.includes(i) ? alert("We want Freedom, not a selection!") : setFormVal((v) => !v))}
        />
      ))}
    </S.StyledSwitch>
  );
}
export default Switch;
