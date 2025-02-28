"use client";

import { cn } from "@/lib/utils";

interface NewtonLoaderProps {
  size?: "sm" | "md" | "lg";
  speed?: "slow" | "normal" | "fast";
  className?: string;
}

export default function NewtonLoader({
  size = "md",
  speed = "normal",
  className
}: NewtonLoaderProps) {
  const sizeClasses = {
    sm: "w-12 h-6",
    md: "w-16 h-8",
    lg: "w-20 h-10",
  };

  const ballSizes = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  };

  const duration = {
    slow: "2.5s",
    normal: "1.5s",
    fast: "1s",
  };

  return (
    <>
      <style>{`
        .newton-container-${speed} {
          --duration: ${duration[speed]};
          position: relative;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 1px;
          width: 100%;
          height: 100%;
        }
        .newton-ball-${speed} {
          position: relative;
          transform-origin: 50% 0;
        }
        .newton-ball-${speed}:first-child {
          animation: newton-left var(--duration) ease-in-out infinite;
        }
        .newton-ball-${speed}:last-child {
          animation: newton-right var(--duration) ease-in-out infinite;
        }
        @keyframes newton-left {
          0%, 50%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(45deg);
          }
        }
        @keyframes newton-right {
          0%, 50%, 100% {
            transform: rotate(0deg);
          }
          75% {
            transform: rotate(-45deg);
          }
        }
      `}</style>
      <div className={cn(sizeClasses[size])}>
        <div className={`newton-container-${speed}`}>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "newton-ball-" + speed,
                "h-full flex items-start"
              )}
            >
              <div
                className={cn(
                  "rounded-full bg-primary shadow-md",
                  ballSizes[size],
                  className
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
} 