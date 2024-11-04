import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  direction?: "left" | "right" | "top" | "bottom";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function FillButton({ children, className, direction = "left", ...props }: ButtonProps) {
  const spanClasses = {
    left: "inset-y-0 left-0 w-[2px] group-hover:w-full",
    right: "inset-y-0 right-0 w-[2px] group-hover:w-full",
    top: "inset-x-0 top-0 h-[2px] group-hover:h-full",
    bottom: "inset-x-0 bottom-0 h-[2px] group-hover:h-full",
  };

  return (
    <button
      className={cn(
        "group relative inline-block select-none overflow-hidden whitespace-nowrap border border-indigo-600 px-6 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-offset-[6px] dark:focus-visible:ring-offset-black",
        className,
      )}
      {...props}
    >
      <span className={`absolute ${spanClasses[direction]} bg-indigo-600 transition-all group-active:bg-indigo-500`}></span>
      <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">{children}</span>
    </button>
  );
}
