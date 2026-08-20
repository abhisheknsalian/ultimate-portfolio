"use client";

import MarkdownRenderer from "./markdown-renderer";

interface MessageContentProps {
  content: string;
}

export default function MessageContent({
  content,
}: MessageContentProps) {
  return <MarkdownRenderer content={content} />;
}