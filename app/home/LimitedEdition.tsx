import ProductCard from "@/components/ui/ProductCard";

const limited = [
    {title: "Crimson Scope Jacket", price: 119, image: "/imgs/confident-woman-supporting-body-positivity.jpg"},
    {title: "Walk&Blush Print", price: 54, image: "/imgs/side-view-woman-posing-studio.jpg"},
    {title: "Heritage Wave Hat", price: 33, image: "/imgs/side-view-business-woman-posing.jpg"},
    {title: "Grail Camo Cargo Pants", price: 95, image: "/imgs/side-view-woman-posing-studio.jpg"},
];

export function LimitedEdition() {
    return (
        <section className="mt-16 animate-[fade-in_700ms_cubic-bezier(0.22,1,0.36,1)_both]">
            <div className="flex items-center justify-center gap-3">
                <h2 className="text-xl font-bold text-center">Limited Edition</h2>
                <span className="px-2 py-0.5 rounded-full text-xs bg-red-100 text-red-600">Once it’s gone, it’s gone.</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {limited.map((p, idx) => (
                    <div key={idx} className={`animate-[slide-up_800ms_cubic-bezier(0.22,1,0.36,1)_both] [animation-delay:${idx * 100}ms]`}>
                        <ProductCard title={p.title} price={p.price} image={p.image}/>
                    </div>
                ))}
            </div>
        </section>
    );
}
