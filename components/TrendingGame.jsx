import React from "react";
import GameCard from "./ui/GameCard";

const TrendingGame = () => {
  return (
    <section className="mt-[80px] md:mx-[80px] mx-[20px]">
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
