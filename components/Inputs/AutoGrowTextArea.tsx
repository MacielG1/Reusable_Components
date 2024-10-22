import { useEffect, useRef, useState } from "react";

export default function AutoGrowingTextarea() {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  }, [text]);

  return (
    <div className="space-y-2">
      <label htmlFor="auto-growing-textarea" className="block text-sm font-medium">
        Auto-growing Textarea
      </label>
      <textarea
        id="auto-growing-textarea"
        ref={textareaRef}
        placeholder="Type and I'll grow..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={1}
        className="mt-1 block max-h-[10rem] min-h-[2.5rem] w-full overflow-hidden rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
      />
      <p className="text-sm text-gray-500">Character count: {text.length}</p>
    </div>
  );
}
