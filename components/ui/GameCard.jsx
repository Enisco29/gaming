import { gameCard } from "@/data/data";
import Image from "next/image";
import fire from "../../public/fire 1.png";

const GameCard = () => {
  return (
    <div className="grid flex-wrap gap-6 md:grid-cols-4 sm:grid-cols-2 items-center mt-10">
      {gameCard.map((card) => (
        <div
          key={card.id}
          className="flex flex-col items-center justify-center cursor-pointer gap-4"
        >
          <Image src={card.image} alt={card.title} />
          <span className="flex gap-2">
            <Image src={fire} alt="fire" />
            <p className="font-bold text-lg">{card.title}</p>
          </span>
        </div>
      ))}
    </div>
  );
};

export default GameCard;
