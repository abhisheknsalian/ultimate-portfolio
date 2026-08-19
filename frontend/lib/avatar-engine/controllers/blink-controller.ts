import { hasMorphTargets } from "../capabilities";
import type {
  AvatarBlackboard,
  AvatarController,
  AvatarPose,
} from "../types";

const REQUIRED_MORPH_TARGETS = ["eyeBlinkLeft", "eyeBlinkRight"] as const;

/**
 * Registered and ticked every frame like any other controller, but
 * self-disables when the loaded rig doesn't expose the morph targets
 * it needs - which is the case for the current abhishek.glb (no morph
 * targets at all, per the earlier rig audit). Nothing in the engine
 * core special-cases this; the capability check is the only thing
 * that runs, and it runs for real every tick.
 */
export class BlinkController implements AvatarController {
  readonly id = "blink";

  tick(blackboard: AvatarBlackboard): Partial<AvatarPose> {
    const supported = hasMorphTargets(
      blackboard.capabilities,
      REQUIRED_MORPH_TARGETS
    );

    if (!supported) {
      return {};
    }

    // Unreachable until the model is re-exported with eyeBlinkLeft/
    // eyeBlinkRight morph targets - scheduling and blink-weight output
    // land here once a supporting rig exists.
    return {};
  }
}
