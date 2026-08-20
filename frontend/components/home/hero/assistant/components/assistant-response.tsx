"use client";

import { useEffect, useRef } from "react";
import { Bot } from "lucide-react";

import ActionButton from "./action-button";
import MessageContent from "../renderers/message-content";
import { AssistantMessage } from "../types/assistant";

import { useLanguage } from "@/i18n";
import { useSpeech } from "@/components/home/hero/avatar/use-speech";

interface Props {
  message: AssistantMessage;
}

export default function AssistantResponse({
  message,
}: Props) {
  const { language } = useLanguage();
  const { speak } = useSpeech();

  const spokenRef = useRef(false);

  useEffect(() => {
    // Wait until the full streamed message exists
    if (!message.content) return;

    // The welcome greeting is never auto-spoken here - it only speaks
    // when the user explicitly toggles audio OFF -> ON (see AudioToggle).
    // Without this, a visitor who refreshes with audio already ON would
    // hear it replayed on every page load.
    if (message.isWelcome) return;

    // Prevent speaking the same message twice
    if (spokenRef.current) return;

    // Ignore very short streaming fragments
    if (message.content.length < 25) return;

    spokenRef.current = true;

    speak(message.content, language);
  }, [message.content, message.isWelcome, language, speak]);

  return (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-blue-600 text-white shadow-lg">
        <Bot size={18} />
      </div>

      <div className="max-w-[85%] rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-7 text-neutral-200 backdrop-blur-md">
        <MessageContent content={message.content} />

        {message.action && (
          <ActionButton action={message.action} />
        )}
      </div>
    </div>
  );
}