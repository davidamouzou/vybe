import {GiftIcon} from "@heroicons/react/16/solid";
import Image from "next/image";

export function Offre() {
    return <div className="md:w-full flex flex-col items-center">
        <h2 className="w-full text-center mb-2">Featured Product</h2>
        <div className="text-black bg-white w-fit p-1 rounded-3xl flex flex-col items-center">
            <Image
                className="w-40 h-30 object-cover rounded-3xl"
                src="/imgs/side-view-woman-posing-studio.jpg"
                alt="Brand Logo"
                width={200}
                height={100}
            />
            <div className="px-4 py-2 text-xs">
                <h2 className="font-bold">Urban Vanguard Tee</h2>
                <p>Unmatched comfort.</p>
            </div>
            <button className="pr-4 p-0.5 gap-2 bg-red-400 text-white rounded-full flex items-center">
                <div className="bg-white flex items-center justify-center text-red-400 rounded-full px-4 py-2">
                    <GiftIcon className="w-4 h-4 inline-block"/>
                </div>
                <div className="text-xs">$26.72</div>
            </button>
        </div>
    </div>
}