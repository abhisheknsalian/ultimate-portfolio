"use client";

import { AssistantMessage as Message } from "../types/assistant";

import AssistantUser from "./assistant-user";
import AssistantResponse from "./assistant-response";

interface Props {
  message: Message;
}

export default function AssistantMessage({ message }: Props) {
  if (message.role === "user") {
    return <AssistantUser message={message} />;
  }

  return <AssistantResponse message={message} />;
}