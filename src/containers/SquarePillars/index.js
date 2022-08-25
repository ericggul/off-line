import React, { Suspense, useMemo, useRef } from "react";
import * as S from "./styles";

import { Canvas, useThree, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

import Effect from "foundations/SquarePillars/Effect";

const getRandom = (a, b) => Math.random() * (b - a) + a;

function Model({ yLoc, color, speed }) {
  const ref = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    ref.current.position.y = yLoc * 1;
    ref.current.rotation.y = time * speed;
  });

  return (
    <mesh ref={ref}>
      <boxGeometry attach="geometry" args={[4, 1, 4]} />
      <meshLambertMaterial color={color} attach="material" />
    </mesh>
  );
}

function SquarePillars() {
  const modelsNumber = 51;
  const modelsArray = useMemo(() => {
    let arr = [];
    for (let i = 0; i < modelsNumber; i++) {
      arr.push({
        yLoc: i - (modelsNumber - 1) / 2,

        color: `hsl(${getRandom(0, 360)}, 100%, 75%)`,
        speed: getRandom(0, getRandom(1, 3)) * (Math.random() < 0.5 ? -1 : 1),
      });
    }
    return arr;
  }, []);
  return (
    <S.StyledSquarePillars>
      <Canvas shadows dpr={[1, 2]} gl={{ alpha: false, antialias: false }} camera={{ fov: 90, position: [0, 0, 10], near: 1, far: 5000 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[100, 100, 100]} color={"#F6DA77"} intensity={0.5} />
        <pointLight position={[-50, 80, -100]} color="#AAF500" intensity={0.3} />
        <pointLight position={[100, -150, -100]} color="#FCFAD1" intensity={0.5} />

        <Suspense fallback={null}>
          {modelsArray.map((data, i) => (
            <Model {...data} key={i} />
          ))}
        </Suspense>

        <OrbitControls />
        <Effect />
      </Canvas>
    </S.StyledSquarePillars>
  );
}
export default SquarePillars;
