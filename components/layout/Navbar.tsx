"use client";

import Link from "next/link";
import Image from "next/image";
import {Bars3Icon, ChevronDownIcon, MagnifyingGlassIcon, ShoppingCartIcon, XMarkIcon} from "@heroicons/react/16/solid";
import user from "@/data/user";
import {useState} from "react";

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <header
                className="px-4 md:px-8 w-full py-4 flex justify-between bg-red-50 items-center sticky top-0 z-50 shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.04)] animate-[slide-down_600ms_cubic-bezier(0.22,1,0.36,1)_both]">
                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden border-2 border-slate-300 rounded-full justify-center flex items-center p-2 h-10 w-10 transition-all duration-300 hover:bg-white hover:shadow-md hover:border-red-300"
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <XMarkIcon className="w-5 h-5 transition-transform duration-300"/>
                    ) : (
                        <Bars3Icon className="w-5 h-5 transition-transform duration-300"/>
                    )}
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex gap-4">
                        <li className="transition-all duration-300 hover:scale-105 hover:text-red-500"><Link
                            href="/">Shop</Link></li>
                        <li className="transition-all duration-300 hover:scale-105 hover:text-red-500"><Link
                            href="/">Collections</Link></li>
                        <li className="transition-all duration-300 hover:scale-105 hover:text-red-500"><Link
                            href="/">About</Link></li>
                        <li className="transition-all duration-300 hover:scale-105 hover:text-red-500"><Link
                            href="/">Contact</Link></li>
                    </ul>
                </nav>

                {/* Logo */}
                <div
                    className="font-bold text-xl italic transition-all duration-300 hover:scale-[1.03] animate-[glow_3000ms_ease-in-out_infinite] md:absolute md:left-1/2 md:-translate-x-1/2">VYBE
                </div>

                {/* Right Side Actions */}
                <div className="flex gap-2 items-center">
                    <button
                        className="border-2 border-slate-300 rounded-full justify-center flex items-center p-2 h-10 w-10 transition-all duration-300 hover:bg-white hover:shadow-md hover:border-red-300 hover:animate-[pulse_1000ms_ease-in-out]">
                        <MagnifyingGlassIcon className="w-4 h-4 transition-transform duration-300 hover:rotate-12"/>
                    </button>
                    <div
                        className="hidden sm:flex border-2 border-slate-300 w-fit h-10 gap-0.5 rounded-full items-center pl-0.5 pr-2 py-0.5 transition-all duration-300 hover:shadow-md hover:border-red-300">
                        <Image
                            className="w-8 h-8 object-cover rounded-full transition-transform duration-300 hover:scale-110"
                            src={user.avatar}
                            alt="VYBE Logo"
                            width={120}
                            height={60}
                        />
                        <ChevronDownIcon className="w-4 h-4 transition-transform duration-300 hover:rotate-180"/>
                    </div>
                    <div
                        className="border-2 border-slate-300 w-fit h-10 rounded-full flex items-center p-0.5 gap-2 transition-all duration-300 hover:shadow-md hover:border-red-300">
                        <div
                            className="py-2 px-4 h-8 text-white rounded-full bg-red-400 animate-[pulse-glow_2000ms_ease-in-out_infinite] transition-transform duration-300 hover:scale-110">
                            <ShoppingCartIcon className="w-4 h-4"/>
                        </div>
                        <div className="pr-2 hidden md:block">{0} Products</div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden animate-[fade-in_300ms_ease-out_both]"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Navigation Menu */}
            <nav
                className={`fixed top-[72px] left-0 right-0 bg-red-50 z-40 md:hidden transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                        ? "translate-y-0 opacity-100 visible"
                        : "-translate-y-4 opacity-0 invisible"
                }`}
            >
                <ul className="flex flex-col p-4 gap-2 shadow-lg">
                    <li className="transition-all duration-300 hover:bg-white hover:text-red-500 rounded-lg">
                        <Link href="" className="block py-3 px-4"
                              onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
                    </li>
                    <li className="transition-all duration-300 hover:bg-white hover:text-red-500 rounded-lg">
                        <Link href="" className="block py-3 px-4"
                              onClick={() => setIsMobileMenuOpen(false)}>Collections</Link>
                    </li>
                    <li className="transition-all duration-300 hover:bg-white hover:text-red-500 rounded-lg">
                        <Link href="" className="block py-3 px-4"
                              onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                    </li>
                    <li className="transition-all duration-300 hover:bg-white hover:text-red-500 rounded-lg">
                        <Link href="" className="block py-3 px-4"
                              onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                    </li>
                    {/* Mobile User Profile */}
                    <li className="mt-2 pt-2 border-t border-slate-200">
                        <div
                            className="flex items-center gap-3 py-3 px-4 transition-all duration-300 hover:bg-white rounded-lg">
                            <Image
                                className="w-10 h-10 object-cover rounded-full"
                                src={user.avatar}
                                alt="User Avatar"
                                width={120}
                                height={60}
                            />
                            <div className="flex-1">
                                <p className="font-semibold text-sm">My Account</p>
                                <p className="text-xs text-gray-600">View profile</p>
                            </div>
                            <ChevronDownIcon className="w-4 h-4"/>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    );
}