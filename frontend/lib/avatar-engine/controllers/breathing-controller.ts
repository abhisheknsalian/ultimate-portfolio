import type {
  AvatarBlackboard,
  AvatarController,
  AvatarPose,
} from "../types";

const FREQUENCY_HZ = 0.25; // ~1 breath cycle every 4s
const AMPLITUDE = 0.008; // +/-0.8% scale

/**
 * Continuous, always-on, additive: independent of posture/AvatarState.
 * Owns its own phase accumulator rather than the shared blackboard,
 * since nothing else needs breathing phase.
 */
export class BreathingController implements AvatarController {
  readonly id = "breathing";

  private elapsed = 0;

  tick(
    _blackboard: AvatarBlackboard,
    deltaTime: number
  ): Partial<AvatarPose> {
    this.elapsed += deltaTime;

    const phase = this.elapsed * FREQUENCY_HZ * Math.PI * 2;

    return {
      breathingScale: 1 + Math.sin(phase) * AMPLITUDE,
    };
  }
}
