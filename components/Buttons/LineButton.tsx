import { cn } from "@/lib/utils";

type LineButtonProps = {
  direction?: "left" | "right" | "center";
  position?: "top" | "bottom";
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function LineButton({ children, className, direction = "left", position = "bottom", ...props }: LineButtonProps) {
  const positionClass = position === "top" ? "-top-1" : "-bottom-1";

  const directionClasses = {
    left: "absolute -bottom-1 left-0",
    right: "absolute -bottom-1 right-0",
    center: "absolute -bottom-1 left-1/2 -translate-x-1/2",
  };

  return (
    <button
      className={cn(
        "group relative w-max text-base font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-offset-[6px] dark:focus-visible:ring-offset-black",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      <span
        className={`absolute ${positionClass} ${directionClasses[direction]} h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full`}
      />
    </button>
  );
}
