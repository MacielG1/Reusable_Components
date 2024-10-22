"use client";
import { useMemo, useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CopyButton from "@/components/CopyButton";
import CodeHighlighter from "@/components/CodeHighlighter";
import TerminalCommands from "@/components/TerminalCommands";
import { buttons } from "@/lib/const";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page({ params }: { params: { button_slug: string } }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const ButtonData = useMemo(() => buttons[params.button_slug as keyof typeof buttons], [params.button_slug]);

  if (!ButtonData) {
    return <div>Button not found</div>;
  }

  const { component: ButtonComponent, code: ButtonCode, props: buttonProps, variations, dependencies } = ButtonData;

  const hasCN = ButtonData.code.includes("cn(");

  const buttonName = params.button_slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  if (!mounted) return null;

  return (
    <div className="p-4 pb-20 flex flex-col h-full w-full">
      <div className="flex-grow flex flex-col w-full">
        <Tabs defaultValue="preview" className="flex-grow flex flex-col w-full">
          <div className="relative flex justify-between items-center mb-4 w-full">
            <TabsList className="inline-flex h-10 items-center justify-start rounded-md bg-muted p-1 text-muted-foreground w-fit">
              <TabsTrigger
                value="preview"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              >
                Preview
              </TabsTrigger>
              <TabsTrigger
                value="code"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              >
                Code
              </TabsTrigger>
            </TabsList>
          </div>
          <div className="border rounded-md relative overflow-hidden w-full ">
            <TabsContent value="preview" className="h-[43vh] max-h-[43vh] inset-0 flex items-center justify-center data-[state=inactive]:hidden m-0">
              <ButtonComponent {...buttonProps}>{ButtonData.test}</ButtonComponent>
            </TabsContent>
            <TabsContent value="code" className="h-[43vh] max-h-[43vh] inset-0 data-[state=inactive]:hidden overflow-auto m-0 relative">
              <div className="absolute top-2 right-2 z-10">
                <CopyButton textToCopy={ButtonCode} />
              </div>
              <CodeHighlighter code={ButtonCode} customStyle={{ paddingTop: 0, paddingBottom: 8 }} />
            </TabsContent>
          </div>
        </Tabs>
      </div>

      <div className="mt-8 py-5">
        <h2 className="text-2xl font-bold mb-4">Dependencies</h2>
        <div className="flex flex-col">
          {dependencies.length > 0 && (
            <div>
              <TerminalCommands packages={dependencies} />
            </div>
          )}

          {hasCN && (
            <div className="mb-2">
              <Button asChild variant="link" className="p-0">
                <Link href="/installation/cn">This component uses cn() to merge classes</Link>
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8">
        <h2 id="examples" className="text-2xl font-bold mb-4">
          Examples
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {variations.map((variation, index) => {
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
              ? `<${buttonName} ${propsString}>${variation.props.children || ButtonData.test}</${buttonName}>`
              : `<${buttonName}>${variation.props.children || ButtonData.test}</${buttonName}>`;

            return (
              <div key={index} className="border p-4 rounded-md w-full flex flex-col">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold">{variation.label}</h3>
                </div>
                <div className="mb-4 mx-auto h-20">
                  <ButtonComponent {...buttonProps} {...variation.props}>
                    {variation.props.children || ButtonData.test}
                  </ButtonComponent>
                </div>
                <div className="flex justify-end mb-2">
                  <CopyButton textToCopy={variationCode} />
                </div>
                <div className="max-h-48 ">
                  <CodeHighlighter code={variationCode} className="text-[0.75rem] xl:text-[0.85rem]" wrapLines={false} wrapLongLines={false} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
