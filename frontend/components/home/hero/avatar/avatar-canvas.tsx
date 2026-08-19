"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Bounds } from "@react-three/drei";

import AvatarModel from "./avatar-model";

export default function AvatarCanvas() {
  return (
    <Canvas
      camera={{ fov: 35 }}
      dpr={[1, 2]}
      gl={{ antialias: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 4, 3]} intensity={1.2} />
      <directionalLight position={[-3, 2, -2]} intensity={0.4} />

      <Suspense fallback={null}>
        <Bounds fit clip observe margin={1.2}>
          <AvatarModel />
        </Bounds>
      </Suspense>
    </Canvas>
  );
}
