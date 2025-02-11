"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

type FlipSwitchProps = {
  className?: string;
  defaultChecked?: boolean;
};

export default function FlipSwitch({ className, defaultChecked = false }: FlipSwitchProps) {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  return (
    <button
      className={cn(
        "group relative h-8 w-16 cursor-pointer rounded-full bg-neutral-200 p-1 transition-colors duration-300 perspective-[1000px] focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-hidden dark:bg-neutral-800",
        isChecked && "bg-blue-500",
        className,
      )}
      onClick={() => setIsChecked(!isChecked)}
      aria-checked={isChecked}
      role="switch"
    >
      <div className="preserve-3d relative h-full w-full">
        <div
          className={cn(
            "absolute h-6 w-6 rounded-full bg-white shadow-md transition-all duration-500",
            isChecked ? "left-[calc(100%-24px)] rotate-y-180" : "left-0 rotate-y-0",
          )}
        >
          <div className="absolute inset-0 rounded-full bg-white backface-hidden" />
          <div className="absolute inset-0 rotate-y-180 rounded-full bg-blue-100 backface-hidden" />
        </div>
      </div>
      <style jsx global>{`
        .perspective-[1000px] {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .rotate-y-0 {
          transform: rotateY(0deg);
        }
      `}</style>
    </button>
  );
}
