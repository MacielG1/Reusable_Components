import { cn } from "@/lib/utils";

type WaveButtonProps = {
  className?: string;
  children: React.ReactNode;
  speed?: "fast" | "slow";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function WaveButton({ children, className, speed = "slow", ...props }: WaveButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md border border-neutral-800 bg-[linear-gradient(115deg,#000,45%,#2c2d2e,50%,#000)] bg-[length:200%_100%] px-6 py-2 font-medium text-neutral-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-offset-4 dark:focus-visible:ring-offset-black",
        className,
      )}
      style={{ animation: `Wave ${speed === "fast" ? "1s" : "2s"} linear infinite` }}
      {...props}
    >
      {children}
      <style>
        {`
          @keyframes Wave {
            from { background-position: 0 0; }
            to { background-position: -200% 0; }
          }
        `}
      </style>
    </button>
  );
}
