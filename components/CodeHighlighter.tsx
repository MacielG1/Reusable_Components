"use client";

import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight, oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "next-themes";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { cn } from "@/lib/utils";
type CodeHighlighterProps = {
  code: string;
  language?: string;
  customStyle?: React.CSSProperties;
  className?: string;
  wrapLines?: boolean;
  wrapLongLines?: boolean;
};

export default function CodeHighlighter({
  code,
  language = "tsx",
  customStyle,
  className,
  wrapLines = true,
  wrapLongLines = true,
  ...props
}: CodeHighlighterProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !resolvedTheme) {
    return null;
  }

  const codeTheme = resolvedTheme === "dark" ? oneDark : oneLight;

  return (
    <ScrollArea className="h-full">
      <SyntaxHighlighter
        language={language}
        lineProps={{ style: { wordBreak: "break-all", whiteSpace: "pre-wrap" } }}
        style={codeTheme}
        wrapLines={wrapLines}
        wrapLongLines={wrapLongLines}
        className={cn("text-sm", className)}
        customStyle={{
          margin: 0,
          // width: "100%",
          // height: "100%",
          ...customStyle,
        }}
        {...props}
      >
        {code}
      </SyntaxHighlighter>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
}
