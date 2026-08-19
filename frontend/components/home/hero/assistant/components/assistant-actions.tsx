"use client";

import { getQuickActions } from "../constants/quick-actions";
import { useAssistantStore } from "../store/assistant-store";
import { useLanguage } from "@/i18n";

export default function AssistantActions() {
  const { language } = useLanguage();

  const loading = useAssistantStore(
    (state) => state.loading
  );

  const sendMessage = useAssistantStore(
    (state) => state.sendMessage
  );

  const actions = getQuickActions(language);

  return (
    <div className="mt-5 grid grid-cols-2 gap-3">
      {actions.map((action, index) => (
        <button
          key={action.id}
          type="button"
          disabled={loading}
          onClick={() =>
            sendMessage(action.prompt, language)
          }
          className={`group rounded-2xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50 ${
            index === actions.length - 1 && actions.length % 2 === 1
              ? "col-span-2"
              : ""
          }`}
        >
          <div className="mb-2 text-xl">
            {action.icon}
          </div>

          <h4 className="text-sm font-semibold text-white transition-colors group-hover:text-violet-300">
            {action.title}
          </h4>
        </button>
      ))}
    </div>
  );
}