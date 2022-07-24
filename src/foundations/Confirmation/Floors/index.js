import React, { useState } from "react";
import { useEffect } from "react";
import * as S from "./styles";

function Floors() {
  //number: number of confirmations
  const [number, setNumber] = useState(3);
  const [id, setId] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPasswords, setConfirmPasswords] = useState([""]);
  const [confirmationNumber, setConfirmationNumber] = useState(0);

  const [buttonActivated, setButtonActivated] = useState(false);

  useEffect(() => {
    if (confirmPasswords[confirmationNumber - 1] === password && password !== "" && confirmationNumber >= 1) {
      setConfirmPasswords((pw) => [...pw, ""]);
      setConfirmationNumber((no) => no + 1);

      if (confirmationNumber === number) {
        if (confirmPasswords.every((pw) => pw === password)) {
          setButtonActivated(true);
        }
      } else if (confirmationNumber !== number) {
        setButtonActivated(false);
      }
    }
  }, [confirmationNumber, confirmPasswords, password]);

  return (
    <S.StyledConfirmation>
      <S.Background />
      <S.InputForms>
        <S.SingleComp>
          <S.Label>Username</S.Label>
          <S.ID type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </S.SingleComp>

        <S.SingleComp>
          <S.Label>Password</S.Label>
          <S.ID
            value={"*".repeat(password.length)}
            onChange={(e) => setPassword(e.target.value)}
            wrong={password !== "" && !new RegExp("^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$").test(password)}
            onBlur={() => {
              if (confirmationNumber === 0) {
                setConfirmationNumber(1);
              }
            }}
          />
        </S.SingleComp>

        {new Array(confirmationNumber).fill(0).map((_, i) => (
          <S.SingleComp key={i}>
            <S.Label>{"Confirm the ".repeat(i)}Confirm Password</S.Label>
            <S.ID
              value={"*".repeat(confirmPasswords[i].length)}
              onChange={(e) =>
                setConfirmPasswords((pw) => {
                  let copy = [...pw];
                  copy[i] = e.target.value;
                  return copy;
                })
              }
              wrong={confirmPasswords[i] !== "" && confirmPasswords[i] !== password}
              onBlur={() => {
                if (confirmPasswords[i] === password && confirmationNumber === i + 1) {
                  setConfirmPasswords((pw) => [...pw, ""]);
                  setConfirmationNumber(i + 2);
                  if (confirmationNumber === number) {
                    setButtonActivated(true);
                  }
                }
              }}
            />
          </S.SingleComp>
        ))}
      </S.InputForms>

      <S.RegisterButton buttonActivated={buttonActivated}>Register</S.RegisterButton>
    </S.StyledConfirmation>
  );
}
export default Floors;
