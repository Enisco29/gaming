"use client";
import { gameCard } from "@/data/data";
import Image from "next/image";
import fire from "../../public/fire 1.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const GameCard = () => {
  useGSAP(() => {
    // Select all the cards
    const cards = gsap.utils.toArray(".game-card");

    cards.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 60,
        duration: 0.7,
        delay: i * 0.1, // small global stagger for flow
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse", // play when in view, reverse when out
        },
      });
    });
  }, []);

  return (
    <div className="grid flex-wrap gap-6 md:grid-cols-4 sm:grid-cols-2 items-center mt-10">
      {gameCard.map((card) => (
        <div
          key={card.id}
          className="game-card flex flex-col items-center justify-center cursor-pointer gap-4"
        >
          <Image
            src={card.image}
            alt={card.title}
            className="transition-transform duration-300 hover:scale-105"
          />
          <span className="flex gap-2 items-center">
            <Image src={fire} alt="fire" width={20} height={20} />
            <p className="font-bold text-lg">{card.title}</p>
          </span>
        </div>
      ))}
    </div>
  );
};

export default GameCard;
