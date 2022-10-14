import React, { useState } from "react";
import * as S from "./styles";

function Converter() {
  const [realVal, setRealVal] = useState("");

  const [mimicTexts, setMimicTexts] = useState(["", "", "", "", "", "", "", "", "", "", "", "", "", ""]);

  const [text, setText] = useState("");

  function handleChange(e) {
    let val = e.target.value;

    if (val.length > realVal.length) {
      setRealVal((v) => v + val[val.length - 1]);
      let lastChar = val[val.length - 1];
      if (lastChar.charCodeAt(0) < 65 || lastChar.charCodeAt(0) > 122) {
        setText((t) => t + lastChar);
        setMimicTexts((arr) => {
          let newArr = [...arr];
          return newArr.map((txt) => txt + lastChar);
        });
        return;
      }
      let code = ((lastChar.charCodeAt(0) - 65 + 1) % 52) + 65;
      setText((txt) => txt + String.fromCharCode(code));

      setMimicTexts((arr) => {
        let newArr = [...arr];
        return newArr.map((txt, i) => txt + String.fromCharCode(((lastChar.charCodeAt(0) - 65 + i + 7) % 52) + 65));
      });
    } else {
      setRealVal((v) => v.slice(0, -1));
      setText((txt) => txt.slice(0, -1));
      setMimicTexts((arr) => {
        let newArr = [...arr];
        return newArr.map((txt) => txt.slice(0, -1));
      });
    }
  }

  return (
    <S.StyledConverter>
      {mimicTexts.map((txt, i) => (
        <S.Mimic key={i}>{txt}</S.Mimic>
      ))}
      <S.ID placeholder="Please type in English" value={text} onChange={handleChange} />
      {mimicTexts.reverse().map((txt, i) => (
        <S.Mimic key={i}>{txt}</S.Mimic>
      ))}
    </S.StyledConverter>
  );
}
export default Converter;
