"use client";

import { cn } from "@/lib/utils";

interface BouncingDotsLoaderProps {
  size?: "sm" | "md" | "lg";
  speed?: "slow" | "normal" | "fast";
  className?: string;
}

export default function BouncingDotsLoader({
  size = "md",
  speed = "normal",
  className
}: BouncingDotsLoaderProps) {
  const sizeClasses = {
    sm: "h-6 gap-1",
    md: "h-8 gap-2",
    lg: "h-12 gap-3",
  };

  const dotSizes = {
    sm: "w-1.5 h-1.5",
    md: "w-2 h-2",
    lg: "w-3 h-3",
  };

  const duration = {
    slow: "1.5s",
    normal: "1s",
    fast: "0.5s",
  };

  return (
    <>
      <style>{`
        .bouncing-container-${speed} {
          --duration: ${duration[speed]};
          display: flex;
          align-items: flex-end;
        }
        .bouncing-dot-${speed} {
          animation: bouncing var(--duration) infinite;
        }
        .bouncing-dot-${speed}:nth-child(2) {
          animation-delay: calc(var(--duration) / 6);
        }
        .bouncing-dot-${speed}:nth-child(3) {
          animation-delay: calc(var(--duration) / 3);
        }
        @keyframes bouncing {
          0%, 100% {
            transform: translateY(0%);
          }
          50% {
            transform: translateY(-150%);
          }
        }
      `}</style>
      <div className={cn(sizeClasses[size])}>
        <div className={cn("bouncing-container-" + speed, "h-full")}>
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "bouncing-dot-" + speed,
                "rounded-full bg-primary",
                dotSizes[size],
                className
              )}
            />
          ))}
        </div>
      </div>
    </>
  );
} 