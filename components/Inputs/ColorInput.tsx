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

  function handleColorChange(e: React.ChangeEvent<HTMLInputElement>) {
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
          onChange={handleColorChange}
          className={cn(
            "h-10 w-16 cursor-pointer appearance-none rounded border border-gray-300 bg-transparent p-0",
            "dark:border-gray-600",
            className,
          )}
          {...props}
        />
      </div>
    </div>
  );
}
