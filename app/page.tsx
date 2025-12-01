import {Header} from "@/app/components/Header";
import {Hero} from "./components/Hero";
import {CommunityHub} from "./components/CommunityHub";

export default function Home() {
    return (
        <main>
            <Header/>
            <div className="px-4 pb-8 md:px-8">
                <Hero/>
                <CommunityHub/>
            </div>

        </main>
    );
}
