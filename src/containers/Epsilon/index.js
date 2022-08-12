import React, { useState, useEffect, useMemo } from "react";
import * as S from "./styles";

const NALLE = [
  "annuale",
  "biennale",
  "triennale",
  "quadriennale",
  "quinquennale",
  "sessennale",
  "settennale",
  "ottennale",
  "nonennale",
  "decennale",
  "non decennale",
  "duodecennio",
  "tredecennio",
  "quattuordecennale",
  "quinto centenario",
  "sexdecennial",
  "settdecennale",
  "ottdecennale",
  "novdecennio",
  "vigennale",
  "un vigennio",
  "duo vigennio",
  "tre vigennio",
  "quattro vigennio",
  "cinque vigennio",
  "sei vigennio",
  "sette vigennio",
  "otto vigennio",
  "nove vigennio",
  "dieci vigennio",
  "undici vigennio",
  "dodici vigennio",
  "tredici vigennio",
  "quattordici vigennio",
  "quindici vigennio",
  "sedici vigennio",
  "diciassette vigennio",
  "diciotto vigennio",
  "diciannove vigennio",
  "ventigennio",
  "ventuno vigennio",
  "ventidue vigennio",
  "ventitre vigennio",
  "ventiquattro vigennio",
  "venticinque vigennio",
  "ventisei vigennio",
  "ventisette vigennio",
  "ventotto vigennio",
  "ventinove vigennio",
  "trentigennio",
  "trentuno vigennio",
  "trentidue vigennio",
  "trentitre vigennio",
  "trentiquattro vigennio",
  "trenticinque vigennio",

  "trentisei vigennio",
  "trentisette vigennio",
  "trentotto vigennio",
  "trentinove vigennio",
  "quattraginta vigennio",
  "quattragintuno vigennio",
  "quattragintadue vigennio",
  "quattragintatre vigennio",
  "quattragintaquattro vigennio",
  "quattragintacinque vigennio",
  "quattragintasei vigennio",
  "quattragintasette vigennio",
  "quattragintotto vigennio",
  "quattragintanove vigennio",
  "quinquaginta vigennio",
  "quinquagintuno vigennio",
  "quinquagintadue vigennio",
  "quinquagintatre vigennio",
  "quinquagintaquattro vigennio",
  "quinquagintacinque vigennio",
  "quinquagintasei vigennio",
  "quinquagintasette vigennio",

  "quinquagintotto vigennio",
  "quinquagintanove vigennio",
  "sexaginta vigennio",
  "sexagintuno vigennio",

  "PLURIDECENNALE",
];

function Epsilon() {
  const UP_TO = 69;
  const WAIT_SECONDS = 5000;

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    updateNext(1);
  }, []);

  function updateNext(number) {
    if (number > UP_TO) {
      setIdx(0);
      updateNext(1);
      return;
    }

    console.log(number);
    const timeout = setTimeout(() => {
      setIdx(number);
      updateNext(number + 1);
    }, WAIT_SECONDS / number);

    return () => clearTimeout(timeout);
  }

  return (
    <S.StyledEpsilon style={{ background: `hsl(${(idx * 53) % 360}, 75%, 50%)`, color: `hsl(${(idx * 53 + 180) % 360}, 75%, 50%)` }}>
      <h3>Welcome to</h3>
      <h1>2022 {idx >= UP_TO ? "PLURIDECENNALE" : NALLE[idx]}</h1>
    </S.StyledEpsilon>
  );
}
export default Epsilon;
