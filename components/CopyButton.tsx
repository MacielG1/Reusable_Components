"use client";
import { useState, useCallback } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface CopyButtonProps {
  codyToCopy: string;
  className?: string;
}

export default function CopyButton({ codyToCopy, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(codyToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [codyToCopy]);

  return (
    <Button
      variant="ghost"
      onClick={handleCopy}
      className={cn(`flex w-32 min-w-32 items-center justify-center rounded-md p-2`, className)}
      aria-label="Copy code"
    >
      {copied ? <Check className="size-4 text-green-500" /> : <Copy className="size-4" />}
      <span className="ml-2 text-center">{copied ? "Copied!" : "Copy"}</span>
    </Button>
  );
}
