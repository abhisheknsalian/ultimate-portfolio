"use client";

import { useAvatar } from "./use-avatar";
import { AvatarState } from "./avatar-state";

/**
 * Single seam between the assistant's Zustand-driven AvatarState and
 * the 3D avatar layer (avatar-canvas.tsx / avatar-model.tsx). Nothing
 * else under the 3D layer should import use-avatar.ts directly - this
 * is the file a future engine's command API plugs into.
 */
export function useAvatarBridge(): AvatarState {
  return useAvatar((store) => store.state);
}
