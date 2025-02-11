"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

export type LimitedTextInputProps = { limit: number; className?: string } & React.InputHTMLAttributes<HTMLInputElement>;

export default function LimitedTextInput({ limit = 50, className, ...props }: LimitedTextInputProps) {
  const [text, setText] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value.length <= limit) {
      setText(e.target.value);
    }
  }

  return (
    <div className="space-y-2">
      <input
        id="limited-text-input"
        type="text"
        placeholder={`Type (max ${limit} characters)...`}
        value={text}
        onChange={handleChange}
        className={cn(
          "mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-xs focus:border-sky-500 focus:outline-hidden focus:ring-1 focus:ring-sky-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500 dark:focus:border-sky-400 dark:focus:ring-sky-400",
          className,
        )}
        {...props}
      />
      <div className="flex items-center justify-between">
        <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
          <div className="h-2.5 rounded-full bg-blue-600 dark:bg-blue-500" style={{ width: `${(text.length / limit) * 100}%` }}></div>
        </div>
        <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
          {text.length}/{limit}
        </span>
      </div>
    </div>
  );
}
