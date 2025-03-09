import { ToggleMode } from "./ToggleMode";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-[rgba(255,255,255,0.2)] dark:bg-[rgba(0,0,0,0.2)]  backdrop-filter backdrop-blur-lg">
      <div className="mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <span className="text-3xl  text-gray-900 dark:text-white font-semibold">
            Tryout Juara
          </span>
          <div className="flex space-x-8 items-center text-gray-900 dark:text-white">
            <Link href="/dashboard" className="hover:opacity-75">
              Try Out
            </Link>
            <a href="#" className="hover:opacity-75">
              Belajar
            </a>
            <a href="#" className="hover:opacity-75">
              Beli Paket
            </a>
            <ToggleMode />
          </div>
        </div>
      </div>
    </nav>
  );
}
