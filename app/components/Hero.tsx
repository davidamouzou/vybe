import { ArrowRightIcon, ClockIcon, GiftIcon, StarIcon, TagIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

export function Hero() {
    return (
        <section className="px-8 pt-4 overflow-hidden">
            <div className="flex flex-col md:flex-row md:gap-28">
                <div className="flex md:pb-12 md:w-1/2">
                    <div className="text-xl sm:text-4xl">Own the </div>
                    <div className="text-6xl sm:text-7xl font-extrabold">EDGE</div>
                </div>
                <div className="md:w-1/2 flex sm:pt-10 pb-4 ml-20 md:ml-0">
                    <div className="text-xl sm:text-4xl">Keep the </div>
                    <div className="text-6xl sm:text-7xl font-extrabold">VIBE</div>
                </div>
            </div>
            <div className="bg-red-400 text-white flex flex-col md:flex-row justify-between px-10 pt-10 rounded-3xl h-1/3" >
                <div className="md:w-1/3">
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
                            ['/imgs/avatar.jpg', '/imgs/avatar.jpg', '/imgs/avatar.jpg', '/imgs/avatar.jpg'].map((src, index) => (
                                <Image
                                    key={index}
                                    className={`inline-block object-cover w-8 h-10 rounded-full border border-white ${index !== 0 ? '-ml-1' : ''} mb-${index+2}`}
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
                <div className="md:w-full order-3 md:order-0 md:relative">
                    <Image
                        className="object-cover md:absolute md:-top-44"
                        src="/imgs/persona-hero.png"
                        alt="Hero Image"
                        width={600}
                        height={400}
                    />
                </div>
                <div className="md:w-1/3 h-full flex flex-col justify-center items-center pb-10">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex gap-6 text-sm">
                            <div className="w-1/3 pt-8 flex flex-col justify-center items-center">
                                <TagIcon className="w-6 h-6" />
                                <div>Future</div>
                                <div>Threads</div>
                            </div>
                            <div className="w-1/3 flex flex-col justify-center items-center">
                                <StarIcon className="w-6 h-6" />
                                <div>Unique</div>
                                <div>Designs</div>
                            </div>
                            <div className="w-1/3 pt-8 flex flex-col justify-center items-center">
                                <ClockIcon className="w-6 h-6" />
                                <div>Limited</div>
                                <div>Drops</div>
                            </div>
                        </div>
                        <h2 className="text-center w-full mt-8 mb-4">Featured Product</h2>
                    </div>

                    <div className="flex flex-col w-full md:w-40 items-center text-black bg-white p-1 rounded-3xl overflow-hidden">
                        <Image
                            className=" w-full h-40 object-cover rounded-3xl"
                            src="/imgs/avatar.jpg"
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
        </section>
    );
}