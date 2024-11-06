"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

export type ColorInputProps = {
  className?: string;
  defaultValue?: string;
  onChange?: (color: string) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange">;

export default function ColorInput({ className, defaultValue = "#000000", onChange, ...props }: ColorInputProps) {
  const [color, setColor] = useState(defaultValue);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newColor = e.target.value;
    setColor(newColor);
    onChange?.(newColor);
  }

  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <input
          type="color"
          value={color}
          onChange={handleChange}
          className={cn(
            "h-10 w-16 cursor-pointer appearance-none rounded border border-gray-300 bg-transparent p-0",
            "dark:border-gray-600",
            className,
          )}
          {...props}
        />
      </div>
      <input
        type="text"
        value={color}
        onChange={handleChange}
        className={cn(
          "w-28 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm",
          "focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500",
          "dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100",
        )}
        pattern="^#[0-9A-Fa-f]{6}$"
      />
    </div>
  );
}
