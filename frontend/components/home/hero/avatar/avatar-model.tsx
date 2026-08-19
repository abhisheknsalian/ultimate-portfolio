"use client";

import { useEffect, useRef } from "react";
import type { Group } from "three";
import { useGLTF, useAnimations } from "@react-three/drei";

import { useAvatarBridge } from "./use-avatar-bridge";
import { AvatarState } from "./avatar-state";

const MODEL_PATH = "/avatar/models/abhishek.glb";
const IDLE_CLIP = "IdleV4.2(maya_head)";

// Provisional: a direct state -> timeScale mapping. This is the seam
// milestone 4's PostureController takes over.
const IDLE_TIME_SCALE: Record<AvatarState, number> = {
  [AvatarState.IDLE]: 1,
  [AvatarState.WAVE]: 1,
  [AvatarState.TYPING]: 1,
  [AvatarState.THINKING]: 1.15,
  [AvatarState.SPEAKING]: 1.3,
};

export default function AvatarModel() {
  const group = useRef<Group>(null);
  const { scene, animations } = useGLTF(MODEL_PATH);
  const { actions } = useAnimations(animations, group);
  const avatarState = useAvatarBridge();

  useEffect(() => {
    const idle = actions[IDLE_CLIP];

    idle?.reset().fadeIn(0.4).play();

    return () => {
      idle?.fadeOut(0.2);
    };
  }, [actions]);

  useEffect(() => {
    const idle = actions[IDLE_CLIP];

    if (idle) {
      idle.timeScale = IDLE_TIME_SCALE[avatarState];
    }
  }, [actions, avatarState]);

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload(MODEL_PATH);
