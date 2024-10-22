import { cn } from "@/lib/utils";

type LeanButtonProps = {
  className?: string;
  children: React.ReactNode;
  direction?: "left" | "right";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function LeanButton({ children, className, direction = "right", ...props }: LeanButtonProps) {
  const rotationClass = direction === "left" ? "hover:-rotate-3" : "hover:rotate-3";

  return (
    <button
      className={cn(
        `transform-gpu rounded bg-green-900 px-4 py-2 text-center font-bold text-white transition-transform duration-300 ${rotationClass} hover:bg-green-800`,
        className,
        `backface-visibility: hidden; transform-style: preserve-3d; transform-origin: center;`,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export const LeanButtonVariations = [
  { label: "Default", props: {} },
  { label: "Lean Left", props: { direction: "left" } },
];

export const LeanButtonCode = `
import { cn } from "@/lib/utils";

type LeanButtonProps = {
  className?: string;
  children: React.ReactNode;
  direction?: "left" | "right";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function LeanButton({ children, className, direction = "right", ...props }: LeanButtonProps) {
  const rotationClass = direction === "left" ? "hover:-rotate-3" : "hover:rotate-3";

  return (
    <button
      className={cn(
        \`transform-gpu rounded bg-green-900 px-4 py-2 text-center font-bold text-white transition-transform duration-300 \${rotationClass} hover:bg-green-800\`,
        className,
        \`backface-visibility: hidden; transform-style: preserve-3d; transform-origin: center;\`
      )}
      {...props}
    >
      {children}
    </button>
  );
}
`;
