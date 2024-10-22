"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Command, CommandDialog, CommandInput, CommandList, CommandItem, CommandEmpty, CommandGroup } from "@/components/ui/command";
import { Input } from "./ui/input";
import { buttons } from "@/lib/const";

const componentsList = [
  {
    id: "buttons",
    title: "Buttons",
    path: "/buttons",
  },
  ...Object.entries(buttons).map(([key, value]) => ({
    id: key,
    title: value.test,
    path: `/buttons/${key}`,
  })),
];

export default function Search() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false); // State to manage dialog open/close
  const router = useRouter();

  const filteredResults = componentsList.filter((component) => component.title.toLowerCase().includes(query.toLowerCase()));

  function handleSelect(path: string) {
    router.push(path);
    setIsOpen(false);
  }

  function handleClose() {
    // clear the search input
    setQuery("");
    setIsOpen(false);
  }

  return (
    <>
      <Input
        type="search"
        placeholder="Search Components...."
        className="w-40 lg:w-72"
        onFocus={() => setIsOpen(true)}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <CommandDialog
        open={isOpen}
        onOpenChange={(open) => {
          if (!open) handleClose();
          else setIsOpen(true);
        }}
      >
        <CommandInput value={query} onValueChange={(value) => setQuery(value)} placeholder="Search Components..." />
        <CommandList>
          {filteredResults.length === 0 && <CommandEmpty>No results found.</CommandEmpty>}
          {filteredResults.map((result) => (
            <CommandItem key={result.id} onSelect={() => handleSelect(result.path)} className="cursor-pointer">
              <span className="pl-2">{result.title}</span>
            </CommandItem>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
