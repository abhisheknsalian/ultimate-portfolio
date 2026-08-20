"use client";

import { dispatchAssistantAction } from "../controllers/action-dispatcher";
import { useAvatar } from "@/components/home/hero/avatar/use-avatar";
import { AvatarState } from "@/components/home/hero/avatar/avatar-state";

import type {
  AssistantAction,
} from "../types/assistant";

export class AssistantOrchestrator {
  static thinking() {
    useAvatar
      .getState()
      .setState(AvatarState.THINKING);
  }

  static speaking() {
    useAvatar
      .getState()
      .setState(AvatarState.SPEAKING);
  }

  static idle() {
    useAvatar
      .getState()
      .setState(AvatarState.IDLE);
  }

  static executeAction(
    action?: AssistantAction
  ) {
    if (!action) return;

    dispatchAssistantAction(action);
  }
}