import React, { Suspense, useState } from "react";
import * as S from "./styles";

import { Canvas, useThree, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

import Effect from "foundations/SquarePillars/Effect";

function Model() {
  //create image

  const [texture, setTexture] = useState(null);

  function createTexture() {
    const text = "Learn More";
    const bitmap = document.createElement("canvas");
    var g = bitmap.getContext("2d");
    bitmap.width = 100;
    bitmap.height = 100;
    g.font = "Bold 20px Arial";

    g.fillStyle = "white";
    g.fillText(text, 0, 20);
    g.strokeStyle = "black";
    g.strokeText(text, 0, 20);
    setTexture(bitmap);
  }

  // useEffect(() => {
  //   createTexture();
  // }, [])

  //canvas contents will be used for a texture

  const props = useTexture({
    map: texture,
  });
  console.log(props);

  return (
    <mesh>
      <boxGeometry attach="geometry" args={[10, 100, 10]} />
      <meshLambertMaterial color="white" attach="material" />
    </mesh>
  );
}

function SquarePillars() {
  return (
    <S.StyledSquarePillars>
      <Canvas shadows dpr={[1, 2]} gl={{ alpha: false, antialias: false }} camera={{ fov: 90, position: [0, 0, 10], near: 1, far: 5000 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[100, 100, 100]} color={"#F6DA77"} intensity={1} />
        <pointLight position={[-50, 80, -100]} color="#FFF500" intensity={0.8} />
        <pointLight position={[100, -150, -100]} color="#FCFAD1" intensity={0.9} />

        <Suspense fallback={null}>
          <Model />
        </Suspense>

        <OrbitControls />
        <Effect />
      </Canvas>
    </S.StyledSquarePillars>
  );
}
export default SquarePillars;
