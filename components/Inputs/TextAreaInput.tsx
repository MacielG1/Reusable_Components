"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

export type TextAreaInputProps = {
  className?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function TextAreaInput({ className, ...props }: TextAreaInputProps) {
  const [text, setText] = useState("");

  return (
    <textarea
      id="textarea-input"
      placeholder="Text area..."
      value={text}
      onChange={(e) => setText(e.target.value)}
      rows={3}
      className={cn(
        "mt-1 block w-full max-w-[300px] rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-xs focus:border-sky-500 focus:outline-hidden focus:ring-1 focus:ring-sky-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500 dark:focus:border-sky-400 dark:focus:ring-sky-400",
        className,
      )}
      {...props}
    />
  );
}
