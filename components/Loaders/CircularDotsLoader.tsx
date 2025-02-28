"use client";

import { cn } from "@/lib/utils";

interface CircularDotsLoaderProps {
  size?: "sm" | "md" | "lg";
  speed?: "slow" | "normal" | "fast";
  className?: string;
}

export default function CircularDotsLoader({
  size = "md",
  speed = "normal",
  className
}: CircularDotsLoaderProps) {
  const sizeClasses = {
    sm: "w-1.5 h-1.5",
    md: "w-2 h-2",
    lg: "w-3 h-3",
  };

  const containerSizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const duration = {
    slow: "2s",
    normal: "1.15s",
    fast: "0.5s",
  };

  return (
    <>
      <style>{`
        .circular-dots-container-${speed} {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .circular-dot-${speed} {
          --duration: ${duration[speed]};
          position: absolute;
          animation: circular-motion var(--duration) linear infinite;
        }
        ${[0, 45, 90, 135, 180, 225, 270, 315].map((rotation, i) => `
          .circular-dot-${speed}:nth-child(${i + 1}) {
            animation-delay: calc(var(--duration) / -8 * ${i});
          }
        `).join('')}
        @keyframes circular-motion {
          0% {
            transform: rotate(0deg) translateX(${size === "sm" ? "8px" : size === "md" ? "12px" : "16px"}) translateY(-50%);
          }
          100% {
            transform: rotate(360deg) translateX(${size === "sm" ? "8px" : size === "md" ? "12px" : "16px"}) translateY(-50%);
          }
        }
      `}</style>
      <div className={cn("flex items-center justify-center", containerSizes[size])}>
        <div className={`circular-dots-container-${speed}`}>
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className={cn(
                `circular-dot-${speed}`,
                "rounded-full bg-primary",
                sizeClasses[size],
                className
              )}
              style={{
                top: '50%',
                left: '50%',
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
