"use client";
import { useState, useCallback } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  textToCopy: string;
  className?: string;
}

export default function CopyButton({ textToCopy, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [textToCopy]);

  return (
    <button onClick={handleCopy} className={cn(`flex items-center min-w-32 w-32 justify-center p-2 rounded-md`, className)} aria-label="Copy code">
      {copied ? <Check className="size-4 text-green-500" /> : <Copy className="size-4" />}
      <span className="ml-2 text-center">{copied ? "Copied!" : "Copy"}</span>
    </button>
  );
}
