import React, { useEffect, useState } from "react";
import * as S from "./styles";

function HappyBirthday() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [day, setDay] = useState(new Date().getDate());

  const [bdayMonth, setBDayMonth] = useState("");
  const [bdayDay, setBDayDay] = useState("");

  function numberFormatter(number) {
    if (number < 10) {
      return "0" + number;
    } else {
      return number;
    }
  }

  //submit button
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      //to do
    }
  }, [isSubmitted]);

  return (
    <S.StyledHappyBirthday>
      When is your birthday?
      <S.BirthdayTab>
        <S.BirthdayTabItem>
          <S.BirthdayTabItemLabel>Month</S.BirthdayTabItemLabel>
          <S.BirthdayTabItemInput type="number" value={bdayMonth} onChange={(e) => setBDayMonth(e.target.value)} />
        </S.BirthdayTabItem>
        <S.BirthdayTabItem>
          <S.BirthdayTabItemLabel>Day</S.BirthdayTabItemLabel>
          <S.BirthdayTabItemInput type="number" value={bdayDay} onChange={(e) => setBDayDay(e.target.value)} />
        </S.BirthdayTabItem>
        <S.SubmitButton onClick={() => setIsSubmitted(true)}>Submit</S.SubmitButton>
      </S.BirthdayTab>
      <S.DateTab>
        Today {numberFormatter(day)}-{numberFormatter(month)}-{year}
      </S.DateTab>
    </S.StyledHappyBirthday>
  );
}
export default HappyBirthday;
