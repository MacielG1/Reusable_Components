"use client";

import { cn } from "@/lib/utils";

interface SpiralLoaderProps {
  size?: "sm" | "md" | "lg";
  speed?: "slow" | "normal" | "fast";
  className?: string;
}

export default function SpiralLoader({
  size = "md",
  speed = "normal",
  className
}: SpiralLoaderProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const dotSizes = {
    sm: "w-1 h-1",
    md: "w-1.5 h-1.5",
    lg: "w-2 h-2",
  };

  const duration = {
    slow: "3s",
    normal: "2s",
    fast: "1s",
  };

  return (
    <>
      <style>{`
        .spiral-container-${speed} {
          --duration: ${duration[speed]};
          position: relative;
          width: 100%;
          height: 100%;
        }
        .spiral-dot-${speed} {
          position: absolute;
          top: 50%;
          left: 50%;
          transform-origin: -50% -50%;
        }
        ${[...Array(16)].map((_, i) => `
          .spiral-dot-${speed}:nth-child(${i + 1}) {
            transform: rotate(${i * 22.5}deg) translateX(${3 + (i * 0.8)}px);
            animation: spiral-spin-${speed} var(--duration) ease-in-out infinite;
            animation-delay: calc(var(--duration) / -16 * ${i});
          }
        `).join("")}
        @keyframes spiral-spin-${speed} {
          0%, 100% {
            opacity: 0.2;
            transform: rotate(var(--rotate)) translateX(var(--translate-x)) scale(0.8);
          }
          50% {
            opacity: 1;
            transform: rotate(calc(var(--rotate) + 180deg)) translateX(var(--translate-x)) scale(1.2);
          }
        }
      `}</style>
      <div className={cn(sizeClasses[size])}>
        <div className={`spiral-container-${speed}`}>
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "spiral-dot-" + speed,
                "rounded-full bg-primary",
                dotSizes[size],
                className
              )}
              style={{
                ["--rotate" as any]: `${i * 22.5}deg`,
                ["--translate-x" as any]: `${3 + (i * 0.8)}px`
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
} 