import getComponentCode from "@/lib/getComponentCode";
import CopyButton from "./CopyButton";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";
import { CodeXml } from "lucide-react";

type Props = {
  children?: React.ReactNode;
  source: string;
  componentName: string;
  className?: string;
  href: string;
  name?: string;
};

export default async function ShowComponent({ source, componentName, className, children, href, name }: Props) {
  const Component = (await import(`@/components/${source}/${componentName}`)).default;
  const src = (await getComponentCode({ source, componentName })) || "";

  return (
    <div className={cn("group/item relative", className)}>
      {name && <div className="font-semibold text-neutral-500 dark:text-neutral-300">{name}</div>}
      <div className="flex min-h-16 items-center justify-center">
        <Component>{children}</Component>
      </div>
      <div className="mt-4 flex justify-center gap-1">
        <Link href={href} tabIndex={-1}>
          <Button
            variant="ghost"
            className="h-auto cursor-pointer p-1.5 py-1.5 text-sm focus-within:ring-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800"
          >
            <CodeXml className="mr-2 size-4" />
            Source
          </Button>
        </Link>
        <CopyButton
          codyToCopy={src}
          className="h-auto w-auto min-w-[5.5rem] cursor-pointer p-1.5 py-1.5 text-sm focus-within:ring-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800"
        />
      </div>
    </div>
  );
}
