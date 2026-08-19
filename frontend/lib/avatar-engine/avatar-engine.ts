import { AvatarState } from "@/components/home/hero/avatar/avatar-state";

import type { RigCapabilities } from "./capabilities";
import { BlinkController } from "./controllers/blink-controller";
import { BreathingController } from "./controllers/breathing-controller";
import { GestureController } from "./controllers/gesture-controller";
import { PostureController } from "./controllers/posture-controller";
import type {
  AvatarBlackboard,
  AvatarController,
  AvatarPose,
} from "./types";

const DEFAULT_POSE: AvatarPose = {
  idleTimeScale: 1,
  breathingScale: 1,
  gestureRotationZ: 0,
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
    activeGesture: null,
    capabilities: null,
  };

  private controllers: AvatarController[] = [
    new PostureController(),
    new BreathingController(),
    new GestureController(),
    new BlinkController(),
  ];

  setPosture(state: AvatarState): void {
    this.blackboard.posture = state;
  }

  playGesture(name: string): void {
    this.blackboard.activeGesture = { name, elapsed: 0 };
  }

  setCapabilities(capabilities: RigCapabilities): void {
    this.blackboard.capabilities = capabilities;
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
