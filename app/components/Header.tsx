import Link from "next/link";
import Image from "next/image";
import {ChevronDownIcon, MagnifyingGlassIcon, ShoppingCartIcon} from "@heroicons/react/16/solid";
import user from "@/data/user";

export function Header() {
    return (
        <header
            className="w-full py-4 flex justify-between bg-red-50 items-center sticky top-0 z-50 shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.04)] animate-[slide-down_600ms_cubic-bezier(0.22,1,0.36,1)_both]">
            <nav className="hidden md:block">
                <ul className="flex gap-4">
                    <li className="transition-transform duration-300 hover:scale-105"><Link href="/">Shop</Link></li>
                    <li className="transition-transform duration-300 hover:scale-105"><Link href="/">Collections</Link></li>
                    <li className="transition-transform duration-300 hover:scale-105"><Link href="/">About</Link></li>
                    <li className="transition-transform duration-300 hover:scale-105"><Link href="/">Contact</Link></li>
                </ul>
            </nav>
            <div className="font-bold text-xl italic transition-transform duration-300 hover:scale-[1.03]">VYBE</div>
            <div className="flex gap-2 items-center">
                <button
                    className="border-2 border-slate-300 rounded-full justify-center flex items-center p-2 h-10 w-10 transition-all duration-300 hover:bg-white hover:shadow">
                    <MagnifyingGlassIcon className="w-4 h-4"/>
                </button>
                <div
                    className="border-2 border-slate-300 w-fit h-10 gap-0.5 rounded-full flex items-center pl-0.5 pr-2 py-0.5 transition-all duration-300 hover:shadow">
                    <Image
                        className="w-8 h-8 object-cover rounded-full"
                        src={user.avatar}
                        alt="VYBE Logo"
                        width={120}
                        height={60}
                    />
                    <ChevronDownIcon className="w-4 h-4"/>
                </div>
                <div className="border-2 border-slate-300 w-fit h-10 rounded-full flex items-center p-0.5 gap-2 transition-all duration-300 hover:shadow">
                    <div className="py-2 px-4 h-8 text-white rounded-full bg-red-400">
                        <ShoppingCartIcon className="w-4 h-4"/>
                    </div>
                    <div className="pr-2 hidden md:block">{0} Products</div>
                </div>
            </div>
        </header>
    );
}