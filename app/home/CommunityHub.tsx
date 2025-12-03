import Image from "next/image";
import Button from "@/components/ui/Button";
import {ClockIcon, GiftIcon} from "@heroicons/react/24/outline";

export function CommunityHub() {
    return <div className="mt-16 animate-[fade-in_700ms_cubic-bezier(0.22,1,0.36,1)_both]">
        <h1 className="font-bold text-xl text-center animate-[slide-up_600ms_cubic-bezier(0.22,1,0.36,1)_both]">Community
            Hub</h1>
        <p className="text-center animate-[slide-up_600ms_cubic-bezier(0.22,1,0.36,1)_both] [animation-delay:80ms]">Join
            the tribe, Express your vibe</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
            <div
                className="h-fit rounded-3xl overflow-hidden bg-white shadow-lg shadow-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-200/30 hover:scale-[1.02] animate-[slide-up_800ms_cubic-bezier(0.22,1,0.36,1)_both] group">
                <Image className="w-full rounded-3xl transition-transform duration-700 group-hover:scale-105"
                       src="/imgs/c85q5uc85q5uc85q.png" alt="" width={200}
                       height={200}/>
                <div className="p-4">
                    <h2 className="font-bold transition-colors duration-300 group-hover:text-red-500">• Be Part of the
                        Inner Circle</h2>
                    <p className="transition-colors duration-300 group-hover:text-gray-700">Get exclusive drops,
                        member-only deals & fresh
                        VYBE content - straight to your inbox.</p>
                    <form>
                        <input type="email" placeholder="Enter your email"
                               className="w-full mt-4 px-4 py-2 rounded-xl bg-gray-100"/>
                        <label form={"access-limit"}
                               className="mt-4 flex items-center gap-2 cursor-pointer transition-colors duration-300 hover:text-red-500">
                            <input id="access-limit" type="checkbox"/>
                            I want early access to limited collections
                        </label>
                        <label form={"access-limit"}
                               className="mt-4 flex items-center gap-2 cursor-pointer transition-colors duration-300 hover:text-red-500">
                            <input id="access-limit" type="checkbox"/>
                            I want to be a VYBE tester
                        </label>
                        <div
                            className={"flex flex-col gap-2 items-center mt-4"}>
                            <Button>Join Newsletter</Button>
                            <p className={"text-sm"}>No spam. Just pure street flavor.</p>
                        </div>
                    </form>
                </div>
            </div>
            <div
                className="h-fit rounded-3xl overflow-hidden bg-white shadow-lg shadow-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-200/30 hover:scale-[1.02] animate-[slide-up_800ms_cubic-bezier(0.22,1,0.36,1)_both] [animation-delay:120ms] group">
                <div className="p-4">
                    <div className="flex items-center gap-4 mb-4">
                        <Image
                            className="w-8 h-12 rounded-3xl object-cover transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                            src="/imgs/trendy-young-woman-with-long-loose-hair-posing-isolated.jpg" alt=""
                            width={200} height={200}/>
                        <div>
                            <h2 className="font-bold transition-colors duration-300 group-hover:text-red-500">Elena
                                Jackson</h2>
                            <p className="transition-colors duration-300 group-hover:text-gray-700">OG Member</p>
                        </div>
                    </div>
                    <p className="transition-colors duration-300 group-hover:text-gray-700">Wearing VYBE makes me feel
                        like I own the streets.
                        #VybeTribe</p>
                </div>
                <Image className="w-full rounded-3xl transition-transform duration-700 group-hover:scale-105"
                       src="/imgs/hvwkrjhvwkrjhvwk.png" alt="" width={200}
                       height={200}/>
            </div>
            <div
                className="h-fit rounded-3xl overflow-hidden bg-white shadow-lg shadow-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-200/30 hover:scale-[1.02] animate-[slide-up_800ms_cubic-bezier(0.22,1,0.36,1)_both] [animation-delay:240ms] group">
                <p className={"p-4 text-center"}>🔥 Upcoming Challenge</p>
                <Image className="w-full rounded-3xl transition-transform duration-700 group-hover:scale-105"
                       src="/imgs/ecqcc2ecqcc2ecqc.png" alt="" width={200}
                       height={200}/>
                <div className="p-4">
                    <h2 className="font-bold transition-colors duration-300 group-hover:text-red-500">• Be Part of the
                        Inner Circle</h2>
                    <p className="transition-colors duration-300 group-hover:text-gray-700">Get exclusive drops,
                        member-only deals & fresh
                        VYBE content - straight to your inbox.</p>
                    <div className={"flex flex-col gap-2 items-center mt-4"}>
                        <div className={"w-full space-y-4 p-4"}>
                            <div className={"flex text-sm justify-between items-center"}>
                                <div className={"flex gap-2 items-center"}>
                                    <ClockIcon className={"size-5 text-red-500"}/>
                                    Deadline
                                </div>
                                <div>July 15</div>
                            </div>
                            <div className={"flex text-sm justify-between items-center"}>
                                <div className={"flex gap-2 items-center"}>
                                    <GiftIcon className={"size-5 text-red-500"}/>
                                    Rewards
                                </div>
                                <div>Exclusive discount code</div>
                            </div>
                        </div>
                        <Button>Join Newsletter</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}