"use client";

import { cn } from "@/lib/utils";
import React, { useState, useRef } from "react";

export type FollowBorderInputProps = {
  className?: string;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function FollowBorderInput({
  className,
  borderColor = "#0ea5e9",
  borderWidth = 2,
  borderRadius = 8,
  ...props
}: FollowBorderInputProps) {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  function updatePosition(e: React.MouseEvent) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  const gradientStyle = {
    padding: `${borderWidth}px`,
    background: isActive
      ? `radial-gradient(
          circle at ${position.x}px ${position.y}px,
          ${borderColor} 0%,
          ${borderColor} 20%,
          transparent 58%
        )`
      : "none",
    opacity: isActive ? 1 : 0,
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative h-10 w-full max-w-[300px]", className)}
      onMouseMove={updatePosition}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      style={{ "--border-radius": `${borderRadius}px` } as React.CSSProperties}
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-[var(--border-radius)] transition-opacity duration-300"
        style={gradientStyle}
      >
        <div className="h-full w-full rounded-[calc(var(--border-radius)-2px)] bg-white dark:bg-gray-800" />
      </div>

      <div
        className={cn(
          "pointer-events-none absolute inset-0 -z-20 rounded-[var(--border-radius)] transition-all duration-200",
          isActive ? "bg-neutral-200 dark:bg-gray-700" : "bg-white dark:bg-gray-800",
        )}
      />

      <input
        {...props}
        placeholder={props.placeholder ?? "Type..."}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        className={cn(
          "relative h-full w-full rounded-[var(--border-radius)] border border-gray-300",
          "bg-transparent px-3 py-2",
          "text-gray-900 placeholder-gray-400 dark:text-gray-100 dark:placeholder-gray-500",
          "transition-colors duration-200 focus:outline-hidden dark:border-gray-600",
          isActive && "dark:border-transparent",
          className,
        )}
      />
    </div>
  );
}
