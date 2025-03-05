"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

type LiquidSwitchProps = {
  className?: string;
  defaultChecked?: boolean;
};

export default function LiquidSwitch({ className, defaultChecked = false }: LiquidSwitchProps) {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  return (
    <button
      className={cn(
        "group relative h-8 w-16 cursor-pointer overflow-hidden rounded-full bg-neutral-200 p-1 transition-all duration-500",
        "focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-hidden dark:bg-neutral-800",
        className
      )}
      onClick={() => setIsChecked(!isChecked)}
      aria-checked={isChecked}
      role="switch"
    >
      {/* Background liquid effect */}
      <div
        className={cn(
          "absolute inset-0 transition-transform duration-500 ease-in-out",
          isChecked ? "translate-x-0" : "-translate-x-full",
          "bg-gradient-to-r from-blue-500 to-blue-600"
        )}
      >
        <div className="absolute inset-0 animate-liquid-wave opacity-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.3),transparent_60%)]" />
        </div>
      </div>

      {/* Thumb/handle */}
      <div
        className={cn(
          "relative h-6 w-6 rounded-full bg-white transition-all duration-500",
          "before:absolute before:inset-0 before:rounded-full before:transition-opacity before:duration-300",
          "before:bg-gradient-to-br before:from-transparent before:to-black/5",
          isChecked ? "translate-x-8" : "translate-x-0",
          "shadow-md"
        )}
      >
        {/* Liquid drops */}
        <div className={cn(
          "absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full",
          "transition-all duration-500",
          isChecked 
            ? "bg-white/30 animate-liquid-drop-right" 
            : "bg-blue-400/0"
        )} />
        <div className={cn(
          "absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full",
          "transition-all duration-500",
          !isChecked 
            ? "bg-blue-400/30 animate-liquid-drop-left" 
            : "bg-white/0"
        )} />
      </div>

      <style jsx global>{`
        @keyframes liquid-wave {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(5%) scale(1.02); }
        }
        .animate-liquid-wave {
          animation: liquid-wave 3s ease-in-out infinite;
        }
        @keyframes liquid-drop-right {
          0% { transform: translate(0, -50%) scale(1); opacity: 0.3; }
          50% { transform: translate(100%, -50%) scale(0.5); opacity: 0.1; }
          100% { transform: translate(200%, -50%) scale(0); opacity: 0; }
        }
        @keyframes liquid-drop-left {
          0% { transform: translate(0, -50%) scale(1); opacity: 0.3; }
          50% { transform: translate(-100%, -50%) scale(0.5); opacity: 0.1; }
          100% { transform: translate(-200%, -50%) scale(0); opacity: 0; }
        }
        .animate-liquid-drop-right {
          animation: liquid-drop-right 2s ease-out infinite;
        }
        .animate-liquid-drop-left {
          animation: liquid-drop-left 2s ease-out infinite;
        }
      `}</style>
    </button>
  );
} 