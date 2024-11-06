"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

export type RangeInputProps = {
  className?: string;
  showValue?: boolean;
  onChange?: (value: number) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function RangeInput({ className, showValue = true, min = 0, max = 100, defaultValue = 50, onChange, ...props }: RangeInputProps) {
  const [value, setValue] = useState(defaultValue);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = Number(e.target.value);
    setValue(newValue);
    onChange?.(newValue);
  }

  const percentage = ((Number(value) - Number(min)) / (Number(max) - Number(min))) * 100;

  return (
    <div className="space-y-2">
      <input
        type="range"
        value={value}
        onChange={handleChange}
        className={cn(
          "h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200",
          "dark:bg-gray-700",
          "[&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4",
          "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full",
          "[&::-webkit-slider-thumb]:bg-sky-500 [&::-webkit-slider-thumb]:dark:bg-sky-400",
          className,
        )}
        style={{
          background: `linear-gradient(to right, #0ea5e9 ${percentage}%, #e5e7eb ${percentage}%)`,
        }}
        min={min}
        max={max}
        {...props}
      />
      {showValue && <div className="text-sm text-gray-500 dark:text-gray-400">Value: {value}</div>}
    </div>
  );
}
