import Link from "next/link";
import { inputs, buttons } from "@/lib/const";
import dynamic from "next/dynamic";

export default function Home() {
  const randomInput = inputs[Math.floor(Math.random() * inputs.length)];
  const randomButton = buttons[Math.floor(Math.random() * buttons.length)];

  const InputComponent = dynamic(() => import(`@/components/Inputs/${randomInput.filename}`)) as any;
  const ButtonComponent = dynamic(() => import(`@/components/Buttons/${randomButton.filename}`)) as any;

  return (
    <main className="scrollbar-hide flex-1 overflow-y-auto">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold">Component Showcase</h1>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Buttons Section */}
          <div className="relative h-full">
            <Link href="/buttons" className="block h-full">
              <div className="flex h-[200px] flex-col rounded-lg border p-6 transition-all hover:bg-neutral-900 hover:shadow-md">
                <h2 className="mx-auto mb-4 text-xl font-semibold">Buttons</h2>
                <div className="flex flex-1 items-center justify-center">
                  <div className="pointer-events-none">
                    <ButtonComponent>{randomButton.name}</ButtonComponent>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Inputs Section */}
          <div className="relative h-full">
            <Link href="/inputs" className="block h-full">
              <div className="flex h-[200px] flex-col rounded-lg border p-6 transition-all hover:bg-neutral-900 hover:shadow-md">
                <h2 className="mx-auto mb-4 text-xl font-semibold">Inputs</h2>
                <div className="flex flex-1 items-center justify-center">
                  <div className="pointer-events-none">
                    <InputComponent />
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
