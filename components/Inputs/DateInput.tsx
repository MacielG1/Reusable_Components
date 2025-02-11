"use client";

import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";
import { useState } from "react";

export type DateInputProps = {
  className?: string;
  onChange?: (value: string) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange">;

export default function DateInput({ className, onChange, ...props }: DateInputProps) {
  const [value, setValue] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(newValue);
  }

  return (
    <div className="relative w-full max-w-[300px]">
      <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
      <input
        type="date"
        value={value}
        onChange={handleChange}
        className={cn(
          "w-full rounded-md border py-2 pl-10 pr-3",
          "bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100",
          "border-gray-300 dark:border-gray-600",
          "focus:border-sky-500 focus:outline-hidden focus:ring-1 focus:ring-sky-500",
          "dark:focus:border-sky-400 dark:focus:ring-sky-400",
          className,
        )}
        {...props}
      />
    </div>
  );
}
