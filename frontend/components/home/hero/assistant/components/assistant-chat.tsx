"use client";

import AssistantMessage from "./assistant-message";
import { useAssistantStore } from "../store/assistant-store";

export default function AssistantChat() {
  const messages = useAssistantStore((state) => state.messages);
  const loading = useAssistantStore((state) => state.loading);

  return (
    <div className="chat-scroll mt-6 flex max-h-[340px] min-h-[220px] flex-col gap-4 overflow-y-auto pr-2">
      {messages.map((message) => (
        <AssistantMessage
          key={message.id}
          message={message}
        />
      ))}

      {loading && (
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-blue-500 text-white">
            ✨
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <div className="flex gap-1">
              <span className="h-2 w-2 animate-bounce rounded-full bg-violet-400" />
              <span
                className="h-2 w-2 animate-bounce rounded-full bg-violet-400"
                style={{ animationDelay: "150ms" }}
              />
              <span
                className="h-2 w-2 animate-bounce rounded-full bg-violet-400"
                style={{ animationDelay: "300ms" }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}