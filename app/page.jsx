import About from "@/components/About";
import Hero from "@/components/Hero";
import TrendingGame from "@/components/TrendingGame";
import Features from "@/components/Features";
import Projects from "@/components/Projects";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div>
      <Hero />
      <TrendingGame />
      <About />
      <Features />
      <Projects />
      <Newsletter />
    </div>
  );
}
