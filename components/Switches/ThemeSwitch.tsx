"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Moon, Sun } from "lucide-react";

type ThemeSwitchProps = {
  className?: string;
  theme: "light" | "dark";
  useColors?: boolean;
  onThemeChange?: (theme: "light" | "dark") => void;
};

export default function ThemeSwitch({ className, theme = "light", useColors = false, onThemeChange }: ThemeSwitchProps) {
  const [isDark, setIsDark] = useState(theme === "dark");

  function handleClick() {
    const newState = !isDark;
    setIsDark(newState);
    onThemeChange?.(newState ? "dark" : "light");
  }

  return (
    <button
      className={cn(
        "relative h-8 w-16 cursor-pointer rounded-full bg-neutral-200 p-1 dark:bg-neutral-800",
        "focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-hidden",
        className,
      )}
      onClick={handleClick}
      aria-checked={isDark}
      role="switch"
    >
      <div
        className={cn(
          "absolute top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full",
          "bg-white shadow-md transition-transform duration-300 dark:bg-neutral-950",
          isDark ? "translate-x-8" : "translate-x-0",
        )}
      >
        {isDark ? (
          <Moon className={cn("h-3.5 w-3.5", useColors ? "text-blue-500" : "text-neutral-600 dark:text-neutral-200")} />
        ) : (
          <Sun className={cn("h-3.5 w-3.5", useColors ? "text-yellow-500" : "text-neutral-600 dark:text-neutral-200")} />
        )}
      </div>
    </button>
  );
}
