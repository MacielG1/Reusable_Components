"use client";

import { useIsMobile } from "../hooks/useIsMobile";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { usePathname } from "next/navigation";

export default function RightSidebar() {
  const isMobile = useIsMobile();
  const pathname = usePathname();

  const isSubComponent = pathname.split("/").length > 2;

  const sidebar = (
    <ScrollArea className="my-4 lg:w-60 lg:min-w-60 w-32 min-w-32 md:w-48 md:min-w-48 max-h-screen ">
      {isSubComponent && (
        <>
          <div className="space-y-4 flex flex-col items-center">{/* <Link href="#examples">Examples</Link> */}</div>
          <ScrollBar orientation="vertical" />
        </>
      )}
    </ScrollArea>
  );

  if (isMobile) return null;

  return sidebar;
}
