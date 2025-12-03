import Link from "next/link";
import {CameraIcon, EnvelopeIcon, GlobeAltIcon, MusicalNoteIcon, PlayCircleIcon,} from "@heroicons/react/16/solid";

export function Footer() {
    return (
        <footer className="px-4 md:px-8 mt-16">
            <div
                className="bg-red-50 rounded-3xl p-6 md:p-8 shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.04)] animate-[fade-in_700ms_cubic-bezier(0.22,1,0.36,1)_both]">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand + Socials */}
                    <div className="flex flex-col gap-3">
                        <div className="text-2xl font-extrabold italic">VYBE</div>
                        <p className="text-sm text-gray-700">Streetwear made for your vibe.</p>
                        <div className="flex items-center gap-2 pt-1">
                            <Link
                                href="#"
                                aria-label="Instagram"
                                className="h-9 w-9 rounded-lg bg-white flex items-center justify-center shadow-sm border border-slate-200 hover:shadow transition-all"
                            >
                                <CameraIcon className="w-5 h-5 text-gray-700"/>
                            </Link>
                            <Link
                                href="#"
                                aria-label="YouTube"
                                className="h-9 w-9 rounded-lg bg-white flex items-center justify-center shadow-sm border border-slate-200 hover:shadow transition-all"
                            >
                                <PlayCircleIcon className="w-5 h-5 text-gray-700"/>
                            </Link>
                            <Link
                                href="#"
                                aria-label="TikTok"
                                className="h-9 w-9 rounded-lg bg-white flex items-center justify-center shadow-sm border border-slate-200 hover:shadow transition-all"
                            >
                                <MusicalNoteIcon className="w-5 h-5 text-gray-700"/>
                            </Link>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-sm font-semibold mb-3">Navigation</h3>
                        <ul className="space-y-2 text-sm text-gray-800">
                            <li><Link className="hover:text-red-500" href="/">Home</Link></li>
                            <li><Link className="hover:text-red-500" href="/">Shop</Link></li>
                            <li><Link className="hover:text-red-500" href="/">Collections</Link></li>
                            <li><Link className="hover:text-red-500" href="/">About</Link></li>
                            <li><Link className="hover:text-red-500" href="/">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Customer Support */}
                    <div>
                        <h3 className="text-sm font-semibold mb-3">Customer Support</h3>
                        <ul className="space-y-2 text-sm text-gray-800">
                            <li><Link className="hover:text-red-500" href="/">FAQs</Link></li>
                            <li><Link className="hover:text-red-500" href="/">Shipping & Returns</Link></li>
                            <li><Link className="hover:text-red-500" href="/">Size Guide</Link></li>
                            <li><Link className="hover:text-red-500" href="/">Rewards Program</Link></li>
                            <li><Link className="hover:text-red-500" href="/">Help Center</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold mb-3">Contact us</h3>
                        <ul className="space-y-2 text-sm text-gray-800">
                            <li className="flex items-center gap-2"><EnvelopeIcon className="w-4 h-4"/><a
                                className="hover:text-red-500" href="mailto:contact@vybe.com">contact@vybe.com</a></li>
                            <li className="flex items-center gap-2"><GlobeAltIcon className="w-4 h-4"/><a
                                className="hover:text-red-500" href="#">vybebrand.com</a></li>
                            <li className="flex items-center gap-2"><GlobeAltIcon className="w-4 h-4 rotate-90"/><a
                                className="hover:text-red-500" href="tel:+0000000000">+00 000-000-000</a></li>
                        </ul>
                    </div>
                </div>

                <div
                    className="mt-8 pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-600">
                    <p>© {new Date().getFullYear()} VYBE. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <Link className="hover:text-red-500" href="#">Privacy</Link>
                        <span className="text-slate-300">•</span>
                        <Link className="hover:text-red-500" href="#">Terms</Link>
                        <span className="text-slate-300">•</span>
                        <Link className="hover:text-red-500" href="#">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
