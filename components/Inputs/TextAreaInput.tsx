import { useState } from "react";

export default function TextAreaInput() {
  const [text, setText] = useState("");

  return (
    <div className="space-y-2">
      <label htmlFor="textarea-input" className="block text-sm font-medium">
        Textarea Input
      </label>
      <textarea
        id="textarea-input"
        placeholder="Type multiple lines..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
      />
    </div>
  );
}
