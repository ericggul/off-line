import React, { useEffect, useState, useRef } from "react";
import * as S from "./styles";
import * as Magenta from "@magenta/music";
import * as Tone from "tone";

function MagentaTest() {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    if (clicked) {
      modelInit();
      // const model = new Magenta.MusicVAE("https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/trio_4bar");

      // const player = new Magenta.Player();

      // model.initialize().then(() => {
      //   model.sample(10).then((samples) => {
      //     // Tone.Transport.stop();
      //     if (player.isPlaying()) {
      //       player.stop();
      //     }
      //     player.resumeContext();
      //     console.log(samples);
      //     player.start(samples[0]);
      //   });
      // });
    }
  }, [clicked]);

  const modelRef = useRef(null);
  const playerRef = useRef(null);

  async function modelInit() {
    const model = new Magenta.MusicVAE("https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/mel_16bar_small_q2");
    const player = new Magenta.Player();
    await model.initialize();

    modelRef.current = model;
    playerRef.current = player;
    generateAndPlay();
  }

  function generateAndPlay() {
    modelRef.current
      .sample(1)
      .then((samples) => {
        if (playerRef.current.isPlaying()) {
          playerRef.current.stop();
        }
        playerRef.current.resumeContext();
        playerRef.current.start(samples[0]);
      })
      .then(generateAndPlay);
  }

  return <S.StyledMagentaTest onClick={() => setClicked(true)}>MagentaTest</S.StyledMagentaTest>;
}
export default MagentaTest;
