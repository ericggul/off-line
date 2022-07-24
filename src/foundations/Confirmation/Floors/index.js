import React, { useState, useRef, useEffect } from "react";
import * as S from "./styles";

function Floors({ returnPreviousStep }) {
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

  function handleRegisterClick() {
    if (buttonActivated) {
      alert("Congratulations! You have successfully registered!");
      returnPreviousStep();
    }
  }

  let timeoutRef = useRef();
  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setId("");
      setPassword("");
      setConfirmPasswords([""]);
      setConfirmationNumber(0);
      setButtonActivated(false);
      returnPreviousStep();
    }, 30000);
    return () => clearTimeout(timeoutRef.current);
  }, [confirmPasswords]);

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
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            wrong={password !== "" && !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)}
            onBlur={() => {
              if (confirmationNumber === 0) {
                setConfirmationNumber(1);
              }
            }}
            onCopy={(e) => e.preventDefault()}
          />
          {password !== "" && !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password) && <S.Wrong>Requires at least one lowercase letter, one capital letter and one digit.</S.Wrong>}
        </S.SingleComp>

        {new Array(confirmationNumber).fill(0).map((_, i) => (
          <S.SingleComp key={i}>
            <S.Label>{"Confirm the ".repeat(i)}Confirm Password</S.Label>
            <S.ID
              type="password"
              value={confirmPasswords[i]}
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
              onPaste={(e) => e.preventDefault()}
            />
          </S.SingleComp>
        ))}
      </S.InputForms>

      <S.RegisterButton buttonActivated={buttonActivated} onClick={handleRegisterClick}>
        Register
      </S.RegisterButton>
    </S.StyledConfirmation>
  );
}
export default Floors;
