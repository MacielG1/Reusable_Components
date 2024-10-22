import { useState } from "react";

export type TextInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function TextInput({ ...props }: TextInputProps) {
  const [text, setText] = useState("");
  return (
    <input
      id="text-input"
      type="text"
      placeholder="Type something..."
      value={text}
      onChange={(e) => setText(e.target.value)}
      className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
    />
  );
}
