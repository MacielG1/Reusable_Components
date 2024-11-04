"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export type AutoGrowingTextareaProps = {
  className?: string;
  rows?: number;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function AutoGrowingTextarea({ className, rows = 1, ...props }: AutoGrowingTextareaProps) {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  }, [text]);

  return (
    <textarea
      id="auto-growing-textarea"
      ref={textareaRef}
      placeholder="Type and I'll grow..."
      value={text}
      onChange={(e) => setText(e.target.value)}
      rows={rows}
      className={cn(
        "mt-1 block min-h-[2.5rem] w-full max-w-[300px] overflow-hidden rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500 dark:focus:border-sky-400 dark:focus:ring-sky-400",
        className,
      )}
      {...props}
    />
  );
}
