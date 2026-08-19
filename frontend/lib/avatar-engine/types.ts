import type { AvatarState } from "@/components/home/hero/avatar/avatar-state";

import type { RigCapabilities } from "./capabilities";

/**
 * The resolved output the 3D avatar layer applies to the model each
 * tick. Grows one field at a time, only when a controller actually
 * produces that field.
 */
export interface AvatarPose {
  idleTimeScale: number;
  breathingScale: number;
  gestureRotationZ: number;
  headYaw: number;
  headPitch: number;
}

export interface ActiveGesture {
  name: string;
  elapsed: number;
}

export interface GazeTarget {
  x: number;
  y: number;
}

/**
 * Shared, mutable state controllers read from. Written to by engine
 * commands (called from the bridge), read by every controller's tick().
 * Controllers may also clear their own consumed one-shot fields here
 * (e.g. GestureController nulling activeGesture once it finishes).
 */
export interface AvatarBlackboard {
  posture: AvatarState;
  activeGesture: ActiveGesture | null;
  capabilities: RigCapabilities | null;
  gazeTarget: GazeTarget;
}

export interface AvatarController {
  readonly id: string;

  tick(
    blackboard: AvatarBlackboard,
    deltaTime: number
  ): Partial<AvatarPose>;
}
