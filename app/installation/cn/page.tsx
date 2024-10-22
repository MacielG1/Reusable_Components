import CodeHighlighter from "@/components/CodeHighlighter";
import Steps from "@/components/Steps";
import TerminalCommands from "@/components/TerminalCommands";
import { cnCode } from "@/lib/utils";
import CopyButton from "@/components/CopyButton";
import BackLink from "@/components/BackLink";

export default function cn() {
  const dependencies = ["clsx", "tailwind-merge"];

  const steps = [
    {
      title: "Install Dependencies",
      description: <TerminalCommands packages={dependencies} />,
    },
    {
      title: "Add this code in lib/utils.ts",
      description: (
        <div className="relative">
          <div className="absolute right-[-20] top-[-3] z-10">
            <CopyButton textToCopy={cnCode} />
          </div>
          <CodeHighlighter
            code={cnCode}
            className="text-[0.75rem] xl:text-[0.85rem]"
            customStyle={{ paddingRight: "5rem" }}
            wrapLines={false}
            wrapLongLines={false}
          />
        </div>
      ),
    },
  ];
  return (
    <div className="pl-2.5">
      <BackLink />
      <div className="flex flex-col gap-5 sm:p-5">
        <h2 className="mb-4 pl-2 text-2xl font-semibold">CN Installation</h2>
        <Steps steps={steps} />
      </div>
    </div>
  );
}
