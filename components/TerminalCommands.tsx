"use client";

import { useState, useEffect, useCallback } from "react";
import { Check, ChevronDown, Copy, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { packageManagers, type PackageManager } from "@/lib/const";

export default function TerminalCommands({ packages, className, inline = true }: { packages: string[]; className?: string; inline?: boolean }) {
  const [selectedManager, setSelectedManager] = useState<PackageManager | null>(null);
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedManager = localStorage.getItem("selectedPackageManager");
    if (savedManager) {
      const foundManager = packageManagers.find((manager) => manager.name === savedManager);
      if (foundManager) {
        setSelectedManager(foundManager);
      }
    } else {
      setSelectedManager(packageManagers[0]);
    }
    setIsLoading(false);
  }, []);

  const handleManagerSelect = (manager: PackageManager) => {
    setSelectedManager(manager);
    localStorage.setItem("selectedPackageManager", manager.name);
  };

  const getFullCommand = useCallback(() => {
    if (!selectedManager) return "";
    return `${selectedManager.command} ${packages.join(" ")}`;
  }, [packages, selectedManager]);

  const copyToClipboard = useCallback(async () => {
    if (!selectedManager) return;
    await navigator.clipboard.writeText(getFullCommand());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [getFullCommand, selectedManager]);

  if (isLoading) {
    return <div className="h-[92px]" />;
  }

  return (
    <div className={`flex ${inline ? "flex-row items-center" : "flex-col items-center"} space-y-4 w-full max-w-fit ${className}`}>
      <div className={`flex ${inline ? "w-auto" : "w-full"} justify-between gap-2 items-center`}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-32 grow cursor-pointer">
              <Terminal className="mr-2 h-4 w-4" />
              {selectedManager?.name}
              <ChevronDown className="ml-auto h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {packageManagers.map((manager) => (
              <DropdownMenuItem key={manager.name} onClick={() => handleManagerSelect(manager)} className="cursor-pointer">
                {manager.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {inline && (
          <div className="bg-neutral-300 dark:bg-neutral-700 text-black dark:text-white px-4 py-2 rounded-md font-mono text-sm overflow-x-auto">
            <code>{getFullCommand()}</code>
          </div>
        )}

        <Button size="icon" variant="outline" onClick={copyToClipboard} className="cursor-pointer">
          {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          <span className="sr-only">{copied ? "Copied" : "Copy installation command"}</span>
        </Button>
      </div>

      {!inline && (
        <div className="w-full bg-neutral-300 dark:bg-neutral-700 text-black dark:text-white px-4 py-2 rounded-md font-mono text-sm overflow-x-auto">
          <code>{getFullCommand()}</code>
        </div>
      )}
    </div>
  );
}
