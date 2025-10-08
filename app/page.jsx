import About from "@/components/About";
import Hero from "@/components/Hero";
import TrendingGame from "@/components/TrendingGame";
import Features from "@/components/Features";
import Projects from "@/components/Projects";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div>
      <div className="bg-gradient-to-b from-black to-[#1d110b] min-h-screen">
        <Hero />
        <TrendingGame />
        <About />
      </div>
      <div className="bg-gradient-to-b from-black to-[#130b08] min-h-screen -z-50">
        <Features />
        <Projects />
        <Newsletter />
      </div>
    </div>
  );
}
