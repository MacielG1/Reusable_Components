"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Command, CommandDialog, CommandInput, CommandList, CommandItem, CommandEmpty, CommandGroup } from "@/components/ui/command";
import { Input } from "./ui/input";
import { buttons, inputs, switches, loaders } from "@/lib/const";
import { DialogTitle } from "./ui/dialog";

const componentsList = [
  {
    id: "buttons",
    title: "Buttons",
    path: "/buttons",
  },
  ...Object.entries(buttons).map(([key, value]) => ({
    id: key,
    title: value.name,
    path: `${value.link}`,
  })),
  {
    id: "inputs",
    title: "Inputs",
    path: "/inputs",
  },
  ...Object.entries(inputs).map(([key, value]) => ({
    id: key,
    title: value.name,
    path: `${value.link}`,
  })),
  {
    id: "switches",
    title: "Switches",
    path: "/switches",
  },
  ...Object.entries(switches).map(([key, value]) => ({
    id: key,
    title: value.name,
    path: `${value.link}`,
  })),
  {
    id: "loaders",
    title: "Loaders",
    path: "/loaders",
  },
  ...Object.entries(loaders).map(([key, value]) => ({
    id: key,
    title: value.name,
    path: `${value.link}`,
  })),
];

export default function Search() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const filteredResults = componentsList.filter((component) => component?.title?.toLowerCase().includes(query.trim().toLowerCase()));

  function handleSelect(path: string) {
    router.push(path);
    setQuery("");
    setIsOpen(false);
  }

  function handleClose() {
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
        <DialogTitle />
        <CommandInput value={query} onValueChange={(value) => setQuery(value)} placeholder="Search Components..." />
        <CommandList>
          {filteredResults.length === 0 && <CommandEmpty>No results found.</CommandEmpty>}
          {filteredResults.map((result) => (
            <CommandItem key={result.id + result.title} onSelect={() => handleSelect(result.path)} className="cursor-pointer">
              <span className="pl-2">{result.title}</span>
            </CommandItem>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
