"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

export type SwitchToggleProps = {
  className?: string;
  defaultChecked?: boolean;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
};

export default function ToggleSwitch({ className, defaultChecked = false, size = "lg", disabled = false, onChange }: SwitchToggleProps) {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const sizes = {
    sm: { toggle: "w-11 h-6", circle: "size-5" },
    md: { toggle: "w-14 h-7", circle: "size-6" },
    lg: { toggle: "w-16 h-8", circle: "size-7" },
  };

  function handleClick() {
    if (!disabled) {
      setIsChecked(!isChecked);
      onChange?.(!isChecked);
    }
  }

  return (
    <button
      role="switch"
      aria-checked={isChecked}
      onClick={handleClick}
      className={cn(
        "relative h-7 w-14 cursor-pointer rounded-full transition-colors duration-200",
        "focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-hidden",
        isChecked ? "bg-blue-500 dark:bg-blue-600" : "bg-neutral-200 dark:bg-neutral-800",
        disabled && "cursor-not-allowed opacity-50",
        className,
      )}
      disabled={disabled}
    >
      <span
        className={cn(
          "absolute top-1/2 left-0.5 -translate-y-1/2 rounded-full bg-neutral-100 transition-transform duration-200 dark:bg-neutral-200",
          sizes[size].circle,
          isChecked && [size === "sm" && "translate-x-4", size === "md" && "translate-x-5", size === "lg" && "translate-x-7"],
        )}
      />
    </button>
  );
}
