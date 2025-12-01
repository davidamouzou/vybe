import {GiftIcon} from "@heroicons/react/16/solid";
import Image from "next/image";

export function Offre() {
    return <div className="md:w-full flex flex-col items-center animate-[fade-in_700ms_cubic-bezier(0.22,1,0.36,1)_both]">
        <h2 className="w-full text-center mb-2">Featured Product</h2>
        <div className="text-black bg-white w-fit p-1 rounded-3xl flex flex-col items-center transition-transform duration-500 hover:-translate-y-1 animate-[scale-in_800ms_cubic-bezier(0.22,1,0.36,1)_both]">
            <Image
                className="w-40 h-30 object-cover rounded-3xl transition-transform duration-500 hover:scale-[1.03]"
                src="/imgs/fepvd9fepvd9fepv.png"
                alt="Brand Logo"
                width={200}
                height={100}
            />
            <div className="px-4 py-2 text-xs">
                <h2 className="font-bold">Urban Vanguard Tee</h2>
                <p>Unmatched comfort.</p>
            </div>
            <button className="pr-4 p-0.5 gap-2 bg-red-400 text-white rounded-full flex items-center transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]">
                <div className="bg-white flex items-center justify-center text-red-400 rounded-full px-4 py-2">
                    <GiftIcon className="w-4 h-4 inline-block"/>
                </div>
                <div className="text-xs">$26.72</div>
            </button>
        </div>
    </div>
}