import { cn } from "@/lib/utils";

type GradientDirection =
  | "bg-gradient-to-r"
  | "bg-gradient-to-l"
  | "bg-gradient-to-t"
  | "bg-gradient-to-b"
  | "bg-gradient-to-br"
  | "bg-gradient-to-bl";
type Percentage = "10%" | "20%" | "30%" | "40%" | "50%" | "60%" | "70%" | "80%" | "90%" | "100%";

type GradientButtonProps = {
  direction?: GradientDirection;
  from: string;
  fromPercent?: `from-${Percentage}`;
  via?: string;
  viaPercent?: `via-${Percentage}`;
  to: string;
  toPercent?: `to-${Percentage}`;
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function GradientButton({
  children,
  className,
  from = "from-indigo-900",
  fromPercent,
  via,
  viaPercent,
  to = "to-pink-500",
  toPercent,
  direction = "bg-gradient-to-r",
  ...props
}: GradientButtonProps) {
  const fromClass = fromPercent ? `${from} ${fromPercent}` : from;
  const viaClass = via && viaPercent ? `${via} ${viaPercent}` : "";
  const toClass = toPercent ? `${to} ${toPercent}` : to;

  const gradientClass = `${direction} ${fromClass} ${viaClass} ${toClass}`.trim();

  return (
    <button
      className={cn(
        `select-none whitespace-nowrap rounded px-4 py-3 text-center text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-offset-4 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-offset-black`,
        gradientClass,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
