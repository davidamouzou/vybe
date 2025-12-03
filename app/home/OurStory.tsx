import Image from "next/image";

export function OurStory() {
    return (
        <section
            className="mt-16 flex flex-col md:flex-row gap-6 justify-between animate-[fade-in_700ms_cubic-bezier(0.22,1,0.36,1)_both]">
            <div className="w-1/2">
                <h2 className="text-xl font-bold mb-2 animate-[slide-up_600ms_cubic-bezier(0.22,1,0.36,1)_both]">Our
                    Story</h2>
                <p className="text-sm text-gray-700">
                    VYBE started as a small collective of creators blending music, fashion, and art into wearable
                    statements. We design for those who own their vibe and live it loud.
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-2"><span
                        className="mt-1 h-2 w-2 rounded-full bg-red-400"></span><span>2022 – The Spark</span></li>
                    <li className="flex items-start gap-2"><span
                        className="mt-1 h-2 w-2 rounded-full bg-red-400"></span><span>2023 – The First Drop</span></li>
                    <li className="flex items-start gap-2"><span
                        className="mt-1 h-2 w-2 rounded-full bg-red-400"></span><span>2024 – The Tribe United</span>
                    </li>
                </ul>
                <div className="mt-4">
                    <a className="inline-flex items-center gap-2 text-red-500 hover:underline cursor-pointer">Read
                        more</a>
                </div>
            </div>
            <div
                className="rounded-3xl overflow-hidden bg-white shadow-lg shadow-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-200/30">
                <Image className="w-80 object-cover" src="/imgs/women_red_white.png" alt="About VYBE" width={800}
                       height={600}/>
            </div>
        </section>
    );
}
