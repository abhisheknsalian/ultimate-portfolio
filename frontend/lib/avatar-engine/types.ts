import type { AvatarState } from "@/components/home/hero/avatar/avatar-state";

/**
 * The resolved output the 3D avatar layer applies to the model each
 * tick. Grows one field at a time, only when a controller actually
 * produces that field.
 */
export interface AvatarPose {
  idleTimeScale: number;
}

/**
 * Shared, mutable state controllers read from. Written to by engine
 * commands (called from the bridge), read by every controller's tick().
 */
export interface AvatarBlackboard {
  posture: AvatarState;
}

export interface AvatarController {
  readonly id: string;

  tick(
    blackboard: AvatarBlackboard,
    deltaTime: number
  ): Partial<AvatarPose>;
}
