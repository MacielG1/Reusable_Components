import { cn } from "@/lib/utils";

type HoverRingButtonProps = {
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function HoverRingButton({ children, className, ...props }: HoverRingButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        `shadow-xs cursor-pointer rounded-xl bg-teal-700 px-4 py-2.5 text-center text-sm font-semibold text-white ring-offset-2 ring-offset-background transition-all duration-500 hover:bg-teal-600 hover:ring-2 hover:ring-teal-700`,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export const HoverRingButtonVariations = [{ label: "Default", props: {} }];

export const HoverRingButtonCode = `
import { cn } from "@/lib/utils";

type HoverRingButtonProps = {
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function HoverRingButton({ children, className, ...props }: HoverRingButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        \`shadow-xs cursor-pointer rounded-xl bg-teal-700 px-4 py-2.5 text-center text-sm font-semibold text-white ring-offset-2 ring-offset-background transition-all duration-500 hover:bg-teal-600 hover:ring-2 hover:ring-teal-700\`,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
`;
