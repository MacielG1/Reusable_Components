"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

type TextSwitchProps = {
  className?: string;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
};

export default function TextSwitch({ className, defaultChecked = false, onChange }: TextSwitchProps) {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleToggle = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    onChange?.(newState);
  };

  return (
    <button
      role="switch"
      aria-checked={isChecked}
      onClick={handleToggle}
      className={cn(
        "relative h-8 w-16 cursor-pointer rounded-full border-2 transition-all duration-300",
        isChecked 
          ? "border-blue-500 dark:border-blue-600" 
          : "border-neutral-200 dark:border-neutral-700",
        "focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-hidden",
        className
      )}
    >
      {/* Toggle Button */}
      <div
        className={cn(
          "absolute transition-all duration-300",
          isChecked
            ? "left-0.5 right-0.5 top-0.5 bottom-0.5 rounded-full bg-blue-500 shadow-[0_0_8px] shadow-blue-500/50 dark:bg-blue-600"
            : "right-[34px] top-0.5 bottom-0.5 w-6 rounded-full bg-neutral-300 dark:bg-neutral-600"
        )}
      />

      {/* Glow Effect */}
      <div
        className={cn(
          "absolute inset-[6px] rounded-full bg-blue-400/10 shadow-[0_0_8px] shadow-blue-500/20 transition-opacity duration-700",
          isChecked ? "opacity-100" : "opacity-0 duration-[2000ms] delay-500"
        )}
      />

      {/* ON Text */}
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center text-sm font-medium transition-colors duration-200",
          isChecked ? "text-white delay-150" : "text-transparent"
        )}
      >
        ON
      </div>

      {/* OFF Text */}
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-end pr-2 text-xs font-medium transition-colors duration-200",
          isChecked ? "text-transparent" : "text-neutral-500 dark:text-neutral-400"
        )}
      >
        OFF
      </div>
    </button>
  );
} 