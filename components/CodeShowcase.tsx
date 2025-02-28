"use client";

import { cn } from "@/lib/utils";
import CopyButton from "./CopyButton";
import { CodeXml } from "lucide-react";
import { Button } from "./ui/button";

interface CodeShowcaseProps {
  title: string;
  description: string;
  component: React.ReactNode;
  code: string;
  className?: string;
}

export default function CodeShowcase({
  title,
  description,
  component,
  code,
  className,
}: CodeShowcaseProps) {
  return (
    <div className={cn("mb-12", className)}>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <div className="rounded-lg border bg-card p-6 mb-4">
        <div className="flex min-h-16 items-center justify-center">
          {component}
        </div>
      </div>

      <div className="relative">
        <pre className="rounded-lg bg-muted p-4 overflow-x-auto">
          <code className="text-sm">{code}</code>
        </pre>
        <div className="absolute right-4 top-4">
          <CopyButton
            codyToCopy={code}
            className="h-auto w-auto min-w-[5.5rem] cursor-pointer p-1.5 py-1.5 text-sm focus-within:ring-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800"
          />
        </div>
      </div>
    </div>
  );
} 