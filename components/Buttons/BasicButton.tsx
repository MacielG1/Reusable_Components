import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: "default" | "primary" | "secondary";
}

const BasicButton: FC<ButtonProps> = ({ children, variant = "default", ...props }) => {
  return (
    <button className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" {...props}>
      {children}
    </button>
  );
};

export default BasicButton;
