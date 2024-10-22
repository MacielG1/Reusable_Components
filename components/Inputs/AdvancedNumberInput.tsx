"use client";

import { useState, useRef, useEffect } from "react";
import { MinusIcon, PlusIcon } from "lucide-react";

export type AdvancedNumberInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function AdvancedNumberInput({ ...props }: AdvancedNumberInputProps) {
  const [number, setNumber] = useState(0);
  const decrementInterval = useRef<NodeJS.Timeout | null>(null);
  const incrementInterval = useRef<NodeJS.Timeout | null>(null);

  const MIN_VALUE = 0;
  const MAX_VALUE = 100;

  function startDecrementing() {
    decrementInterval.current = setInterval(() => {
      setNumber((prev) => Math.max(MIN_VALUE, prev - 1));
    }, 100);
  }

  const startIncrementing = () => {
    incrementInterval.current = setInterval(() => {
      setNumber((prev) => Math.min(MAX_VALUE, prev + 1));
    }, 100);
  };

  function stopDecrementing() {
    if (decrementInterval.current) {
      clearInterval(decrementInterval.current);
    }
  }

  function stopIncrementing() {
    if (incrementInterval.current) {
      clearInterval(incrementInterval.current);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowUp") {
      setNumber((prev) => Math.min(MAX_VALUE, prev + 1));
    } else if (e.key === "ArrowDown") {
      setNumber((prev) => Math.max(MIN_VALUE, prev - 1));
    }
  }

  useEffect(() => {
    return () => {
      if (decrementInterval.current) clearInterval(decrementInterval.current);
      if (incrementInterval.current) clearInterval(incrementInterval.current);
    };
  }, []);

  return (
    <div className="space-y-2">
      <div className="mt-1 flex items-stretch">
        <button
          type="button"
          onMouseDown={startDecrementing}
          onMouseUp={stopDecrementing}
          onMouseLeave={stopDecrementing}
          className="flex items-center justify-center rounded-l-md border border-gray-300 bg-gray-50 px-3 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
          aria-label="Decrement"
        >
          <MinusIcon className="h-4 w-4" />
        </button>
        <input
          id="number-input"
          type="number"
          value={number}
          onChange={(e) => setNumber(Math.min(MAX_VALUE, Math.max(MIN_VALUE, parseInt(e.target.value) || 0)))}
          onKeyDown={handleKeyDown}
          className="block w-20 border-y border-gray-300 bg-white px-3 py-2 text-center text-sm placeholder-gray-400 shadow-sm [-moz-appearance:_textfield] focus:outline-none focus:ring-2 focus:ring-sky-500 [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
          aria-valuemin={MIN_VALUE}
          aria-valuemax={MAX_VALUE}
          aria-valuenow={number}
          {...props}
        />
        <button
          type="button"
          onMouseDown={startIncrementing}
          onMouseUp={stopIncrementing}
          onMouseLeave={stopIncrementing}
          className="flex items-center justify-center rounded-r-md border border-gray-300 bg-gray-50 px-3 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
          aria-label="Increment"
        >
          <PlusIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
