"use client";

import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

import { createAvatarEngine } from "@/lib/avatar-engine";
import type { AvatarEngine, AvatarPose } from "@/lib/avatar-engine";

import { useAvatarBridge } from "./use-avatar-bridge";

/**
 * Owns one AvatarEngine instance for the mounted model, forwards the
 * bridged AvatarState into it as a command, ticks it every frame, and
 * hands the resolved pose to the caller to apply to the scene.
 */
export function useAvatarEngine(
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

  useFrame((_, deltaTime) => {
    const pose = engineRef.current?.tick(deltaTime);

    if (pose) {
      onPose(pose);
    }
  });
}
