"use client";

import { cn } from "@/lib/utils";

interface ProgressLoaderProps {
  size?: "sm" | "md" | "lg";
  speed?: "slow" | "normal" | "fast";
  className?: string;
}

export default function ProgressLoader({
  size = "md",
  speed = "normal",
  className
}: ProgressLoaderProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const strokeWidth = {
    sm: "2",
    md: "3",
    lg: "4",
  };

  const duration = {
    slow: "3s",
    normal: "2s",
    fast: "1s",
  };

  return (
    <>
      <style>{`
        .progress-circle-${speed} {
          --duration: ${duration[speed]};
          transform-origin: center;
          animation: progress-rotate var(--duration) linear infinite;
        }
        .progress-circle-path-${speed} {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: progress-dash var(--duration) ease-in-out infinite;
        }
        @keyframes progress-rotate {
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes progress-dash {
          0% {
            stroke-dashoffset: 100;
          }
          50% {
            stroke-dashoffset: 25;
          }
          100% {
            stroke-dashoffset: 100;
          }
        }
      `}</style>
      <div className={cn(sizeClasses[size])}>
        <svg
          className={cn("progress-circle-" + speed, "w-full h-full", className)}
          viewBox="0 0 40 40"
        >
          <circle
            className={cn("progress-circle-path-" + speed)}
            cx="20"
            cy="20"
            r="16"
            fill="none"
            strokeWidth={strokeWidth[size]}
            strokeLinecap="round"
            stroke="currentColor"
          />
        </svg>
      </div>
    </>
  );
} 