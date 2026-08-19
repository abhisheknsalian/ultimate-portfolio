"use client";

import { useEffect, useRef } from "react";
import type { Object3D } from "three";
import { useFrame } from "@react-three/fiber";

import { createAvatarEngine, detectRigCapabilities } from "@/lib/avatar-engine";
import type { AvatarEngine, AvatarPose } from "@/lib/avatar-engine";

import { useAvatarBridge } from "./use-avatar-bridge";

/**
 * Owns one AvatarEngine instance for the mounted model, forwards the
 * bridged AvatarState into it as a command, feeds it the loaded rig's
 * real capabilities, ticks it every frame, and hands the resolved
 * pose to the caller to apply to the scene.
 */
export function useAvatarEngine(
  root: Object3D,
  onPose: (pose: AvatarPose) => void
): void {
  const engineRef = useRef<AvatarEngine | null>(null);

  if (engineRef.current === null) {
    engineRef.current = createAvatarEngine();
  }

  const avatarState = useAvatarBridge();

  useEffect(() => {
    engineRef.current?.setPosture(avatarState);
  }, [avatarState]);

  // Greeting wave, fired once when the avatar first mounts.
  useEffect(() => {
    engineRef.current?.playGesture("wave");
  }, []);

  useEffect(() => {
    engineRef.current?.setCapabilities(detectRigCapabilities(root));
  }, [root]);

  useFrame((_, deltaTime) => {
    const pose = engineRef.current?.tick(deltaTime);

    if (pose) {
      onPose(pose);
    }
  });
}
