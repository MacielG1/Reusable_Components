import { cn } from "@/lib/utils";

type LineButtonProps = {
  direction?: "left" | "right" | "center";
  position?: "top" | "bottom";
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function LineButton({ children, className, direction = "left", position = "bottom", ...props }: LineButtonProps) {
  const baseClasses = "text-base font-semibold m-6 group relative w-max";
  const positionClass = position === "top" ? "-top-1" : "-bottom-1";

  const directionClasses = {
    left: "absolute -bottom-1 left-0",
    right: "absolute -bottom-1 right-0",
    center: "absolute -bottom-1 left-1/2 -translate-x-1/2",
  };

  return (
    <button className={cn(baseClasses, className)} {...props}>
      <span>{children}</span>
      <span className={`absolute ${positionClass} ${directionClasses[direction]} h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full`} />
    </button>
  );
}

export const LineButtonVariations = [{ label: "Default", props: {} }];

export const LineButtonCode = `
import { cn } from "@/lib/utils";

type LineButtonProps = {
  direction?: "left" | "right" | "center";
  position?: "top" | "bottom";
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function LineButton({ children, className, direction = "left", position = "bottom", ...props }: LineButtonProps) {
  const baseClasses = "text-base font-semibold m-6 group relative w-max";
  const positionClass = position === "top" ? "-top-1" : "-bottom-1";

  const directionClasses = {
    left: "absolute -bottom-1 left-0",
    right: "absolute -bottom-1 right-0",
    center: "absolute -bottom-1 left-1/2 -translate-x-1/2",
  };

  return (
    <button className={cn(baseClasses, className)} {...props}>
      <span>{children}</span>
      <span className={\`absolute \${positionClass} \${directionClasses[direction]} h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full\`} />
    </button>
  );
}
`;
