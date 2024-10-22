"use client";
import Link from "next/link";
import { Code } from "lucide-react";
import TextInput from "@/components/Inputs/TextInput";
import PasswordInput from "@/components/Inputs/PasswordInput";
import EmailInput from "@/components/Inputs/EmailInput";
import NumberInput from "@/components/Inputs/AdvancedNumberInput";
import { Button } from "@/components/ui/button";

export default function InputPage() {
  return (
    <div className="flex justify-center p-4">
      <div className="grid grid-cols-1 gap-4 py-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <div className="flex w-full flex-col space-y-1 border-neutral-800 p-10 pb-14">
          <div className="flex w-full items-center justify-between">
            <label htmlFor="text-input" className="block text-sm font-medium">
              Text Input
            </label>
            <Button variant="outline" className="z-10 flex items-center gap-1 p-1 py-1.5 dark:bg-neutral-800 dark:hover:bg-neutral-950" asChild>
              <Link href="/inputs/text-input" className="h-auto">
                <Code size={12} />
                <span className="text-xs">Source</span>
              </Link>
            </Button>
          </div>
          <TextInput id="text-input" placeholder="Text Input" className="w-full" />
        </div>
        <div className="flex w-full flex-col space-y-1 border-neutral-800 p-10 pb-14">
          <div className="flex w-full items-center justify-between">
            <label htmlFor="password-input" className="block text-sm font-medium">
              Password Input
            </label>
            <Button variant="outline" className="z-10 flex items-center gap-1 p-1 py-1.5 dark:bg-neutral-800 dark:hover:bg-neutral-950" asChild>
              <Link href="/inputs/password-input" className="h-auto">
                <Code size={12} />
                <span className="text-xs">Source</span>
              </Link>
            </Button>
          </div>
          <PasswordInput id="password-input" className="w-full" />
        </div>

        <div className="flex w-full flex-col space-y-1 border-neutral-800 p-10 pb-14">
          <div className="flex w-full items-center justify-between">
            <label htmlFor="email-input" className="block text-sm font-medium">
              Email Input
            </label>
            <Button variant="outline" className="z-10 flex items-center gap-1 p-1 py-1.5 dark:bg-neutral-800 dark:hover:bg-neutral-950" asChild>
              <Link href="/inputs/email-input" className="h-auto">
                <Code size={12} />
                <span className="text-xs">Source</span>
              </Link>
            </Button>
          </div>
          <EmailInput id="email-input" className="w-full" />
        </div>
        <div className="flex w-full flex-col space-y-1 border-neutral-800 p-10 pb-14">
          <div className="flex w-full items-center justify-between">
            <label htmlFor="number-input" className="block text-sm font-medium">
              Improved Number Input
            </label>
            <Button variant="outline" className="z-10 flex items-center gap-1 p-1 py-1.5 dark:bg-neutral-800 dark:hover:bg-neutral-950" asChild>
              <Link href="/inputs/number-input" className="h-auto">
                <Code size={12} />
                <span className="text-xs">Source</span>
              </Link>
            </Button>
          </div>
          <NumberInput className="w-full" />
        </div>
      </div>
    </div>
  );
}
