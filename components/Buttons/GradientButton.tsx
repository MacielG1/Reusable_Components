import { cn } from "@/lib/utils";

type GradientDirection = "bg-linear-to-r" | "bg-linear-to-l" | "bg-linear-to-t" | "bg-linear-to-b" | "bg-linear-to-br" | "bg-linear-to-bl";
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
  direction = "bg-linear-to-r",
  ...props
}: GradientButtonProps) {
  const fromClass = fromPercent ? `${from} ${fromPercent}` : from;
  const viaClass = via && viaPercent ? `${via} ${viaPercent}` : "";
  const toClass = toPercent ? `${to} ${toPercent}` : to;

  const gradientClass = `${direction} ${fromClass} ${viaClass} ${toClass}`.trim();

  return (
    <button
      className={cn(
        `cursor-pointer rounded px-4 py-3 text-center whitespace-nowrap text-white select-none focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-offset-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-offset-black`,
        gradientClass,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
