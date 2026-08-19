import { create } from "zustand";
import { AvatarState } from "./avatar-state";

interface AvatarStore {
  state: AvatarState;
  setState: (state: AvatarState) => void;
}

export const useAvatar = create<AvatarStore>((set) => ({
  state: AvatarState.IDLE,
  setState: (state) => set({ state }),
}));