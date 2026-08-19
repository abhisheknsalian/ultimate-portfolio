import { AvatarState } from "@/components/home/hero/avatar/avatar-state";

import type {
  AvatarBlackboard,
  AvatarController,
  AvatarPose,
} from "../types";

const IDLE_TIME_SCALE: Record<AvatarState, number> = {
  [AvatarState.IDLE]: 1,
  [AvatarState.WAVE]: 1,
  [AvatarState.TYPING]: 1,
  [AvatarState.THINKING]: 1.15,
  [AvatarState.SPEAKING]: 1.3,
};

/**
 * Maps the assistant's discrete AvatarState onto the idle clip's
 * playback speed. Ported directly from milestone 3's provisional
 * mapping in avatar-model.tsx.
 */
export class PostureController implements AvatarController {
  readonly id = "posture";

  tick(blackboard: AvatarBlackboard): Partial<AvatarPose> {
    return {
      idleTimeScale: IDLE_TIME_SCALE[blackboard.posture],
    };
  }
}
