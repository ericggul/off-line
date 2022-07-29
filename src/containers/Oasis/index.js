import React, { useMemo, useEffect, useState } from "react";
import * as S from "./styles";

import * as Tone from "tone";

const getRandom = (a, b) => Math.random() * (b - a) + a;

function Oasis() {
  const CHORD_ARRAY = ["B5", "C6", "E6", "F#6", "G6"];
  const [chordIdx, setChordIdx] = useState(0);

  function playSynth() {
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    const now = Tone.now();
    const playStart = getRandom(0, 2);
    const playEnd = getRandom(3, 5);
    synth.triggerAttack(CHORD_ARRAY[chordIdx], now + playStart);
    synth.triggerRelease(CHORD_ARRAY[chordIdx], now + playEnd);
    setChordIdx((pl) => (1 + pl) % CHORD_ARRAY.length);
  }

  return (
    <S.StyledOasis onClick={playSynth}>
      <h1>Oasis</h1>
      <p>Opening Soon</p>
    </S.StyledOasis>
  );
}
export default Oasis;
