"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

export type TextInputProps = {
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function TextInput({ className, ...props }: TextInputProps) {
  const [text, setText] = useState("");
  return (
    <input
      id="text-input"
      type="text"
      placeholder="Type something..."
      value={text}
      onChange={(e) => setText(e.target.value)}
      className={cn(
        "mt-1 block w-full max-w-[300px] rounded-md border border-gray-300 bg-white px-3 py-2 placeholder-gray-400 shadow-xs focus:border-sky-500 focus:outline-hidden focus:ring-1 focus:ring-sky-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500 dark:focus:border-sky-400 dark:focus:ring-sky-400",
        className,
      )}
      {...props}
    />
  );
}
