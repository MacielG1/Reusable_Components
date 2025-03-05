"use client";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

type SpotlightButtonProps = {
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function SpotlightButton({ children, className, ...props }: SpotlightButtonProps) {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const handleMouseMove = (e: MouseEvent) => {
      if (!button) return;
      const rect = button.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    if (button) {
      button.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (button) {
        button.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-lg bg-red-600 px-4 py-3 font-bold text-white transition-colors duration-300 hover:bg-red-700 focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-offset-4 focus-visible:outline-hidden dark:focus-visible:ring-offset-black",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {isHovered && (
        <span
          className="absolute inset-0 transition-opacity duration-300 ease-in-out"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle 4rem at ${position.x}px ${position.y}px, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 50%)`,
          }}
        />
      )}
    </button>
  );
}
