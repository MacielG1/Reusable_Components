"use client";

import { useIsMobile } from "../hooks/useIsMobile";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { useState } from "react";
import { ChevronsRight, Power, TextCursorInput, ToggleLeft, Loader } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  function onOpenChange() {
    setIsOpen(!isOpen);
  }

  const sidebar = (
    <ScrollArea className="my-4 mt-12 max-h-screen w-24 min-w-24 md:w-32 md:min-w-32 lg:w-48 lg:min-w-48 xl:w-60 xl:min-w-60">
      <div className="flex flex-col items-center space-y-4">
        <Link onClick={onOpenChange} href="/buttons" className={`w-24 text-left flex flex-row items-center gap-2 dark:text-neutral-300 dark:hover:text-white text-neutral-800 hover:text-black ${pathname === "/buttons" ? "font-semibold dark:text-white text-black" : ""}`}>
          <Power className={`size-4 ${pathname === "/buttons" ? "dark:text-white text-black" : ""}`} />  
          Buttons
        </Link>
        <Link onClick={onOpenChange} href="/inputs" className={`w-24 text-left flex flex-row items-center gap-2 dark:text-neutral-300 dark:hover:text-white text-neutral-800 hover:text-black ${pathname === "/inputs" ? "font-semibold dark:text-white text-black" : ""}`}>
          <TextCursorInput className={`size-4 ${pathname === "/inputs" ? "dark:text-white text-black" : ""}`} />
          Inputs
        </Link> 
        <Link onClick={onOpenChange} href="/loaders" className={`w-24 text-left flex flex-row items-center gap-2 dark:text-neutral-300 dark:hover:text-white text-neutral-800 hover:text-black ${pathname === "/loaders" ? "font-semibold dark:text-white text-black" : ""}`}>
          <Loader className={`size-4 ${pathname === "/loaders" ? "dark:text-white text-black" : ""}`} />
          Loaders
        </Link>
        <Link onClick={onOpenChange} href="/switches" className={`w-24 text-left flex flex-row items-center gap-2 dark:text-neutral-300 dark:hover:text-white text-neutral-800 hover:text-black ${pathname === "/switches" ? "font-semibold dark:text-white text-black" : ""}`}>
          <ToggleLeft className={`size-4 ${pathname === "/switches" ? "dark:text-white text-black" : ""}`} />
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
            <button onClick={onOpenChange} className="rounded-full cursor-pointer">
              <ChevronsRight />
            </button>
          )}
        </div>
        <Sheet open={isOpen} onOpenChange={onOpenChange}>
          <SheetContent className="w-[230px] px-8" side="left">
            <SheetHeader className="px-4 pt-4">
              <SheetTitle>Components</SheetTitle>
            </SheetHeader>
            {sidebar}
          </SheetContent>
        </Sheet>
      </>
    );
  }

  return sidebar;
}
