"use client";

import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export type NumberInputProps = {
  className?: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "type" | "value" | "defaultValue">;

export default function NumberInput({ className, min = 0, max = 100, step = 1, defaultValue = 0, onChange, ...props }: NumberInputProps) {
  const [value, setValue] = useState(defaultValue);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  function handleChange(newValue: number) {
    if (newValue >= min && newValue <= max) {
      setValue(newValue);
      if (onChange) onChange(newValue);
    }
  }

  function startTimer(increment: boolean) {
    let intervalTime = 100; // Initial delay before speeding up

    setValue((prevValue) => {
      const newValue = prevValue + (increment ? step : -step);
      if (newValue >= min && newValue <= max) {
        if (onChange) onChange(newValue);
        return newValue;
      }
      return prevValue;
    });

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      timerRef.current = setInterval(() => {
        setValue((prevValue) => {
          const newValue = prevValue + (increment ? step : -step);
          if (newValue >= min && newValue <= max) {
            if (onChange) onChange(newValue);
            return newValue;
          }
          return prevValue;
        });
      }, intervalTime);

      // Speed up the interval after a certain time
      setTimeout(() => {
        if (timerRef.current) {
          clearInterval(timerRef.current);
          intervalTime = 75;
          timerRef.current = setInterval(() => {
            setValue((prevValue) => {
              const newValue = prevValue + (increment ? step : -step);
              if (newValue >= min && newValue <= max) {
                if (onChange) onChange(newValue);
                return newValue;
              }
              return prevValue;
            });
          }, intervalTime);
        }
      }, 750);
    }, 150);
  }

  function stopTimer() {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      clearInterval(timerRef.current);
    }
  }

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="inline-flex h-10 items-center rounded-md border border-gray-300 dark:border-gray-600">
      <button
        type="button"
        onMouseDown={() => startTimer(false)}
        onMouseUp={stopTimer}
        onMouseLeave={stopTimer}
        onTouchStart={() => startTimer(false)}
        onTouchEnd={stopTimer}
        className="flex h-full w-10 cursor-pointer items-center justify-center border-r border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
      >
        <Minus className="h-3 w-3 text-gray-500 dark:text-gray-400" />
      </button>
      <input
        type="number"
        value={value}
        onChange={(e) => handleChange(Number(e.target.value))}
        className={cn(
          "h-full w-14 [appearance:textfield] border-none bg-transparent px-2 text-center text-sm",
          "[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
          "focus:ring-0 focus:outline-hidden",
          "dark:text-gray-100",
          className,
        )}
        min={min}
        max={max}
        step={step}
        {...props}
      />
      <button
        type="button"
        onMouseDown={() => startTimer(true)}
        onMouseUp={stopTimer}
        onMouseLeave={stopTimer}
        onTouchStart={() => startTimer(true)}
        onTouchEnd={stopTimer}
        className="flex h-full w-10 cursor-pointer items-center justify-center border-l border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
      >
        <Plus className="h-3 w-3 text-gray-500 dark:text-gray-400" />
      </button>
    </div>
  );
}
