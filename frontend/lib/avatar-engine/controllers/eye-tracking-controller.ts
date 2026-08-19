import type {
  AvatarBlackboard,
  AvatarController,
  AvatarPose,
} from "../types";

const MAX_YAW_RADIANS = (18 * Math.PI) / 180;
const MAX_PITCH_RADIANS = (10 * Math.PI) / 180;

/**
 * Converts the normalized pointer position (fed in every frame from
 * R3F's own pointer tracking - see use-avatar-engine.ts) into a small,
 * clamped head rotation. The rig has a real "Head" bone, so unlike
 * BlinkController this has a genuine input and a genuine target on the
 * current asset - no capability gate needed.
 */
export class EyeTrackingController implements AvatarController {
  readonly id = "eye-tracking";

  tick(blackboard: AvatarBlackboard): Partial<AvatarPose> {
    const { x, y } = blackboard.gazeTarget;

    return {
      headYaw: -x * MAX_YAW_RADIANS,
      headPitch: y * MAX_PITCH_RADIANS,
    };
  }
}
