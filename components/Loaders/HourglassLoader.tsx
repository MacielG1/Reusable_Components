"use client";

import { cn } from "@/lib/utils";

interface HourglassLoaderProps {
  size?: "sm" | "md" | "lg";
  speed?: "slow" | "normal" | "fast";
  className?: string;
}

export default function HourglassLoader({
  size = "md",
  speed = "normal",
  className
}: HourglassLoaderProps) {
  const sizeClasses = {
    sm: "w-4 h-6",
    md: "w-6 h-8",
    lg: "w-8 h-12",
  };

  const duration = {
    slow: "3s",
    normal: "2s",
    fast: "1s",
  };

  return (
    <>
      <style>{`
        .hourglass-${speed} {
          --duration: ${duration[speed]};
          position: relative;
          animation: hourglass-rotate var(--duration) ease-in-out infinite;
        }
        .hourglass-${speed}::before,
        .hourglass-${speed}::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 2px solid;
          @apply border-primary;
        }
        .hourglass-${speed}::before {
          clip-path: polygon(0% 0%, 100% 0%, 50% 50%, 100% 100%, 0% 100%, 50% 50%);
          animation: hourglass-top var(--duration) linear infinite;
        }
        .hourglass-${speed}::after {
          clip-path: polygon(0% 0%, 100% 0%, 50% 50%, 100% 100%, 0% 100%, 50% 50%);
          animation: hourglass-bottom var(--duration) linear infinite;
        }
        @keyframes hourglass-rotate {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(180deg);
          }
          75% {
            transform: rotate(180deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes hourglass-top {
          0%, 50%, 100% {
            clip-path: polygon(0% 0%, 100% 0%, 50% 50%, 100% 0%, 0% 0%, 50% 50%);
          }
          25%, 75% {
            clip-path: polygon(0% 0%, 100% 0%, 50% 50%, 100% 100%, 0% 100%, 50% 50%);
          }
        }
        @keyframes hourglass-bottom {
          0%, 50%, 100% {
            clip-path: polygon(50% 50%, 100% 100%, 0% 100%, 50% 50%, 0% 100%, 100% 100%);
          }
          25%, 75% {
            clip-path: polygon(50% 50%, 100% 0%, 0% 0%, 50% 50%, 0% 0%, 100% 0%);
          }
        }
      `}</style>
      <div className={cn(sizeClasses[size], "relative")}>
        <div className={cn("hourglass-" + speed, "w-full h-full", className)} />
      </div>
    </>
  );
} 