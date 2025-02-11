"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

type NeonSwitchProps = {
  className?: string;
  defaultChecked?: boolean;
};

export default function NeonSwitch({ className, defaultChecked = false }: NeonSwitchProps) {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  return (
    <button
      className={cn(
        "relative h-8 w-16 cursor-pointer rounded-full bg-neutral-200 p-1 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-hidden dark:bg-neutral-800",
        isChecked && "shadow-[0_0_15px_rgb(59,130,246)]",
        className,
      )}
      onClick={() => setIsChecked(!isChecked)}
      aria-checked={isChecked}
      role="switch"
    >
      <div
        className={cn(
          "absolute top-1/2 h-6 w-6 -translate-y-1/2 rounded-full transition-transform duration-300",
          isChecked ? "translate-x-8 bg-blue-500 shadow-[0_0_10px_rgb(59,130,246)]" : "translate-x-0 bg-neutral-400 dark:bg-neutral-600",
        )}
      >
        <div className={cn("absolute inset-1 rounded-full bg-white transition-opacity", isChecked ? "opacity-50" : "opacity-20")} />
      </div>
    </button>
  );
}
