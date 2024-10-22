import { cn } from "@/lib/utils";

type PulsateButtonProps = {
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function PulsatingButton({ children, className, ...props }: PulsateButtonProps) {
  return (
    <button
      className={cn("rounded-lg bg-blue-700 p-4 font-semibold text-white shadow-lg", className)}
      style={{ animation: "pulsate 2s infinite" }}
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

export const PulsatingButtonVariations = [{ label: "Default", props: {} }];

export const PulsatingButtonCode = `
import { cn } from "@/lib/utils";

type PulsateButtonProps = {
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function PulsatingButton({ children, className, ...props }: PulsateButtonProps) {
  return (
    <button className={cn("rounded-lg bg-blue-700 p-4 font-semibold text-white shadow-lg", className)} style={{ animation: "pulsate 2s infinite" }} {...props}>
      {children}
      <style>
        {\`
          @keyframes pulsate {
            0% { box-shadow: 0 0 0 0 rgba(88, 120, 243, 1); }
            70% { box-shadow: 0 0 0 10px rgba(58, 100, 243, 0); }
            100% { box-shadow: 0 0 0 14px rgba(38, 100, 243, 0); }
          }
        \`}
      </style>
    </button>
  );
}

`;
