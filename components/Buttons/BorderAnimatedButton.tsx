import { cn } from "@/lib/utils";
import React from "react";

type BorderAnimatedButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function BorderAnimatedButton({ children, className, ...props }: BorderAnimatedButtonProps) {
  return (
    <button
      className={cn(
        "group relative m-3 inline-block max-w-[15rem] overflow-hidden rounded-sm px-4 py-2 text-base font-medium shadow-2xl",
        "bg-blue-500 text-slate-900 hover:bg-blue-600 dark:bg-slate-900 dark:text-slate-50 dark:hover:bg-blue-950/80",
        className,
      )}
      {...props}
    >
      <span className="animate-border-x absolute left-0 top-0 h-[2px] w-full bg-gradient-to-l from-transparent to-blue-900" />
      <span className="animate-border-y absolute right-0 top-0 h-full w-[2px] bg-gradient-to-t from-transparent to-blue-900" />
      <span className="animate-border-x-reverse absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent to-blue-900" />
      <span className="animate-border-y-reverse absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent to-blue-900" />

      <span className="relative">{children}</span>
    </button>
  );
}
