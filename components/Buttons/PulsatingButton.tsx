import { cn } from "@/lib/utils";

type PulsateButtonProps = {
  className?: string;
  children: React.ReactNode;
  speed?: "fast" | "slow";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function PulsatingButton({ children, className, speed = "slow", ...props }: PulsateButtonProps) {
  return (
    <button
      className={cn(
        "cursor-pointer rounded-lg bg-blue-700 p-4 font-semibold text-white shadow-lg focus-visible:outline focus-visible:outline-neutral-700 dark:focus-visible:outline-neutral-800",
        className,
      )}
      style={{ animation: `pulsate ${speed === "fast" ? "1s" : "2s"} infinite` }}
      {...props}
    >
      {children}
      <style>
        {`
          @keyframes pulsate {
            0% { box-shadow: 0 0 0 0 rgba(88, 120, 243, 1); }
            70% { box-shadow: 0 0 0 10px rgba(58, 100, 243, 0); }
            100% { box-shadow: 0 0 0 14px rgba(38, 100, 243, 0); }
          }
        `}
      </style>
    </button>
  );
}
