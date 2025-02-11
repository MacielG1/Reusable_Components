"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

type WaveSwitchProps = {
  className?: string;
  defaultChecked?: boolean;
};

export default function WaveSwitch({ className, defaultChecked = false }: WaveSwitchProps) {
  const [isChecked, setIsChecked] = useState(defaultChecked);
  return (
    <button
      className={cn(
        "h-9 w-16 cursor-pointer overflow-hidden rounded-full p-1 transition-colors duration-300",
        "focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-hidden",
        isChecked ? "bg-blue-500 dark:bg-blue-600" : "bg-neutral-200 dark:bg-neutral-800",
        className,
      )}
      onClick={() => setIsChecked(!isChecked)}
      aria-checked={isChecked}
      role="switch"
    >
      <div className={`h-full w-full rounded-full transition-transform duration-700 ease-in-out ${isChecked ? "translate-y-0" : "translate-y-full"}`}>
        <div className="h-full w-full rounded-full bg-white dark:bg-neutral-200" />
        <div className="absolute top-0 left-0 h-full w-full">
          <div className="animate-wave h-full w-full rounded-full bg-blue-300 dark:bg-blue-400" />
          <div className="animate-wave animation-delay-200 h-full w-full rounded-full bg-blue-400 dark:bg-blue-500" />
          <div className="animate-wave animation-delay-400 h-full w-full rounded-full bg-blue-500 dark:bg-blue-600" />
        </div>
      </div>
    </button>
  );
}
