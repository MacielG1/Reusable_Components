"use client";

import { cn } from "@/lib/utils";

interface SquareLoaderProps {
  size?: "sm" | "md" | "lg";
  speed?: "slow" | "normal" | "fast";
  className?: string;
}

export default function SquareLoader({ 
  size = "md", 
  speed = "normal",
  className 
}: SquareLoaderProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const duration = {
    slow: "3s",
    normal: "2s",
    fast: "1s",
  };

  return (
    <>
      <style>{`
        .square-${speed} {
          --duration: ${duration[speed]};
          animation: square-morph var(--duration) ease-in-out infinite;
        }
        @keyframes square-morph {
          0% {
            border-radius: 0;
            transform: rotate(0deg) scale(1);
          }
          25% {
            border-radius: 25%;
            transform: rotate(90deg) scale(0.8);
          }
          50% {
            border-radius: 50%;
            transform: rotate(180deg) scale(1.2);
          }
          75% {
            border-radius: 25%;
            transform: rotate(270deg) scale(0.8);
          }
          100% {
            border-radius: 0;
            transform: rotate(360deg) scale(1);
          }
        }
      `}</style>
      <div
        className={cn(
          `square-${speed} border-4 border-primary`,
          sizeClasses[size],
          className
        )}
      />
    </>
  );
} 