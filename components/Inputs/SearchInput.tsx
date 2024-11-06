"use client";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useState } from "react";

export type SearchInputProps = {
  className?: string;
  onSearch?: (value: string) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function SearchInput({ className, onSearch, ...props }: SearchInputProps) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch?.(value);
  }

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
      <input
        type="search"
        value={searchTerm}
        onChange={handleChange}
        className={cn(
          "w-full rounded-md border py-2 pl-10 pr-3",
          "bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100",
          "border-gray-300 dark:border-gray-600",
          "placeholder-gray-400 dark:placeholder-gray-500",
          "focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500",
          "dark:focus:border-sky-400 dark:focus:ring-sky-400",
          className,
        )}
        placeholder="Search..."
        {...props}
      />
    </div>
  );
}
