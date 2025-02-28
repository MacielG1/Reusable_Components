"use client";

import { cn } from "@/lib/utils";

interface BarsLoaderProps {
  size?: "sm" | "md" | "lg";
  speed?: "slow" | "normal" | "fast";
  className?: string;
}

export default function BarsLoader({ 
  size = "md", 
  speed = "normal",
  className 
}: BarsLoaderProps) {
  const sizeClasses = {
    sm: "h-4 gap-1",
    md: "h-6 gap-1.5",
    lg: "h-8 gap-2",
  };

  const barWidth = {
    sm: "w-1",
    md: "w-1.5",
    lg: "w-2",
  };

  const duration = {
    slow: "1.5s",
    normal: "1s",
    fast: "0.5s",
  };

  return (
    <>
      <style>{`
        .bar-${speed} {
          --duration: ${duration[speed]};
          animation: bar-wave var(--duration) ease-in-out infinite;
        }
        .bar-${speed}:nth-child(2) {
          animation-delay: calc(var(--duration) / 4);
        }
        .bar-${speed}:nth-child(3) {
          animation-delay: calc(var(--duration) / 2);
        }
        .bar-${speed}:nth-child(4) {
          animation-delay: calc(var(--duration) * 3 / 4);
        }
        @keyframes bar-wave {
          0%, 100% {
            transform: scaleY(0.5);
          }
          50% {
            transform: scaleY(1);
          }
        }
      `}</style>
      <div className={cn("flex items-end", sizeClasses[size])}>
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "bar-" + speed,
              "bg-primary",
              barWidth[size],
              "h-full",
              className
            )}
          />
        ))}
      </div>
    </>
  );
} 