import React, { useState, useEffect, useMemo, useRef } from "react";
import * as S from "./styles";
import Plane from "static/images/Gates/plane.svg";

const getRandom = (min, max) => Math.random() * (max - min) + min;

function Gate({ item, triggerFly }) {
  const ARRAY = ["", "Go To Gate", "Boarding", "Last Call", "Gate Closure"];
  const [currentStep, setCurrentStep] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      timeouts();
    }, (item.idle + item.step1 + item.step2 + item.step3 + item.step4) * 1000);

    const timeouts = () => {
      setCurrentStep(0);
      setTimeout(() => {
        setCurrentStep(1);
      }, item.idle * 1000);
      setTimeout(() => {
        setCurrentStep(2);
      }, (item.idle + item.step1) * 1000);
      setTimeout(() => {
        setCurrentStep(3);
      }, (item.idle + item.step1 + item.step2) * 1000);
      setTimeout(() => {
        setCurrentStep(4);
        triggerFly();
      }, (item.idle + item.step1 + item.step2 + item.step3) * 1000);
    };

    return () => clearInterval(interval);
  }, [item]);

  return (
    <S.Gate>
      <S.GateTitle step={currentStep}>{ARRAY[currentStep]}</S.GateTitle>
    </S.Gate>
  );
}
function Gates() {
  const items = useMemo(() => {
    let length = 400;
    let result = [];
    for (let i = 0; i < length; i++) {
      const speed = getRandom(0.6, 2);
      result.push({
        idle: speed * getRandom(5, 25),
        step1: speed * getRandom(5, 20),
        step2: speed * getRandom(5, getRandom(5, 15)),
        step3: speed * getRandom(1, getRandom(1, 5)),
        step4: speed * getRandom(3, 15),
        initialDelay: getRandom(0, 10),
      });
    }
    return result;
  }, []);

  const containerRef = useRef();
  function handleFly() {
    if (containerRef && containerRef.current) {
      let plane = document.createElement("img");
      plane.src = Plane;
      containerRef.current.append(plane);

      const timing = {
        duration: getRandom(600, 900),
        iterations: 1,
      };
      let movingAnimation;
      if (Math.random() < 0.5) {
        plane.style.top = getRandom(105, 115) + "vh";
        plane.style.left = getRandom(-5, -15) + "vh";
        movingAnimation = [{ transform: "translate(0, 0)" }, { transform: "translate(120vw,-120vh)" }];
      } else {
        plane.style.top = getRandom(-15, -5) + "vh";
        plane.style.left = getRandom(-5, -15) + "vh";
        movingAnimation = [{ transform: "translate(0, 0)" }, { transform: "translate(120vw,120vh)" }];
      }

      plane.animate(movingAnimation, timing);
      setTimeout(() => {
        plane.remove();
      }, 1000);
    }
  }

  return (
    <S.StyledGates ref={containerRef}>
      <S.Wrapper>
        {items.map((item, i) => (
          <Gate item={item} key={i} triggerFly={handleFly} />
        ))}
      </S.Wrapper>
    </S.StyledGates>
  );
}
export default Gates;
