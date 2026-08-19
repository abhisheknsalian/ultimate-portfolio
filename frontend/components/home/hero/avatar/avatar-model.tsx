"use client";

import { useEffect, useMemo, useRef } from "react";
import type { Group } from "three";
import { useGLTF, useAnimations } from "@react-three/drei";

import { useAvatarEngine } from "./use-avatar-engine";

const MODEL_PATH = "/avatar/models/abhishek.glb";
const IDLE_CLIP = "IdleV4.2(maya_head)";
const HEAD_BONE = "Head";

export default function AvatarModel() {
  const group = useRef<Group>(null);
  const { scene, animations } = useGLTF(MODEL_PATH);
  const { actions } = useAnimations(animations, group);

  // Three.js's own name-based lookup - no custom traversal needed.
  const head = useMemo(
    () => scene.getObjectByName(HEAD_BONE),
    [scene]
  );

  useEffect(() => {
    const idle = actions[IDLE_CLIP];

    idle?.reset().fadeIn(0.4).play();

    return () => {
      idle?.fadeOut(0.2);
    };
  }, [actions]);

  useAvatarEngine(scene, (pose) => {
    const idle = actions[IDLE_CLIP];

    if (idle) {
      idle.timeScale = pose.idleTimeScale;
    }

    group.current?.scale.set(1, pose.breathingScale, 1);

    if (group.current) {
      group.current.rotation.z = pose.gestureRotationZ;
    }

    if (head) {
      // Additive, not absolute: useAnimations' own useFrame (registered
      // above, so it runs first each frame) already drives this bone's
      // rotation from the idle clip. Overwriting it here would silently
      // cancel that baked head motion instead of layering on top of it.
      head.rotation.y += pose.headYaw;
      head.rotation.x += pose.headPitch;
    }
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload(MODEL_PATH);
