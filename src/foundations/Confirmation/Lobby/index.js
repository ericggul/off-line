import React from "react";
import * as S from "./styles";

function Lobby({ goNextStep }) {
  return <S.StyledLobby onClick={goNextStep}>Register</S.StyledLobby>;
}
export default Lobby;
