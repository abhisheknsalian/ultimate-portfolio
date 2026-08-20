"use client";

import { useEffect, useRef } from "react";

import AssistantActions from "./assistant-actions";
import AssistantChat from "./assistant-chat";
import AssistantHeader from "./assistant-header";
import AssistantInput from "./assistant-input";

import { useAssistantStore } from "../store/assistant-store";
import { useLanguage } from "@/i18n";

export default function AssistantCard() {
  const { language } = useLanguage();

  const expanded = useAssistantStore(
    (state) => state.expanded
  );

  const setWelcomeLanguage = useAssistantStore(
    (state) => state.setWelcomeLanguage
  );

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!expanded) return;

    cardRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [expanded]);

  // Update welcome message whenever the language changes,
  // but only if the conversation hasn't started yet.
  useEffect(() => {
    setWelcomeLanguage(language);
  }, [language, setWelcomeLanguage]);

  return (
    <div
      ref={cardRef}
      className={`
        w-full overflow-hidden rounded-3xl border border-white/10
        bg-neutral-900/70 backdrop-blur-xl
        shadow-2xl shadow-black/30
        transition-all duration-500 ease-in-out
        ${expanded ? "min-h-[560px]" : "min-h-[260px]"}
      `}
    >
      <div className="p-5">
        <AssistantHeader />

        <div
          className={`
            grid transition-all duration-500 ease-in-out
            ${
              expanded
                ? "grid-rows-[1fr] opacity-100 mt-5"
                : "grid-rows-[0fr] opacity-0 mt-0"
            }
          `}
        >
          <div className="overflow-hidden">
            <AssistantChat />
          </div>
        </div>

        <AssistantInput />

        <AssistantActions />
      </div>
    </div>
  );
}