import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  mode?: "default" | "reverse";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function CenterFillButton({ children, className, mode = "default", ...props }: Props) {
  const animationClasses = mode === "default" ? "group-hover:w-56 group-hover:h-56" : "w-56 h-56 group-hover:w-0 group-hover:h-0";
  return (
    <button
      className={cn(
        `group relative inline-flex cursor-pointer select-none items-center justify-center overflow-hidden whitespace-nowrap rounded-lg bg-gray-800 p-4 font-mono font-medium tracking-tighter text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-offset-4 dark:focus-visible:ring-offset-black`,
        className,
      )}
      {...props}
    >
      <span className={`absolute h-0 w-0 rounded-full bg-green-500 transition-all duration-700 ease-out ${animationClasses}`} />
      <span className="relative">{children}</span>
    </button>
  );
}
