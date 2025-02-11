"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

type BorderFollowButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function BorderFollowButton({ children, className, ...props }: BorderFollowButtonProps) {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const ref = useRef<HTMLButtonElement>(null);

  const gradientStyle = {
    left: `${mousePosition.x}px`,
    top: `${mousePosition.y}px`,
  };

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    }

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <button
      className="relative cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-neutral-400 whitespace-nowrap select-none focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-offset-4 focus-visible:outline-hidden dark:bg-neutral-800 dark:focus-visible:ring-offset-black"
      ref={ref}
      {...props}
    >
      <span
        className="absolute z-0 h-28 w-28 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(#4338ca_0%,transparent_85%)]"
        style={gradientStyle}
      />
      <div
        className={cn(
          `relative z-10 m-0.5 rounded-[calc(0.5rem-1px)] bg-neutral-100 px-4 py-3 font-semibold text-indigo-700 backdrop-blur-xs dark:bg-neutral-900`,
          className,
        )}
      >
        {children}
      </div>
    </button>
  );
}
