import Features from "@/components/homepage/Features";
import Hero from "@/components/homepage/Hero";
import Whatis from "@/components/homepage/Whatis";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-[4000px]">
      <Hero />
      <Whatis />
      <Features />


    </div>
  );
}
