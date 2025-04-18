import Features from "@/components/Features";
import Guides from "@/components/Guides";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";

export default function Home() {
  return (
    <div className='max-w-7xl md:mx-auto w-full bg-white md:py-2 space-y-4'>
      <Hero />
      <Features />
      <Guides />
      <Solutions />
    </div>
  );
}
