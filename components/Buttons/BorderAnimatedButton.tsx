import { cn } from "@/lib/utils";
import React from "react";

type BorderAnimatedButtonProps = {
  children: React.ReactNode;
  className?: string;
  direction?: "clockwise" | "counterclockwise";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function BorderAnimatedButton({ children, className, direction = "clockwise", ...props }: BorderAnimatedButtonProps) {
  return (
    <button
      className={cn(
        "group relative m-3 inline-block max-w-[15rem] overflow-hidden rounded-sm px-4 py-3 text-base font-medium shadow-2xl",
        "bg-blue-500 text-slate-900 hover:bg-blue-600 dark:bg-slate-900 dark:text-slate-50 dark:hover:bg-blue-950/70",
        className,
      )}
      {...props}
    >
      <span
        className={cn(
          "absolute left-0 top-0 h-[2px] w-full",
          direction === "clockwise" ? "animate-border-x" : "animate-border-x-reverse",
          "bg-gradient-to-l from-transparent to-blue-900",
        )}
      />
      <span
        className={cn(
          "absolute right-0 top-0 h-full w-[2px]",
          direction === "clockwise" ? "animate-border-y" : "animate-border-y-reverse",
          "bg-gradient-to-t from-transparent to-blue-900",
        )}
      />
      <span
        className={cn(
          "absolute bottom-0 left-0 h-[2px] w-full",
          direction === "clockwise" ? "animate-border-x-reverse" : "animate-border-x",
          "bg-gradient-to-r from-transparent to-blue-900",
        )}
      />
      <span
        className={cn(
          "absolute left-0 top-0 h-full w-[2px]",
          direction === "clockwise" ? "animate-border-y-reverse" : "animate-border-y",
          "bg-gradient-to-b from-transparent to-blue-900",
        )}
      />

      <span className="relative">{children}</span>
    </button>
  );
}
