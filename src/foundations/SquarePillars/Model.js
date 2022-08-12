import React, { useMemo } from "react";
import * as THREE from "three";

const getRandom = (a, b) => Math.random() * (b - a) + a;

function Etoile({ R, h, d, color }) {
  const extrudeSettings = {
    steps: 2,
    depth: 10,
    bevelEnabled: false,
    bevelThickness: 2,
    bevelSize: 1,
    bevelOffset: 0,
    bevelSegments: 5,
  };

  //PARAMS
  const theta = Math.PI / 6;
  const halfTheta = Math.PI / 12;

  const s = useMemo(() => d / Math.tan(halfTheta), [d]);
  const r = useMemo(() => R - s, [R]);
  const ir = useMemo(() => d / Math.sin(halfTheta), [d]);

  const shape = useMemo(() => {
    const _shape = new THREE.Shape();
    _shape.moveTo(0, r);
    _shape.lineTo(0, r + h);
    _shape.lineTo((r + h) / 2, ((r + h) * Math.sqrt(3)) / 2);
    _shape.lineTo(r / 2, (r * Math.sqrt(3)) / 2);
    _shape.lineTo(0, r);
    return _shape;
  }, [R, h, d]);

  // const color = useMemo(() => `hsl(${getRandom(0, 350)}, 100%, 40%)`, []);

  return (
    <>
      {new Array(12).fill(0).map((_, i) => (
        <mesh rotation={[0, 0, -i * theta]} position={[ir * Math.sin(halfTheta + theta * i), ir * Math.cos(halfTheta + theta * i), 0]}>
          <extrudeBufferGeometry attach="geometry" args={[shape, extrudeSettings]} />
          <meshLambertMaterial attach="material" color={color} emissive="#000000" />
        </mesh>
      ))}
    </>
  );
}
export default Etoile;
