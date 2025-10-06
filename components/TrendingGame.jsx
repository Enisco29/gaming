import React from "react";
import GameCard from "./ui/GameCard";

const TrendingGame = () => {
  return (
    <section className="mt-[80px] mx-[30px]">
      <div className="flex justify-between items-center">
        <p className="text-4xl font-bold">Currently Trending Games</p>
        <button className="bg-[#3b3939] p-3 px-8 rounded-lg text-l font-bold">
          SEE ALL
        </button>
      </div>
      <GameCard />
    </section>
  );
};

export default TrendingGame;
