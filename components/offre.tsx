import {GiftIcon} from "@heroicons/react/16/solid";
import Image from "next/image";

export function Offre() {
    return <div className="md:w-full flex flex-col items-center animate-[fade-in_700ms_cubic-bezier(0.22,1,0.36,1)_both]">
        <h2 className="w-full text-center mb-2 relative">
            <span className="relative inline-block">
                Featured Product
                <span className="absolute -top-1 -right-6 w-4 h-4 bg-red-400 rounded-full animate-[pulse_2000ms_ease-in-out_infinite]"></span>
            </span>
        </h2>
        <div className="text-black bg-white w-fit p-1 rounded-3xl flex flex-col items-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-300/40 hover:rotate-1 animate-[scale-in_800ms_cubic-bezier(0.22,1,0.36,1)_both] group relative overflow-hidden">
            <div className="absolute inset-0 shimmer-bg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <Image
                className="w-40 h-30 object-cover rounded-3xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                src="/imgs/fepvd9fepvd9fepv.png"
                alt="Brand Logo"
                width={200}
                height={100}
            />
            <div className="px-4 py-2 text-xs relative z-10">
                <h2 className="font-bold transition-colors duration-300 group-hover:text-red-500">Urban Vanguard Tee</h2>
                <p className="transition-colors duration-300 group-hover:text-gray-700">Unmatched comfort.</p>
            </div>
            <button className="pr-4 p-0.5 gap-2 bg-red-400 text-white rounded-full flex items-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-400/50 active:scale-95 animate-[pulse-glow_3000ms_ease-in-out_infinite] relative z-10">
                <div className="bg-white flex items-center justify-center text-red-400 rounded-full px-4 py-2 transition-transform duration-300 hover:rotate-12">
                    <GiftIcon className="w-4 h-4 inline-block animate-[bounce_2000ms_ease-in-out_infinite]"/>
                </div>
                <div className="text-xs font-bold">$26.72</div>
            </button>
        </div>
    </div>
}