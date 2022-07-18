import React, { useRef } from "react";
import * as S from "./styles";

import useMovement from "./movenet";
import useDistance from "utils/hooks/useDistance";

function MonaLisa() {
  const MONA_LISA = { lat: 48.8606, lng: 2.3376 };
  const distance = useDistance(MONA_LISA);
  console.log(distance);

  const ref = useRef();

  useMovement(ref);

  return (
    <S.StyledMonaLisa>
      <S.VideoElement ref={ref}></S.VideoElement>
      <S.Cover>
        <S.Distance>150.35km</S.Distance>
        <S.Text>To Mona Lisa</S.Text>
      </S.Cover>
    </S.StyledMonaLisa>
  );
}
export default MonaLisa;
