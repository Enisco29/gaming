import About from "@/components/About";
import Hero from "@/components/Hero";
import TrendingGame from "@/components/TrendingGame";
import Features from "@/components/ui/Features";

export default function Home() {
  return (
    <div>
      <Hero />
      <TrendingGame />
      <About />
      <Features />
    </div>
  );
}
