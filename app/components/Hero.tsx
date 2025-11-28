import { customers } from "@/data/customer";
import { ArrowRightIcon, ClockIcon, GiftIcon, StarIcon, TagIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { isContext } from "vm";

const news = [
    { icon: <TagIcon className="w-6 h-6" />, title: 'Future Threads' },
    { icon: <StarIcon className="w-6 h-6" />, title: 'Unique Designs' },
    { icon: <ClockIcon className="w-6 h-6" />, title: 'Limited Drops' },
]

export function Hero() {
    return (
        <section className="px-4 md:px-8 pt-4 overflow-hidden">
            <div className="flex flex-col md:flex-row md:gap-28 mb-20 md:mb-0">
                <div className="flex md:pb-12 md:w-1/2">
                    <div className="text-xl sm:text-4xl">Own the </div>
                    <div className="text-6xl sm:text-8xl font-extrabold">EDGE</div>
                </div>
                <div></div>
                <div className="md:w-1/2 flex sm:pt-10 pb-4 ml-20 md:ml-0">
                    <div className="text-xl sm:text-4xl">Keep the </div>
                    <div className="text-6xl sm:text-8xl font-extrabold">VIBE</div>
                </div>
            </div>
            <div className="bg-red-400 text-white flex flex-col md:flex-row justify-between md:px-10 px-0 pt-10 rounded-3xl h-1/3" >
                <div className="md:w-1/2 z-20 bg-linear-to-t from-red-400 via-red-400 to-transparent p-4 md:mt-0">
                    <div className="h-40" ></div>
                    <h1>New arrivals</h1>
                    <p className="text-3xl font-bold">Where Art meets your style</p>
                    <p>Step into the future of streetwear today.</p>
                    <button className="mt-4 pl-4 p-0.5 gap-2 bg-white text-red-500 rounded-full flex items-center">
                        <div>New Drops</div>
                        <div className="bg-red-400 flex items-center justify-center text-white rounded-full px-4 py-2">
                            <ArrowRightIcon className="w-4 h-4 inline-block" />
                        </div>
                    </button>
                    <div className="bg-white/10 w-fit p-4 mt-8 rounded-2xl">
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
                </div>
                <div className="md:w-full -order-1 md:order-0 md:relative">
                    <div className="relative">
                        <Image
                            className="object-cover z-10 absolute -top-32 md:-top-44"
                            src="/imgs/persona-hero.png"
                            alt="Hero Image"
                            width={600}
                            height={400}
                        />
                    </div>
                </div>
                <div className="md:w-1/2 bg-red-400 rounded-2xl z-20 flex flex-row md:flex-col items-center justify-between md:justify-center p-4 md:p-0">
                    <div className="w-1/2 md:w-full flex flex-col md:items-center justify-between md:justify-center">
                        <div className="flex flex-col md:flex-row gap-6 text-sm">
                            {news.map((item, index) => (
                                <div key={index} className="flex align-middle flex-col justify-center items-center gap-2 mb-4 md:mb-0">
                                    {item.icon}
                                    <div>{item.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex w-1/2 md:w-full flex-col  items-center">
                        <h2 className="text-center w-full mt:mt-8 mb-4">Featured Product</h2>
                        <div className="text-black bg-white p-1 rounded-3xl overflow-hidden">
                            <Image
                                className=" w-full h-40 object-cover rounded-3xl"
                                src="/imgs/side-view-woman-posing-studio.jpg"
                                alt="Brand Logo"
                                width={200}
                                height={100}
                            />
                            <div className="px-4 py-2 text-xs">
                                <h2 className="font-bold">Urban Vanguard Tee</h2>
                                <p>Unmatched comfort.</p>
                            </div>
                            <button className="mb-2 pr-4 p-0.5 gap-2 bg-red-400 text-white rounded-full flex items-center">
                                <div className="bg-white flex items-center justify-center text-red-400 rounded-full px-4 py-2">
                                    <GiftIcon className="w-4 h-4 inline-block" />
                                </div>
                                <div className="text-xs" >$26.72</div>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}