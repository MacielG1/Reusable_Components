import { cn } from "@/lib/utils";

type ShimmerButtonProps = {
  className?: string;
  children: React.ReactNode;
  speed?: "fast" | "slow";
  direction?: "normal" | "reverse";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function ShimmerButton({ children, className, speed = "slow", direction = "normal", ...props }: ShimmerButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex cursor-pointer items-center justify-center rounded-md border border-neutral-800",
        direction === "normal" ? "bg-[linear-gradient(115deg,#000,49%,#2c2d2e,50%,#000)]" : "bg-[linear-gradient(-115deg,#000,49%,#2c2d2e,50%,#000)]",
        "bg-[length:200%_100%] px-6 py-2 font-medium text-neutral-300 transition-colors focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-offset-4 focus-visible:outline-hidden dark:focus-visible:ring-offset-black",
        className,
      )}
      style={{ animation: `Shimmer ${speed === "fast" ? "1s" : "2s"} linear infinite`, animationDirection: direction }}
      {...props}
    >
      {children}
      <style>
        {`
          @keyframes Shimmer {
            from { background-position: 0 0; }
            to { background-position: -200% 0; }
          }
        `}
      </style>
    </button>
  );
}
