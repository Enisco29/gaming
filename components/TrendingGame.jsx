"use client";
import React from "react";
import GameCard from "./ui/GameCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, SplitText);

const TrendingGame = () => {
  useGSAP(() => {
    const textSplit = new SplitText("#trending p", { type: "words" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#trending",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      defaults: { ease: "power1.out" },
    });

    tl.from(textSplit.words, {
      opacity: 0,
      yPercent: 100,
      stagger: 0.03,
      duration: 0.7,
    });

    tl.from("#trending button", {
      opacity: 0,
      yPercent: 100,
      stagger: 0.03,
      duration: 0.7,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section
      id="trending"
      className="mt-[80px] md:mx-[80px] mx-[20px] overflow-hidden"
    >
      <div className="md:flex-row flex-col max-md:gap-4 flex justify-between items-center">
        <p className="md:text-4xl text-3xl text-center font-bold">
          Currently Trending Games
        </p>
        <button className="bg-[#3b3939] p-3 px-8 rounded-lg cursor-pointer text-l font-bold">
          SEE ALL
        </button>
      </div>
      <GameCard />
    </section>
  );
};

export default TrendingGame;
