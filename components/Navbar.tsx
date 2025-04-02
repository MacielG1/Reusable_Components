import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import Search from "./Search";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="border-b px-4">
      <div className="container flex h-14 items-center justify-between">
        <div className="sm:ml-6 flex items-center gap-2 md:ml-0">
          
          <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" width={32} height={32} />
            <span className="font-semibold">Reusable Components</span>
          </Link>
        </div>
        <Search />
        <ThemeSwitcher />
      </div>
    </header>
  );
}
