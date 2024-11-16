import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  const decalPositions = [
    { position: [0, 0, 1], rotation: [0, 0, 0] }, // Front
    { position: [0, 0, -1], rotation: [Math.PI, 0, 0] }, // Back
    { position: [1, 0, 0], rotation: [0, Math.PI / 2, 0] }, // Right
    { position: [-1, 0, 0], rotation: [0, -Math.PI / 2, 0] }, // Left
    { position: [0, 1, 0], rotation: [Math.PI / 2, 0, 0] }, // Top
    { position: [0, -1, 0], rotation: [-Math.PI / 2, 0, 0] }, // Bottom
  ];

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
      {decalPositions.map((decalPos, index) => (
        <Decal
          key={index}
          position={decalPos.position}
          rotation={decalPos.rotation}
          scale={0.8}
          map={decal}
          flatShading
        />
      ))}
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
