import React, { useState } from "react";
import * as S from "./styles";

function Controller() {
  const TEXTS = [
    "What is this artwork?",
    "This artwork questions.",
    "What does this questions?",
    "This artwork questions the validity.",
    "Which kind of validity?",
    "Of everything, basically",
    "Can you be more specific?",
    "Well, look at these holes",
    "You mean these sixteen holes?",
    "Yes, exactly",
    `Well, I don't really get it.`,
    "Well, then you had understood perfectly.",
    "What had I understood?",
    `You just said that you don't get it, didn't you.`,
    "Yes I did",
    `Well I'm so tired today. Let me explain you tomorrow`,
  ];
  const [contents, setContents] = useState(new Array(16).fill(""));
  const [text, setText] = useState(-1);

  function handleClick(i) {
    if (contents[i] === "") {
      setText((i) => (i + 1) % TEXTS.length);
    }
    setContents((c) => {
      let x = [...c];
      if (x[i] === "") {
        x[i] = Math.random() < 0.1 ? "!" : "?";
      } else {
        setText(-1);
        x[i] = "";
      }
      return x;
    });
  }

  console.log(text);

  return (
    <S.StyledController>
      <S.Buttons>
        {new Array(16).fill(0).map((_, i) => (
          <S.Button key={i} onClick={() => handleClick(i)}>
            {contents[i]}
          </S.Button>
        ))}
      </S.Buttons>
      <S.Text>{text === -1 ? " " : TEXTS[text]}</S.Text>
    </S.StyledController>
  );
}
export default Controller;
