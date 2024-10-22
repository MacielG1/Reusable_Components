import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import Search from "./Search";

export default function Navbar() {
  return (
    <header className="border-b px-4">
      <div className="container flex justify-between items-center h-14">
        <div className="flex items-center gap-2 ml-6 md:ml-0">
          <Link href="/">
            <span className="font-semibold">Dashboard</span>
          </Link>
        </div>
        <Search />
        <ThemeSwitcher />
      </div>
    </header>
  );
}
