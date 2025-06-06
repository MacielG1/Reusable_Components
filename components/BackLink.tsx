"use client";
import { usePathname, useRouter } from "next/navigation";
import { ChevronsLeft } from "lucide-react";

export default function BackLink() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  const previousPath = pathSegments.length > 1 ? `/${pathSegments.slice(0, -1).join("/")}` : "/";
  const router = useRouter();

  function handleBack() {
    if (pathSegments.includes("installation")) {
      router.back();
    } else {
      router.push(previousPath);
    }
  }

  return (
    <button className="mt-2 inline-flex cursor-pointer flex-nowrap items-center gap-0.5" onClick={handleBack}>
      <ChevronsLeft className="size-6 shrink-0" />
      <span className="mb-0.5 text-base">Back</span>
    </button>
  );
}
