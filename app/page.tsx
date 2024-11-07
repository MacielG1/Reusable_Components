import Link from "next/link";
import FollowBorderButton from "@/components/Buttons/FollowBorderButton";
import TextAreaInput from "@/components/Inputs/TextAreaInput";
import BorderAnimatedButton from "@/components/Buttons/BorderAnimatedButton";

export default function Home() {
  return (
    <main className="scrollbar-hide flex-1 overflow-y-auto">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold">Components Showcase</h1>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Buttons Section */}
          <div className="relative h-full">
            <Link href="/buttons" className="block h-full">
              <div className="flex h-[200px] flex-col rounded-lg border p-6 transition-all hover:bg-neutral-300 hover:shadow-md dark:hover:bg-neutral-900">
                <h2 className="mx-auto mb-4 text-xl font-semibold">Buttons</h2>
                <div className="flex flex-1 items-center justify-center">
                  <div className="pointer-events-none">
                    <FollowBorderButton>Border Follow</FollowBorderButton>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Inputs Section */}
          <div className="relative h-full">
            <Link href="/inputs" className="block h-full">
              <div className="flex h-[200px] flex-col rounded-lg border p-6 transition-all hover:bg-neutral-300 hover:shadow-md dark:hover:bg-neutral-900">
                <h2 className="mx-auto mb-4 text-xl font-semibold">Inputs</h2>
                <div className="flex flex-1 items-center justify-center">
                  <div className="pointer-events-none">
                    <TextAreaInput />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
