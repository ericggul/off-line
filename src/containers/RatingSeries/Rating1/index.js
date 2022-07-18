import React, { useState, useEffect, useRef, useMemo } from "react";
import * as S from "./styles";

//hooks
import useResize from "utils/hooks/useResize";

//assets
import StarFill from "./assets/star-fill.svg";
import Star from "./assets/star.svg";

const getRandom = (min, max) => Math.random() * (max - min) + min;

function Rate({ keyword, visibility, raiting, top, left }) {
  const horizontalOrVertical = Math.random() < 0.5;
  const hue = useMemo(() => getRandom(0, 360), []);
  const positiveColor = useMemo(() => `hsl(${hue}, 100%, 80%)`, []);
  const negativeColor = useMemo(() => `hsl(${hue}, 100%, 10%)`, []);

  return (
    <S.BundleAbsolute visibility={visibility} top={top} left={left} horizontalOrVertical={horizontalOrVertical}>
      {new Array(5).fill(0).map((_, i) => (
        <S.Letter raiting={raiting > i} key={i} style={{ color: raiting > i ? positiveColor : negativeColor }}>
          {keyword}
        </S.Letter>
      ))}
    </S.BundleAbsolute>
  );
}

const KEYWORDS_ARRAY = [
  "GOOD",
  "REVISIT",
  "REVIEW",
  "RECOMMENDED",
  "EXCELENT",
  "AWESOME",
  "AMAZING",
  "GREAT",
  "EXCELLENT",
  "SUPERB",
  "BEST",
  "POOR",
  "BAD",
  "TERRIBLE",
  "AWFUL",
  "CRAP",
  "SUCK",
  "SOSO",
  "BEAUTIFUL",
  "FANTASTIC",
  "OK",
  "NOT BAD",

  "ASTONISHIING",
];

function Raiting() {
  //state
  const [rate, setRate] = useState(0);
  const [visibilityArray, setVisibilityArray] = useState(new Array(KEYWORDS_ARRAY.length).fill(0));
  const [windowWidth, windowHeight] = useResize();

  //ref
  const intervalRef = useRef(null);

  function triggerChange() {
    setVisibilityArray(new Array(KEYWORDS_ARRAY.length).fill(0));
    intervalRef.current = setInterval(() => {
      setVisibilityArray((prev) => {
        const newArray = [...prev];
        newArray[Math.floor(getRandom(0, KEYWORDS_ARRAY.length))] = 1;

        return newArray;
      });
    }, 1500 / (rate + 1));
  }

  useEffect(() => {
    if (intervalRef.current) {
      return () => clearInterval(intervalRef.current);
    }
  }, [intervalRef, rate]);

  return (
    <S.StyledRaiting>
      <S.Bundle>
        {new Array(5).fill(0).map((_, i) => (
          <S.Rate
            src={rate > i ? StarFill : Star}
            key={i}
            onClick={() => {
              setRate(i + 1);
              triggerChange();
            }}
          />
        ))}
      </S.Bundle>
      {KEYWORDS_ARRAY.map((keyword, i) => (
        <Rate keyword={keyword} visibility={visibilityArray[i]} key={i} raiting={rate} top={getRandom(0, windowHeight)} left={getRandom(0, windowWidth)} />
      ))}
    </S.StyledRaiting>
  );
}
export default Raiting;
