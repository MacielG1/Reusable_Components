import { cn } from "@/lib/utils";

type LeanButtonProps = {
  className?: string;
  children: React.ReactNode;
  direction?: "left" | "right";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function LeanButton({ children, className, direction = "right", ...props }: LeanButtonProps) {
  const rotationClass = direction === "left" ? "hover:-rotate-3" : "hover:rotate-3";

  return (
    <button
      className={cn(
        `transform-gpu rounded bg-green-900 px-4 py-2 text-center font-bold text-white transition-transform duration-300 ${rotationClass} hover:bg-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-offset-4 dark:focus-visible:ring-offset-black`,
        className,
        `backface-visibility: hidden; transform-style: preserve-3d; transform-origin: center;`,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
