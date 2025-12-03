import ProductCard from "@/components/ui/ProductCard";

const products = [
    {title: "Vibe Bloom Crop", price: 42.9, image: "/imgs/side-view-woman-posing-studio.jpg", rating: 4.8},
    {title: "Icon Zipline Tee", price: 36.0, image: "/imgs/confident-woman-supporting-body-positivity.jpg", rating: 4.6},
    {title: "Graffiti Duo Shorts", price: 28.5, image: "/imgs/side-view-business-woman-posing.jpg", rating: 4.7},
];

export function LatestDrops() {
    return (
        <section className="mt-16 animate-[fade-in_700ms_cubic-bezier(0.22,1,0.36,1)_both]">
            <h2 className="text-xl font-bold text-center animate-[slide-up_600ms_cubic-bezier(0.22,1,0.36,1)_both]">Latest Drops</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {products.map((p, idx) => (
                    <div key={idx} className={`animate-[slide-up_800ms_cubic-bezier(0.22,1,0.36,1)_both] [animation-delay:${idx * 120}ms]`}>
                        <ProductCard title={p.title} price={p.price} image={p.image} rating={p.rating}/>
                    </div>
                ))}
            </div>
        </section>
    );
}
