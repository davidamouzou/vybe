import {customers} from "@/data/customer";
import {ArrowRightIcon, ClockIcon, StarIcon, TagIcon} from "@heroicons/react/16/solid";
import Image from "next/image";
import {Offre} from "@/app/components/offre";

const news = [
    {icon: <TagIcon className="w-6 h-6"/>, title: 'Future Threads'},
    {icon: <StarIcon className="w-6 h-6"/>, title: 'Unique Designs'},
    {icon: <ClockIcon className="w-6 h-6"/>, title: 'Limited Drops'},
]

const CallActionButton = () => {
    return (<button
        className="mt-4 pl-4 p-0.5 gap-2 bg-white text-red-500 rounded-full flex items-center w-fit">
        <div>New Drops</div>
        <div
            className="bg-red-400 flex items-center justify-center text-white rounded-full px-4 py-2">
            <ArrowRightIcon className="w-4 h-4 inline-block"/>
        </div>
    </button>)
}

const CustomerSelect = () => {
    return (
        <div className="flex gap-4 flex-col md:flex-row">
            {news.map((item, index) => (
                <div key={index} className="w-20 flex flex-col items-center">
                    <div>{item.icon}</div>
                    <div className="text-center text-sm">{item.title}</div>
                </div>
            ))}
        </div>
    )
}

const Cos = () => {
    return (
        <div className="bg-white/10 w-fit p-4 mt-4 rounded-2xl">
            {
                customers.map((src, index) => (
                    <Image
                        key={index}
                        className={`inline-block object-cover w-8 h-10 rounded-full border border-white ${index !== 0 ? '-ml-1' : ''} mb-${index + 2}`}
                        src={src ?? ''}
                        alt={`Avatar ${index + 1}`}
                        width={40}
                        height={40}
                    />
                ))
            }
            <p className="mt-2 text-xs">Rated 5 Stars by The Vybe Tribe</p>
        </div>
    )
}


export function Hero() {
    return (
        <section className="mt-8 animate-[fade-in_700ms_cubic-bezier(0.22,1,0.36,1)_both]">
            <div
                className="flex flex-row justify-center align-middle -mb-6 gap-4">
                <div className='w-1/4'></div>
                <div className="flex w-1/2">
                    <div className="text-2xl sm:text-5xl animate-[slide-up_700ms_cubic-bezier(0.22,1,0.36,1)_both]">Own the</div>
                    <div className="text-4xl sm:text-7xl font-extrabold animate-[slide-up_700ms_cubic-bezier(0.22,1,0.36,1)_both] [animation-delay:120ms]">EDGE</div>
                </div>
                <div className='w-1/2'></div>
                <div className="flex pt-8 w-1/2">
                    <div className="text-2xl sm:text-5xl animate-[slide-up_700ms_cubic-bezier(0.22,1,0.36,1)_both] [animation-delay:180ms]">Keep the</div>
                    <div className="text-4xl sm:text-7xl font-extrabold animate-[slide-up_700ms_cubic-bezier(0.22,1,0.36,1)_both] [animation-delay:260ms]">VIBE</div>
                </div>
                <div className='w-1/3'></div>
            </div>
            <div className="h-full relative overflow-hidden pt-20">
                <div
                    className="w-full top-0 left-0 right-0 pt-20  h-full z-10 absolute">
                    <div className="w-full h-full bg-red-400 rounded-3xl animate-[scale-in_700ms_cubic-bezier(0.22,1,0.36,1)_both]"></div>
                </div>
                <div className="flex left-0 w-full right-0 justify-center z-10 overflow-hidden top-0 absolute">
                    <Image
                        className="object-cover w-96 z-10 animate-[float-y_6000ms_ease-in-out_infinite] [animation-delay:400ms]"
                        src="/imgs/persona-hero.png"
                        alt="Hero Image"
                        width={600}
                        height={400}
                    />
                </div>
                <div
                    className="bg-linear-to-t from-red-400 md:from-transparent via-red-400 md:via-transparent to-transparent flex flex-col sm:flex-row w-full relative pt-40 md:pt-16 z-30 text-white  overflow-hidden rounded-3xl h-full p-8">
                    <div
                        className="md:w-1/3 flex flex-col">
                        <h1>New arrivals</h1>
                        <p className="text-3xl font-bold animate-[slide-up_800ms_cubic-bezier(0.22,1,0.36,1)_both]">Where Art meets your style</p>
                        <p className="animate-[slide-up_800ms_cubic-bezier(0.22,1,0.36,1)_both] [animation-delay:120ms]">Step into the future of streetwear today.</p>
                        <div className="animate-[slide-up_800ms_cubic-bezier(0.22,1,0.36,1)_both] [animation-delay:220ms]"><CallActionButton/></div>
                        <div className="animate-[slide-up_800ms_cubic-bezier(0.22,1,0.36,1)_both] [animation-delay:320ms]"><Cos/></div>
                    </div>
                    <div className="md:w-1/3"></div>
                    <div className="md:w-1/3 flex md:flex-col mt-8 gap-8 justify-center items-center">
                        <div className="animate-[slide-up_800ms_cubic-bezier(0.22,1,0.36,1)_both] [animation-delay:120ms]"><CustomerSelect/></div>
                        <div className="animate-[scale-in_800ms_cubic-bezier(0.22,1,0.36,1)_both] [animation-delay:240ms]"><Offre/></div>
                    </div>
                </div>
            </div>
        </section>
    );
}