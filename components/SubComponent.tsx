"use client";
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CopyButton from "@/components/CopyButton";
import CodeHighlighter from "@/components/CodeHighlighter";
import TerminalCommands from "@/components/TerminalCommands";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CircleAlert, FileWarning } from "lucide-react";

type Props = {
  code: string;
  componentData: any;
  source: string;
};

export default function SubComponent({ componentData, code, source }: Props) {
  const [mounted, setMounted] = useState(false);

  const Component = require(`@/components/${source}/${componentData.filename}`).default;

  useEffect(() => {
    setMounted(true);
  }, []);

  const hasCN = code.includes("cn(");
  const isButtonComponent = source.includes("Button");

  if (!mounted) return null;

  return (
    <div className="flex h-full w-full flex-col p-4 pb-20">
      <div className="flex w-full grow flex-col">
        <Tabs defaultValue="preview" className="flex w-full grow flex-col">
          <div className="relative mb-4 flex w-full items-center">
            <div className="absolute left-0">
              <TabsList className="inline-flex h-10 w-fit items-center justify-start rounded-md bg-muted p-1 text-muted-foreground">
                <TabsTrigger
                  value="preview"
                  className="inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-xs"
                >
                  Preview
                </TabsTrigger>
                <TabsTrigger
                  value="code"
                  className="inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-xs"
                >
                  Code
                </TabsTrigger>
              </TabsList>
            </div>
            <h2 className="w-full text-center text-2xl font-bold">{componentData.name}</h2>
          </div>
          <div className="relative w-full overflow-hidden rounded-md border">
            <TabsContent value="preview" className="inset-0 m-0 flex h-[43vh] max-h-[43vh] items-center justify-center data-[state=inactive]:hidden">
              {isButtonComponent ? <Component children={componentData.name} /> : <Component />}
            </TabsContent>
            <TabsContent value="code" className="relative inset-0 m-0 h-[43vh] max-h-[43vh] overflow-auto data-[state=inactive]:hidden">
              <div className="absolute right-2 top-2 z-10">
                <CopyButton codyToCopy={code} />
              </div>
              <CodeHighlighter code={code} customStyle={{ paddingTop: 0, paddingBottom: 8 }} />
            </TabsContent>
          </div>
        </Tabs>
      </div>
      {componentData?.dependencies?.length > 0 && (
        <div className="mt-8 py-5">
          <h2 className="mb-4 text-2xl font-bold">Dependencies</h2>
          <div className="flex flex-col">
            <div>
              <TerminalCommands packages={componentData.dependencies} />
            </div>
          </div>
        </div>
      )}
      {hasCN && (
        <div className="mb-2">
          <Button asChild variant="link" className="p-0 text-neutral-500 dark:text-neutral-400">
            <Link href="/installation/cn">
              <FileWarning className="mr-2 size-4" />
              This component uses&nbsp;<span className="font-bold">cn</span>&nbsp;function to merge classes
            </Link>
          </Button>
        </div>
      )}
      {componentData?.variations?.length > 0 && (
        <div className="mt-8">
          <h2 id="examples" className="mb-4 text-2xl font-bold">
            Examples
          </h2>
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            {componentData.variations.map((variation: { label: string; props: any }, index: number) => {
              const propsString = Object.entries(variation.props)
                .map(([key, value]) => {
                  if (typeof value === "string") {
                    return `${key}="${value}"`;
                  } else {
                    return `${key}={${JSON.stringify(value)}}`;
                  }
                })
                .join(" ");

              const variationCode = propsString
                ? `<${componentData.filename} ${propsString}>${variation.props.children || componentData.name}</${componentData.filename}>`
                : `<${componentData.filename}>${variation.props.children || componentData.name}</${componentData.filename}>`;

              return (
                <div key={index} className="flex w-full flex-col rounded-md border p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{variation.label}</h3>
                  </div>
                  <div className="mx-auto mb-4 h-20">
                    <Component {...variation.props}>{variation.props.children || componentData.name}</Component>
                  </div>
                  <div className="mb-2 flex justify-end">
                    <CopyButton codyToCopy={variationCode} />
                  </div>
                  <div className="max-h-48">
                    <CodeHighlighter code={variationCode} className="text-[0.75rem] xl:text-[0.85rem]" wrapLines={false} wrapLongLines={false} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
