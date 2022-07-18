import React, { useState, useMemo, useEffect } from "react";
import * as S from "./styles";

const SEMANTIC_RATINGS1 = ["terrible", "bad", "ok", "good", "excellent"];
const SEMANTIC_RATINGS2 = ["awful", "poor", "acceptable", "qualified", "excellent"];

const SEMANTIC_SPANISH_RATING = ["terrible", "mala", "ok", "buena", "excelente"];
const SEMANTIC_FRENCH_RATING = ["terrible", "mauvais", "ok", "bon", "excellent"];
const SEMANTIC_GERMAN_RATING = ["schlecht", "schlechter", "ok", "gut", "exzellent"];
const SEMANTIC_ITALIAN_RATING = ["scarsa", "scarsa", "ok", "buona", "eccellente"];

const getRandom = (a, b) => Math.random() * (b - a) + a;

function useAppearAfterTime(rating, timeMax) {
  const [appear, setAppear] = useState(false);
  const timeToAppear = useMemo(() => getRandom(0, timeMax), [rating]);

  useEffect(() => {
    setAppear(false);
    const timeout = setTimeout(() => {
      setAppear(true);
    }, timeToAppear);
    return () => clearTimeout(timeout);
  }, [rating]);

  return appear;
}

function FractionalEl({ rating }) {
  const appear = useAppearAfterTime(rating, 5000);
  return <S.FractionalEl appear={appear}>{rating}/5</S.FractionalEl>;
}

function DecimalEl({ rating }) {
  const appear = useAppearAfterTime(rating, 5000);
  return <S.DecimalEl appear={appear}>{rating / 5}</S.DecimalEl>;
}

function Rating2() {
  const [rate, setRate] = useState(0);
  const [visible, setVisible] = useState(false);

  return (
    <S.StyledRating2>
      <S.Bundle>
        {new Array(5).fill(0).map((_, i) => (
          <S.Rate
            filled={rate > i}
            key={i}
            onClick={() => {
              setRate(i + 1);
              setVisible(true);
            }}
          />
        ))}
      </S.Bundle>

      {visible && (
        <>
          <FractionalEl rating={rate} />
          <DecimalEl rating={rate} />
        </>
      )}
    </S.StyledRating2>
  );
}
export default Rating2;
