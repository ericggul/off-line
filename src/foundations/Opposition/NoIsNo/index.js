import React, { useMemo } from "react";
import * as S from "./styles";
import useResize from "utils/hooks/useResize";
function NoIsNo({ seconds }) {
  console.log(seconds);

  return <S.StyledNoIsNo>{seconds > 10 && <S.NoIsNo>NO IS NO</S.NoIsNo>}</S.StyledNoIsNo>;
}
export default NoIsNo;
