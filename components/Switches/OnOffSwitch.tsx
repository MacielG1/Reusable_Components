"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

type OnOffSwitchProps = {
  className?: string;
  defaultChecked?: boolean;
};

export default function OnOffSwitch({ className, defaultChecked = false }: OnOffSwitchProps) {
  const [isChecked, setIsChecked] = useState(defaultChecked);
  return (
    <button
      className={cn(
        "h-8 w-16 cursor-pointer rounded-full text-sm font-bold transition-all duration-300",
        "focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-hidden",
        isChecked
          ? "bg-blue-500 pr-8 pl-2 text-neutral-900 dark:bg-blue-600 dark:text-white"
          : "bg-neutral-200 pr-2 pl-8 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300",
        className,
      )}
      onClick={() => setIsChecked(!isChecked)}
      aria-checked={isChecked}
      role="switch"
    >
      {isChecked ? "ON" : "OFF"}
    </button>
  );
}
