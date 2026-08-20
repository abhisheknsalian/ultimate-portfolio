/**
 * AI Portfolio Assistant Types
 * -------------------------------------
 * Shared types used across the assistant.
 */

export type MessageRole =
  | "user"
  | "assistant"
  | "system";

export type AssistantActionType =
  | "OPEN_GITHUB"
  | "OPEN_LINKEDIN"
  | "OPEN_EMAIL"
  | "OPEN_PROJECTS"
  | "OPEN_FEATURED_PROJECT"
  | "OPEN_PROJECT"
  | "OPEN_EXPERIENCE"
  | "OPEN_EDUCATION"
  | "OPEN_CERTIFICATIONS"
  | "OPEN_CONTACT"
  | "HIGHLIGHT_PROJECT"
  | "NONE";

export interface AssistantAction {
  type: AssistantActionType;

  label: string;

  target?: string;

  url?: string;

  // Backend-supplied destination for OPEN_PROJECT (e.g. the project's
  // GitHub repository URL).
  payload?: string;
}

export interface AssistantMessage {
  id: string;

  role: MessageRole;

  content: string;

  createdAt: Date;

  action?: AssistantAction;

  // Marks the synthetic greeting inserted on mount/language-change - it is
  // never spoken automatically (only an explicit OFF -> ON audio toggle
  // speaks it), unlike real assistant responses.
  isWelcome?: boolean;
}

export interface AssistantState {
  expanded: boolean;

  loading: boolean;

  messages: AssistantMessage[];
}

export interface SendMessagePayload {
  message: string;
}

export interface ChatResponse {
  response: string;

  action?: AssistantAction | null;
}