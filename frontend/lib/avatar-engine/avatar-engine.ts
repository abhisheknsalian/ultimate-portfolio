import { AvatarState } from "@/components/home/hero/avatar/avatar-state";

import { BreathingController } from "./controllers/breathing-controller";
import { PostureController } from "./controllers/posture-controller";
import type {
  AvatarBlackboard,
  AvatarController,
  AvatarPose,
} from "./types";

const DEFAULT_POSE: AvatarPose = {
  idleTimeScale: 1,
  breathingScale: 1,
};

/**
 * Framework-agnostic character controller: owns a blackboard of
 * discrete state, a registry of controllers, and resolves their
 * per-tick contributions into one AvatarPose. No React, no three.js
 * scene-graph access - the React binding layer (use-avatar-engine.ts)
 * is responsible for applying the resolved pose to the loaded model.
 */
export class AvatarEngine {
  private blackboard: AvatarBlackboard = {
    posture: AvatarState.IDLE,
  };

  private controllers: AvatarController[] = [
    new PostureController(),
    new BreathingController(),
  ];

  setPosture(state: AvatarState): void {
    this.blackboard.posture = state;
  }

  tick(deltaTime: number): AvatarPose {
    let pose: AvatarPose = { ...DEFAULT_POSE };

    for (const controller of this.controllers) {
      pose = {
        ...pose,
        ...controller.tick(this.blackboard, deltaTime),
      };
    }

    return pose;
  }
}

export function createAvatarEngine(): AvatarEngine {
  return new AvatarEngine();
}
