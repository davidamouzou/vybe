import Image from "next/image";

export function CommunityHub() {
    return <div className="mt-16 animate-[fade-in_700ms_cubic-bezier(0.22,1,0.36,1)_both]">
        <h1 className="font-bold text-xl text-center">Community Hub</h1>
        <p className="text-center">Join the tribe, Express your vibe</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <div className="w-full h-fit md:w-1/3 rounded-3xl overflow-hidden bg-white shadow-lg shadow-white/10 transition-transform duration-500 hover:-translate-y-1 animate-[slide-up_800ms_cubic-bezier(0.22,1,0.36,1)_both]">
                <Image className="w-full rounded-3xl"
                       src="/imgs/c85q5uc85q5uc85q.png" alt="" width={200}
                       height={200}/>
                <div className="p-4">
                    <h2 className="font-bold">• Be Part of the Inner Circle</h2>
                    <p>Get exclusive drops, member-only deals & fresh
                        VYBE content - straight to your inbox.</p>
                </div>
            </div>
            <div className="w-full h-fit md:w-1/3  rounded-3xl overflow-hidden bg-white shadow-lg shadow-white/10 transition-transform duration-500 hover:-translate-y-1 animate-[slide-up_800ms_cubic-bezier(0.22,1,0.36,1)_both] [animation-delay:120ms]">
                <div className="p-4">
                    <div className="flex items-center gap-4 mb-4">
                        <Image className="w-8 h-12 rounded-3xl object-cover"
                               src="/imgs/trendy-young-woman-with-long-loose-hair-posing-isolated.jpg" alt=""
                               width={200} height={200}/>
                        <div>
                            <h2 className="font-bold">Elena Jackson</h2>
                            <p>OG Member</p>
                        </div>
                    </div>
                    <p>Wearing VYBE makes me feel like I own the streets.
                        #VybeTribe</p>
                </div>
                <Image className="w-full rounded-3xl"
                       src="/imgs/hvwkrjhvwkrjhvwk.png" alt="" width={200}
                       height={200}/>
            </div>
            <div className="w-full h-fit md:w-1/3 rounded-3xl overflow-hidden bg-white shadow-lg shadow-white/10 transition-transform duration-500 hover:-translate-y-1 animate-[slide-up_800ms_cubic-bezier(0.22,1,0.36,1)_both] [animation-delay:240ms]">
                <Image className="w-full rounded-3xl"
                       src="/imgs/ecqcc2ecqcc2ecqc.png" alt="" width={200}
                       height={200}/>
                <div className="p-4">
                    <h2 className="font-bold">• Be Part of the Inner Circle</h2>
                    <p>Get exclusive drops, member-only deals & fresh
                        VYBE content - straight to your inbox.</p>
                </div>
            </div>
        </div>
    </div>
}