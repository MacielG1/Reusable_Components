"use client";

import { cn } from "@/lib/utils";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import React, { useState } from "react";

export type PasswordInputProps = {
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function PasswordInput({ className, ...props }: PasswordInputProps) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        id={props.id}
        value={props.value}
        onChange={handleChange}
        placeholder="Enter your password..."
        className={cn(
          "w-full rounded-md border border-gray-300 bg-white p-2 pr-8 text-base text-gray-900 placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500 dark:focus:ring-blue-400",
          className,
        )}
        required
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-0 top-1/2 mr-1 flex h-6 w-6 -translate-y-1/2 items-center justify-center text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
      >
        {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
      </button>
    </div>
  );
}
