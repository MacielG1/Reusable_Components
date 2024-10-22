import React, { useState } from "react";

export type EmailInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function EmailInput({ ...props }: EmailInputProps) {
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
    <>
      <input
        id="email-input"
        type="email"
        placeholder="Enter your email..."
        value={email}
        onChange={handleChange}
        className={`mt-1 block w-full rounded-md border bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-sm focus:outline-none focus:ring-1 ${
          isValid ? "border-gray-300 focus:border-sky-500 focus:ring-sky-500" : "border-red-500 focus:border-red-500 focus:ring-red-500"
        }`}
        {...props}
      />
      {!isValid && <p className="text-sm text-red-500">Please enter a valid email address</p>}
    </>
  );
}
