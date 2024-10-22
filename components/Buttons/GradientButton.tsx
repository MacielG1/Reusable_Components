import { cn } from "@/lib/utils";

type GradientDirection = "bg-gradient-to-r" | "bg-gradient-to-l" | "bg-gradient-to-t" | "bg-gradient-to-b" | "bg-gradient-to-br" | "bg-gradient-to-bl";
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
  from,
  fromPercent,
  via,
  viaPercent,
  to,
  toPercent,
  direction = "bg-gradient-to-r",
  ...props
}: GradientButtonProps) {
  const fromClass = fromPercent ? `${from} ${fromPercent}` : from;
  const viaClass = via && viaPercent ? `${via} ${viaPercent}` : ""; // Ensure viaClass is an empty string if not provided
  const toClass = toPercent ? `${to} ${toPercent}` : to;

  const gradientClass = `${direction} ${fromClass} ${viaClass} ${toClass}`.trim(); // Trim to remove any extra spaces

  console.log(gradientClass);

  return (
    <button
      className={cn(
        `select-none whitespace-nowrap rounded px-4 py-3 text-center text-white disabled:pointer-events-none disabled:opacity-50`,
        gradientClass,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export const GradientButtonVariations = [
  { label: "Left to Right", props: { direction: "bg-gradient-to-r", from: "from-indigo-900", to: "to-blue-500" } },
  { label: "From-Via-To", props: { from: "from-indigo-900", via: "via-blue-500", to: "to-pink-500" } },
  { label: "Top to Bottom", props: { direction: "bg-gradient-to-b", from: "from-green-800", to: "to-green-500" } },
  { label: "Top Left to Bottom Right", props: { direction: "bg-gradient-to-br", from: "from-orange-700", to: "to-pink-900" } },
];

export const GradientButtonCode = `
import { cn } from "@/lib/utils";

type GradientDirection = "bg-gradient-to-r" | "bg-gradient-to-l" | "bg-gradient-to-t" | "bg-gradient-to-b" | "bg-gradient-to-br" | "bg-gradient-to-bl";
type Percentage = "10%" | "20%" | "30%" | "40%" | "50%" | "60%" | "70%" | "80%" | "90%" | "100%";

type GradientButtonProps = {
  direction?: GradientDirection;
  from: string;
  fromPercent?: \`from-\${Percentage}\`;
  via?: string;
  viaPercent?: \`via-\${Percentage}\`;
  to: string;
  toPercent?: \`to-\${Percentage}\`;
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function GradientButton({
  children,
  className,
  from,
  fromPercent,
  via,
  viaPercent,
  to,
  toPercent,
  direction = "bg-gradient-to-r",
  ...props
}: GradientButtonProps) {
  const fromClass = fromPercent ? \`\${from} \${fromPercent}\` : from;
  const viaClass = via && viaPercent ? \`\${via} \${viaPercent}\` : ""; // Ensure viaClass is an empty string if not provided
  const toClass = toPercent ? \`\${to} \${toPercent}\` : to;

  const gradientClass = \`\${direction} \${fromClass} \${viaClass} \${toClass}\`.trim(); // Trim to remove any extra spaces

  console.log(gradientClass);

  return (
    <button
      className={cn(
        \`select-none whitespace-nowrap rounded px-4 py-3 text-center text-white disabled:pointer-events-none disabled:opacity-50\`,
        gradientClass,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
`;
