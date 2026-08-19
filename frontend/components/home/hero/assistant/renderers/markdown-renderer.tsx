"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({
  content,
}: MarkdownRendererProps) {
  return (
    <div className="prose prose-invert prose-sm max-w-none leading-7 prose-p:my-2 prose-p:first:mt-0 prose-p:last:mb-0 prose-headings:mt-4 prose-headings:mb-2 prose-ul:my-2 prose-ol:my-2 prose-li:my-0.5 prose-pre:my-3 prose-pre:rounded-xl prose-pre:text-[13px] prose-code:text-[13px] prose-code:before:content-none prose-code:after:content-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}