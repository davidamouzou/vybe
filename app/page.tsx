import {Header} from "@/app/components/Header";
import {Hero} from "./components/Hero";
import {CommunityHub} from "./components/CommunityHub";

export default function Home() {
    return (
        <main className="px-4 md:px-8">
            <Header/>
            <Hero/>
            <CommunityHub/>
        </main>
    );
}
