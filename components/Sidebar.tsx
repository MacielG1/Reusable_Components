"use client";

import { useIsMobile } from "../hooks/useIsMobile";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Sheet, SheetContent } from "./ui/sheet";
import { useState } from "react";
import { ChevronsRight, Power, TextCursorInput, ToggleLeft } from "lucide-react";

export default function Sidebar() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  function onOpenChange() {
    setIsOpen(!isOpen);
  }

  const sidebar = (
    <ScrollArea className="my-4 mt-12 max-h-screen w-24 min-w-24 md:w-32 md:min-w-32 lg:w-48 lg:min-w-48 xl:w-60 xl:min-w-60">
      <div className="flex flex-col items-center space-y-4">
        <Link href="/buttons" className="w-24 text-left flex flex-row items-center gap-2 dark:text-neutral-300 dark:hover:text-white text-neutral-800 hover:text-black">
          <Power className="size-4" />  
          Buttons
        </Link>
        <Link href="/inputs" className="w-24 text-left flex flex-row items-center gap-2 dark:text-neutral-300 dark:hover:text-white text-neutral-800 hover:text-black">
        <TextCursorInput className="size-4 " />
          Inputs
        </Link> 
        <Link href="/switches" className="w-24 text-left flex flex-row items-center gap-2 dark:text-neutral-300 dark:hover:text-white text-neutral-800 hover:text-black">
        <ToggleLeft className="size-4" />
          Switches
        </Link>
      </div>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );

  if (isMobile) {
    return (
      <>
        <div className="fixed left-0 top-2 p-2">
          {!isOpen && (
            <button onClick={onOpenChange} className="rounded-full">
              <ChevronsRight />
            </button>
          )}
        </div>
        <Sheet open={isOpen} onOpenChange={onOpenChange}>
          <SheetContent className="w-[230px] p-0" side="left">
            {sidebar}
          </SheetContent>
        </Sheet>
      </>
    );
  }

  return sidebar;
}
