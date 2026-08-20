import {
  AssistantAction,
  AssistantMessage,
  ChatResponse,
} from "../types/assistant";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000";

export async function sendAssistantMessage(
  message: string,
  history: AssistantMessage[],
  language: "en" | "de"
): Promise<ChatResponse> {
  const response = await fetch(`${API_BASE_URL}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      language,
      history: history.map((chat) => ({
        role: chat.role,
        content: chat.content,
      })),
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to contact AI backend.");
  }

  return await response.json();
}

export async function streamAssistantMessage(
  message: string,
  history: AssistantMessage[],
  language: "en" | "de",
  onToken: (token: string) => void,
  onAction: (action: AssistantAction) => void
): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/api/chat/stream`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      language,
      history: history.map((chat) => ({
        role: chat.role,
        content: chat.content,
      })),
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to contact AI backend.");
  }

  if (!response.body) {
    throw new Error("Streaming is not supported.");
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  let buffer = "";

  while (true) {
    const { value, done } = await reader.read();

    if (done) break;

    buffer += decoder.decode(value, {
      stream: true,
    });

    const events = buffer.split("\n\n");
    buffer = events.pop() ?? "";

    for (const event of events) {
      const lines = event.split("\n");

      let eventType = "";
      let data = "";

      for (const line of lines) {
        if (line.startsWith("event: ")) {
          eventType = line.replace("event: ", "");
        }

        if (line.startsWith("data: ")) {
          data = line.replace("data: ", "");
        }
      }

      switch (eventType) {
        case "token":
          onToken(data);
          break;

        case "action":
          onAction(JSON.parse(data));
          break;

        case "done":
          return;
      }
    }
  }
}