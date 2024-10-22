import { cn } from "@/lib/utils";

type WaveButtonProps = {
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function WaveButton({ children, className, ...props }: WaveButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md border border-neutral-800 bg-[linear-gradient(115deg,#000,45%,#2c2d2e,50%,#000)] bg-[length:200%_100%] px-6 py-2 font-medium text-neutral-300 transition-colors focus:outline-none focus:ring-2",
        className,
      )}
      style={{ animation: "Wave 2s linear infinite" }}
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

export const WaveButtonVariations = [{ label: "Default", props: {} }];

export const WaveButtonCode = `
import { cn } from "@/lib/utils";

type WaveButtonProps = {
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function WaveButton({ children, className, ...props }: WaveButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md border border-neutral-800 bg-[linear-gradient(115deg,#000,45%,#2c2d2e,50%,#000)] bg-[length:200%_100%] px-6 py-2 font-medium text-neutral-300 transition-colors focus:outline-none focus:ring-2",
        className,
      )}
      style={{ animation: "Wave 2s linear infinite" }}
      {...props}
    >
      {children}
      <style>
        {\`
          @keyframes Wave {
            from { background-position: 0 0; }
            to { background-position: -200% 0; }
          }
        \`}
      </style>
    </button>
  );
}
`;
