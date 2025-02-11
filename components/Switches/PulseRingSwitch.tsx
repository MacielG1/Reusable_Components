"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

type PulseRingSwitchProps = {
  className?: string;
  defaultChecked?: boolean;
};

export default function PulseRingSwitch({ className, defaultChecked = false }: PulseRingSwitchProps) {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  return (
    <button
      className={cn(
        "group relative h-8 w-16 cursor-pointer rounded-full bg-neutral-200 p-1 transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-hidden",
        isChecked && "bg-blue-500",
        className,
      )}
      onClick={() => setIsChecked(!isChecked)}
      aria-checked={isChecked}
      role="switch"
    >
      <div
        className={cn(
          "absolute top-1/2 left-1 h-6 w-6 -translate-y-1/2 rounded-full bg-white transition-all duration-300",
          isChecked && "left-[calc(100%-28px)]",
          "before:absolute before:-inset-1 before:rounded-full before:transition-transform before:duration-300",
          "before:border-2 before:border-white/0",
          isChecked && ["before:animate-ping-once", "before:border-blue-500/30"],
          "after:absolute after:-inset-2 after:rounded-full after:transition-transform after:duration-300",
          "after:border-2 after:border-white/0",
          isChecked && ["after:animate-ping-once-delayed", "after:border-blue-500/20"],
        )}
      />
    </button>
  );
}
