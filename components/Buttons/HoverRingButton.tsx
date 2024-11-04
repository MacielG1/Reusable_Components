import { cn } from "@/lib/utils";

type HoverRingButtonProps = {
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function HoverRingButton({ children, className, ...props }: HoverRingButtonProps) {
  return (
    <button
      className={cn(
        `shadow-xs cursor-pointer rounded-xl bg-teal-700 px-4 py-2.5 text-center text-sm font-semibold text-white ring-offset-2 ring-offset-background transition-all duration-500 hover:bg-teal-600 hover:ring-2 hover:ring-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-offset-4 dark:focus-visible:ring-offset-black`,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
