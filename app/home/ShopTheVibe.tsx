import Image from "next/image";

const tiles = [
    {title: "Silent Statement", image: "/imgs/side-view-woman-posing-studio.jpg"},
    {title: "Vibrant Canvas", image: "/imgs/confident-woman-supporting-body-positivity.jpg"},
    {title: "Neon Nights", image: "/imgs/side-view-business-woman-posing.jpg"},
    {title: "Muted Energy", image: "/imgs/side-view-woman-posing-studio.jpg"},
];

export function ShopTheVibe() {
    return (
        <section className="mt-16 animate-[fade-in_700ms_cubic-bezier(0.22,1,0.36,1)_both]">
            <h2 className="text-xl font-bold text-center animate-[slide-up_600ms_cubic-bezier(0.22,1,0.36,1)_both]">Shop the Vibe</h2>
            <p className="text-center text-sm mt-1">Discover collections curated to express every facet of your unique energy.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {tiles.map((t, idx) => (
                    <div key={idx}
                         className={`rounded-3xl overflow-hidden relative group shadow-lg shadow-white/10 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-200/30 animate-[slide-up_800ms_cubic-bezier(0.22,1,0.36,1)_both] [animation-delay:${idx * 100}ms]`}>
                        <Image className="w-full h-40 md:h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                               src={t.image} alt={t.title} width={400} height={300}/>
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"/>
                        <div className="absolute bottom-3 left-3 right-3 text-white font-semibold">
                            {t.title}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
