"use client";

import { cn } from "@/lib/utils";

interface SpinnerLoaderProps {
  size?: "sm" | "md" | "lg";
  speed?: "slow" | "normal" | "fast";
  className?: string;
}

export default function SpinnerLoader({ 
  size = "md", 
  speed = "normal",
  className 
}: SpinnerLoaderProps) {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
  };

  const duration = {
    slow: "2s",
    normal: "1s",
    fast: "0.5s",
  };

  return (
    <>
      <style>{`
        .spinner-${speed} {
          --duration: ${duration[speed]};
          border-radius: 50%;
          animation: spin var(--duration) linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <div
        className={cn(
          `spinner-${speed} border-primary border-t-transparent`,
          sizeClasses[size],
          className
        )}
      />
    </>
  );
} 