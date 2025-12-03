import {Navbar} from "@/components/layout/Navbar";
import {Hero} from "@/app/home/Hero";
import {CommunityHub} from "@/app/home/CommunityHub";
import {ShopTheVibe} from "@/app/home/ShopTheVibe";
import {LatestDrops} from "@/app/home/LatestDrops";
import {OurStory} from "@/app/home/OurStory";
import {LimitedEdition} from "@/app/home/LimitedEdition";
import {Footer} from "@/components/layout/Footer";

export default function Home() {
    return (
        <main>
            <Navbar/>
            <div className="px-4 pb-8 md:px-8">
                <Hero/>
                <LatestDrops/>
                <ShopTheVibe/>
                <OurStory/>
                <CommunityHub/>
                <LimitedEdition/>
            </div>
            <Footer/>
        </main>
    );
}
