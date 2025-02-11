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
        `group relative inline-flex cursor-pointer overflow-hidden rounded-lg bg-gray-800 p-4 font-mono font-medium tracking-tighter whitespace-nowrap text-white select-none focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-offset-4 focus-visible:outline-hidden dark:focus-visible:ring-offset-black`,
        className,
      )}
      {...props}
    >
      <span
        className={`absolute top-1/2 left-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500 transition-all duration-700 ease-out ${animationClasses}`}
      />
      <span className="relative z-10">{children}</span>
    </button>
  );
}
