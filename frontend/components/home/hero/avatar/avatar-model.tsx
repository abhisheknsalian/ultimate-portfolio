"use client";

import { useEffect, useRef } from "react";
import type { Group } from "three";
import { useGLTF, useAnimations } from "@react-three/drei";

import { useAvatarEngine } from "./use-avatar-engine";

const MODEL_PATH = "/avatar/models/abhishek.glb";
const IDLE_CLIP = "IdleV4.2(maya_head)";

export default function AvatarModel() {
  const group = useRef<Group>(null);
  const { scene, animations } = useGLTF(MODEL_PATH);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const idle = actions[IDLE_CLIP];

    idle?.reset().fadeIn(0.4).play();

    return () => {
      idle?.fadeOut(0.2);
    };
  }, [actions]);

  useAvatarEngine((pose) => {
    const idle = actions[IDLE_CLIP];

    if (idle) {
      idle.timeScale = pose.idleTimeScale;
    }
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload(MODEL_PATH);
