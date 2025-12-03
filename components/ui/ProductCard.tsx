import Image from "next/image";
import {HeartIcon, StarIcon} from "@heroicons/react/16/solid";

type ProductCardProps = {
    title: string;
    price: string | number;
    image: string;
    rating?: number;
    liked?: boolean;
};

export default function ProductCard({title, price, image, rating = 4.5, liked = false}: ProductCardProps) {
    return (
        <div
            className="rounded-3xl overflow-hidden bg-white shadow-lg shadow-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-200/30 group">
            <div className="relative">
                <Image className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105"
                       src={image} alt={title} width={400} height={300}/>
                <button
                    className={`absolute top-3 right-3 p-2 rounded-full bg-white/90 text-red-500 transition-transform duration-300 hover:scale-110 ${liked ? 'animate-[pulse_2000ms_ease-in-out_infinite]' : ''}`}
                    aria-label="like">
                    <HeartIcon className="w-4 h-4"/>
                </button>
            </div>
            <div className="p-4 flex items-end justify-between">
                <div>
                    <h3 className="font-semibold transition-colors duration-300 group-hover:text-red-500">{title}</h3>
                    <div className="flex items-center gap-1 text-xs text-amber-500 mt-1">
                        <StarIcon className="w-4 h-4"/>
                        <span>{rating}</span>
                    </div>
                </div>
                <div className="text-sm font-bold">${typeof price === 'number' ? price.toFixed(2) : price}</div>
            </div>
        </div>
    );
}
