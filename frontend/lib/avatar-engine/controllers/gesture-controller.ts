import type {
  AvatarBlackboard,
  AvatarController,
  AvatarPose,
} from "../types";

const WAVE_DURATION_SECONDS = 0.9;
const WAVE_AMPLITUDE_RADIANS = (6 * Math.PI) / 180;
const WAVE_CYCLES = 2.5;

function waveRotation(elapsed: number): number {
  const t = elapsed / WAVE_DURATION_SECONDS;
  const decay = 1 - t;

  return (
    WAVE_AMPLITUDE_RADIANS *
    Math.sin(t * WAVE_CYCLES * Math.PI * 2) *
    decay
  );
}

/**
 * Discrete, one-shot events (as opposed to PostureController's
 * continuous, level-based state). Reads/consumes blackboard.activeGesture,
 * clearing it once the gesture's duration elapses.
 */
export class GestureController implements AvatarController {
  readonly id = "gesture";

  tick(
    blackboard: AvatarBlackboard,
    deltaTime: number
  ): Partial<AvatarPose> {
    const gesture = blackboard.activeGesture;

    if (!gesture || gesture.name !== "wave") {
      return { gestureRotationZ: 0 };
    }

    gesture.elapsed += deltaTime;

    if (gesture.elapsed >= WAVE_DURATION_SECONDS) {
      blackboard.activeGesture = null;

      return { gestureRotationZ: 0 };
    }

    return { gestureRotationZ: waveRotation(gesture.elapsed) };
  }
}
