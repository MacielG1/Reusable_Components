"use client";

import { cn } from "@/lib/utils";

interface DotsLoaderProps {
  size?: "sm" | "md" | "lg";
  speed?: "slow" | "normal" | "fast";
  className?: string;
}

export default function DotsLoader({ 
  size = "md", 
  speed = "normal",
  className 
}: DotsLoaderProps) {
  const sizeClasses = {
    sm: "w-1.5 h-1.5",
    md: "w-2 h-2",
    lg: "w-3 h-3",
  };

  const duration = {
    slow: "2s",
    normal: "1s",
    fast: "0.5s",
  };

  return (
    <>
      <style>{`
        .dots-container-${speed} {
          --duration: ${duration[speed]};
          position: relative;
          width: 100%;
          height: 100%;
        }
        @keyframes rotate {
          from {
            transform: rotate(var(--start-rotation)) translate(12px) translate(-50%, -50%);
          }
          to {
            transform: rotate(calc(var(--start-rotation) + 360deg)) translate(12px) translate(-50%, -50%);
          }
        }
      `}</style>
      <div className="w-8 h-8">
        <div className={`dots-container-${speed}`}>
          <div className="absolute inset-0">
            {[0, 120, 240].map((rotation, i) => (
              <span
                key={i}
                className={cn(
                  "absolute rounded-full bg-primary",
                  sizeClasses[size],
                  className
                )}
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${rotation}deg) translate(12px) translate(-50%, -50%)`,
                  animation: `rotate var(--duration) linear infinite`,
                  '--start-rotation': `${rotation}deg`
                } as any}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
} 