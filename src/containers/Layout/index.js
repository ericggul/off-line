import React, { useState, useRef } from "react";
import * as S from "./styles";
import useRandomInterval from "utils/hooks/useRandomInterval";
import { useEffect } from "react";

const getRandomInt = (a, b) => Math.floor(Math.random() * (b - a + 1) + a);

function Layout() {
  //the change of value
  const [value, setValue] = useState(64);
  const [showedValue, setShowedValue] = useState(value);

  useRandomInterval(() => setValue(getRandomInt(64, 127)), 2000, 5000);

  //change showedvalueRef on value change
  useEffect(() => {
    if (value !== showedValue) {
      const interval = setInterval(() => {
        setShowedValue((v) => v + (value > v ? 1 : -1));
      }, 300 / Math.abs(value - showedValue));
      return () => clearInterval(interval);
    }
  }, [value, showedValue]);

  return (
    <S.StyledLayout>
      <S.Left>{showedValue}</S.Left>
      <S.Right>
        {new Array(6).fill(0).map((_, i) => (
          <S.Dot
            key={i}
            style={{
              background: Math.floor(showedValue / 2 ** i) % 2 === 0 ? "transparent" : "hsl(85, 100%, 70%)",
            }}
          />
        ))}
      </S.Right>
    </S.StyledLayout>
  );
}
export default Layout;
