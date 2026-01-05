import Features from "@/components/homepage/Features";
import Hero from "@/components/homepage/Hero";
import Whatis from "@/components/homepage/Whatis";
import Places from "@/components/homepage/Places";
import HIW from "@/components/homepage/HIW";

export default function Home() {
    return (
        <div className="w-full">
            <Hero/>
            <Whatis/>
            <Features/>
            <Places/>
            <section className="relative">
                <HIW/>
            </section>

        </div>
    );
}
