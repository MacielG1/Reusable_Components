// import Link from "next/link";
// import FollowBorderButton from "@/components/Buttons/FollowBorderButton";
// import TextAreaInput from "@/components/Inputs/TextAreaInput";
// import BorderAnimatedButton from "@/components/Buttons/BorderAnimatedButton";
// import ThemeSwitch from "@/components/Switches/ThemeSwitch";

import { redirect } from "next/navigation";

export default function Home() {
  return redirect("/buttons");

  // return (
  // <main className="scrollbar-hide flex-1 overflow-y-auto">
  //   <div className="mx-auto max-w-5xl px-4 py-8">
  //     <h1 className="mb-8 text-3xl font-bold">Components Showcase</h1>

  //     <div className="grid gap-8 md:grid-cols-2">
  //       {/* Buttons Section */}
  //       <div className="relative h-full">
  //         <Link href="/buttons" className="group block h-full">
  //           <div className="flex h-[200px] flex-col rounded-lg border p-6 transition-all hover:bg-neutral-100/80 hover:shadow-lg dark:hover:bg-neutral-800/80">
  //             <h2 className="mx-auto mb-4 text-xl font-semibold">Buttons</h2>
  //             <div className="flex flex-1 items-center justify-center">
  //               <div className="pointer-events-none opacity-70 transition-opacity select-none group-hover:opacity-50">
  //                 <FollowBorderButton>Border Follow</FollowBorderButton>
  //               </div>
  //             </div>
  //           </div>
  //         </Link>
  //       </div>

  //       {/* Inputs Section */}
  //       <div className="relative h-full">
  //         <Link href="/inputs" className="group block h-full">
  //           <div className="flex h-[200px] flex-col rounded-lg border p-6 transition-all hover:bg-neutral-100/80 hover:shadow-lg dark:hover:bg-neutral-800/80">
  //             <h2 className="mx-auto mb-4 text-xl font-semibold">Inputs</h2>
  //             <div className="flex flex-1 items-center justify-center">
  //               <div className="pointer-events-none opacity-70 transition-opacity select-none group-hover:opacity-50">
  //                 <TextAreaInput />
  //               </div>
  //             </div>
  //           </div>
  //         </Link>
  //       </div>

  //       {/* Switches Section */}
  //       <div className="relative h-full">
  //         <Link href="/switches" className="group block h-full">
  //           <div className="flex h-[200px] flex-col rounded-lg border p-6 transition-all hover:bg-neutral-100/80 hover:shadow-lg dark:hover:bg-neutral-800/80">
  //             <h2 className="mx-auto mb-4 text-xl font-semibold">Switches</h2>
  //             <div className="flex flex-1 items-center justify-center">
  //               <div className="pointer-events-none opacity-70 transition-opacity select-none group-hover:opacity-50">
  //                 <ThemeSwitch theme="dark" />
  //               </div>
  //             </div>
  //           </div>
  //         </Link>
  //       </div>
  //     </div>
  //   </div>
  // </main>
  // );
}
