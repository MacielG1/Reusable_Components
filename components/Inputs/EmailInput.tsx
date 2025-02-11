"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

export type EmailInputProps = {
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function EmailInput({ className, ...props }: EmailInputProps) {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  function validateEmail(email: string) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValid(validateEmail(newEmail) || newEmail === "");
  }

  return (
    <div className="relative">
      {!isValid && <p className="absolute -bottom-6 text-sm text-red-500 dark:text-red-400">Please enter a valid email address</p>}
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleChange}
        className={cn(
          "w-full rounded-md border px-3 py-2 shadow-xs",
          "bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100",
          "border-gray-300 dark:border-gray-600",
          "placeholder-gray-400 dark:placeholder-gray-500",
          "focus:border-blue-500 focus:outline-hidden focus:ring-1 focus:ring-blue-500",
          isValid ? "" : "border-red-300 focus:border-red-500 focus:ring-red-500 dark:border-red-600",
          className,
        )}
        placeholder="you@example.com"
        aria-invalid={!isValid ? "true" : "false"}
        aria-describedby={!isValid ? "email-error" : undefined}
        {...props}
      />
    </div>
  );
}
