import { cn } from "@/lib/utils";

type Button3DProps = {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button3D({ children, className, ...props }: Button3DProps) {
  return (
    <button
      className={cn(
        `cursor-pointer select-none whitespace-nowrap rounded-md border-[1px] border-cyan-400 bg-cyan-500 p-4 text-center transition-all duration-150 [box-shadow:0_10px_0_0_#028ba3] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:ring-offset-4 active:translate-y-2 active:[box-shadow:0_0px_0_0_#028ba3] disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-offset-black`,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
