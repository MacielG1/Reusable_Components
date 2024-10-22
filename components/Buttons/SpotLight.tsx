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
    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    if (buttonRef.current) {
      buttonRef.current.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (buttonRef.current) {
        buttonRef.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className={cn(
        "relative overflow-hidden rounded-lg bg-red-600 px-4 py-3 font-bold text-white transition-colors duration-300 hover:bg-red-700",
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
            background: `radial-gradient(circle 4rem at ${position.x}px ${position.y}px, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 50%)`,
          }}
        />
      )}
    </button>
  );
}

export const SpotlightButtonVariations = [{ label: "Default", props: {} }];

export const SpotlightButtonCode = `
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
    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    if (buttonRef.current) {
      buttonRef.current.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (buttonRef.current) {
        buttonRef.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className={cn("relative overflow-hidden rounded-lg bg-red-600 px-4 py-3 font-bold text-white transition-colors duration-300 hover:bg-red-700", className)}
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
            background: \`radial-gradient(circle 4rem at \${position.x}px \${position.y}px, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 50%)\`,
          }}
        />
      )}
    </button>
  );
}
`;
