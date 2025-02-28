"use client";

import { cn } from "@/lib/utils";

interface PulseLoaderProps {
  size?: "sm" | "md" | "lg";
  speed?: "slow" | "normal" | "fast";
  className?: string;
}

export default function PulseLoader({ 
  size = "md", 
  speed = "normal",
  className 
}: PulseLoaderProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const duration = {
    slow: "2s",
    normal: "1s",
    fast: "0.5s",
  };

  return (
    <>
      <style>{`
        .pulse-spinner-${speed} {
          --duration: ${duration[speed]};
          animation: pulse-spin var(--duration) linear infinite;
        }
        @keyframes pulse-spin {
          0% {
            transform: rotate(0deg) scale(1);
            opacity: 1;
          }
          50% {
            transform: rotate(180deg) scale(0.8);
            opacity: 0.5;
          }
          100% {
            transform: rotate(360deg) scale(1);
            opacity: 1;
          }
        }
      `}</style>
      <div
        className={cn(
          `pulse-spinner-${speed} rounded-full border-4 border-primary border-l-transparent border-r-transparent`,
          sizeClasses[size],
          className
        )}
      />
    </>
  );
} 