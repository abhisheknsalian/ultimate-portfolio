"use client";

import { useGLTF } from "@react-three/drei";

const MODEL_PATH = "/avatar/models/abhishek.glb";

export default function AvatarModel() {
  const { scene } = useGLTF(MODEL_PATH);

  return <primitive object={scene} />;
}

useGLTF.preload(MODEL_PATH);
