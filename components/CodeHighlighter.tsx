"use client";

import { useState, useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/prism";
import { oneLight, oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
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

const SyntaxHighlighterComponent = SyntaxHighlighter as any;

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
      <SyntaxHighlighterComponent
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
      </SyntaxHighlighterComponent>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
