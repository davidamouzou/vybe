import Link from "next/link";
import Image from "next/image";
import { MagnifyingGlassIcon, ShoppingCartIcon } from "@heroicons/react/16/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export function Header() {
  return (
    <header className="px-8 py-4 flex justify-between items-center">
      <nav className="hidden md:block">
        <ul className="flex gap-4">
          <li><Link href="/">Shop</Link></li>
          <li><Link href="/">Collections</Link></li>
          <li><Link href="/">About</Link></li>
          <li><Link href="/">Contact</Link></li>
        </ul>
      </nav>
      <div className="font-bold text-xl">VYBE</div>
      <div className="flex gap-2 items-center">
        <button className="border-2 border-slate-300 rounded-full flex items-center p-2 h-10 w-10">
          <MagnifyingGlassIcon className="w-4 h-4" />
        </button>
        <div className="border-2 border-slate-300 w-fit h-10 gap-0.5 rounded-full flex items-center pl-0.5 pr-2 py-0.5">
          <Image
            className="w-8 h-8 object-cover rounded-full"
            src="/imgs/avatar.jpg"
            alt="VYBE Logo"
            width={120}
            height={60}
          />
          <ChevronDownIcon className="w-4 h-4" />
        </div>
        <div className="border-2 border-slate-300 w-fit h-10 rounded-full flex items-center p-0.5 gap-2">
          <div className="py-2 px-4 h-8 text-white rounded-full bg-red-400">
            <ShoppingCartIcon className="w-4 h-4" />
          </div>
          <div className="pr-2 hidden md:block">{0} Products</div>
        </div>
      </div>
    </header>
  );
}