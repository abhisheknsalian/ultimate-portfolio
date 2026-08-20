"use client";

import { AssistantMessage } from "../types/assistant";

interface Props {
  message: AssistantMessage;
}

export default function AssistantUser({ message }: Props) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[80%] rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-3 text-sm text-white shadow-lg">
        {message.content}
      </div>
    </div>
  );
}