"use client";

import { cn } from "@/lib/utils";

interface RippleLoaderProps {
  size?: "sm" | "md" | "lg";
  speed?: "slow" | "normal" | "fast";
  className?: string;
}

export default function RippleLoader({ 
  size = "md", 
  speed = "normal",
  className 
}: RippleLoaderProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const duration = {
    slow: "2s",
    normal: "1.5s",
    fast: "1s",
  };

  return (
    <>
      <style>{`
        .ripple-container-${speed} {
          --duration: ${duration[speed]};
          position: relative;
          width: 100%;
          height: 100%;
        }
        .ripple-${speed} {
          position: absolute;
          border: 2px solid;
          border-radius: 50%;
          animation: ripple var(--duration) cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }
        .ripple-${speed}:nth-child(2) {
          animation-delay: calc(var(--duration) / -2);
        }
        @keyframes ripple {
          0% {
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            opacity: 1;
            transform: translate(-50%, -50%);
          }
          100% {
            top: 50%;
            left: 50%;
            width: 100%;
            height: 100%;
            opacity: 0;
            transform: translate(-50%, -50%);
          }
        }
      `}</style>
      <div className={cn(sizeClasses[size])}>
        <div className={`ripple-container-${speed}`}>
          <div className={cn("ripple-" + speed, "border-primary", className)} />
          <div className={cn("ripple-" + speed, "border-primary", className)} />
        </div>
      </div>
    </>
  );
} 