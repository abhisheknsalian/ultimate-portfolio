"use client";

import {
  useEffect,
  useRef,
  useState,
  KeyboardEvent,
} from "react";
import { SendHorizonal } from "lucide-react";

import { getInputPlaceholder } from "../constants/prompts";
import { useAssistantStore } from "../store/assistant-store";
import { useLanguage } from "@/i18n";

export default function AssistantInput() {
  const [message, setMessage] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const { language } = useLanguage();

  const loading = useAssistantStore(
    (state) => state.loading
  );

  const expanded = useAssistantStore(
    (state) => state.expanded
  );

  const sendMessage = useAssistantStore(
    (state) => state.sendMessage
  );

  useEffect(() => {
    if (expanded) {
      inputRef.current?.focus();
    }
  }, [expanded]);

  const handleSend = async () => {
    const text = message.trim();

    if (!text || loading) return;

    setMessage("");

    await sendMessage(text, language);

    inputRef.current?.focus();
  };

  const handleKeyDown = async (
    event: KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key !== "Enter") return;

    event.preventDefault();

    await handleSend();
  };

  return (
    <div className="mt-5 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-md transition-all duration-300 focus-within:border-violet-500/60 focus-within:ring-2 focus-within:ring-violet-500/20">
      <input
        ref={inputRef}
        type="text"
        value={message}
        placeholder={getInputPlaceholder(language)}
        disabled={loading}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        className="h-11 flex-1 bg-transparent px-3 text-sm text-white placeholder:text-neutral-500 outline-none"
      />

      <button
        type="button"
        onClick={handleSend}
        disabled={loading || !message.trim()}
        aria-label="Send message"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <SendHorizonal size={18} />
      </button>
    </div>
  );
}