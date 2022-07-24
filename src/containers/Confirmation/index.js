import React, { useState } from "react";
import { useEffect } from "react";
import * as S from "./styles";

import Lobby from "foundations/Confirmation/Lobby";
import Floors from "foundations/Confirmation/Floors";

function Confirmation() {
  const [step, setStep] = useState("lobby");

  return (
    <>
      {step === "lobby" && <Lobby goNextStep={() => setStep("floors")} />}
      {step === "floors" && <Floors />}
    </>
  );
}
export default Confirmation;
