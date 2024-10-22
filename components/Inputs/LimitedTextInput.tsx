import { useState } from "react";

export default function LimitedTextInput() {
  const [text, setText] = useState("");
  const maxLength = 50;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value.length <= maxLength) {
      setText(e.target.value);
    }
  }

  return (
    <div className="space-y-2">
      <label htmlFor="limited-text-input" className="block text-sm font-medium">
        Limited Text Input
      </label>
      <input
        id="limited-text-input"
        type="text"
        placeholder={`Type (max ${maxLength} characters)...`}
        value={text}
        onChange={handleChange}
        className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
      />
      <div className="flex items-center justify-between">
        <div className="h-2.5 w-full rounded-full bg-gray-200">
          <div className="h-2.5 rounded-full bg-blue-600" style={{ width: `${(text.length / maxLength) * 100}%` }}></div>
        </div>
        <span className="ml-2 text-sm text-gray-500">
          {text.length}/{maxLength}
        </span>
      </div>
    </div>
  );
}
