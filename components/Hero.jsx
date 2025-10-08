import React from "react";
import Image from "next/image";
import gamePad from "../public/game-pad.webp";
import cry1 from "../public/cry 1.png";
import unreal from "../public/unity 1.png";
import unity from "../public/unreal 1.png";

const Hero = () => {
  return (
    <>
      <main className="flex justify-between items-center mt-[60px] mx-[80px] gap-[30px]">
        <div className="w-[50%] justify-start items-start h-[480px] flex flex-col relative">
          <h4 className="text-[#E87D0E] font-bold text-2xl">3D game Dev</h4>
          <h2 className="text-6xl mt-8 font-extrabold text-white leading-[70px]">
            Work that we produce for our clients
          </h2>
          <p className="mt-7 text-white leading-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard. Get more
            details
          </p>
          <button className="bg-[#FA9021] p-3 px-7 mt-[40px] cursor-pointer rounded-full">
            Get more details
          </button>
        </div>
        <div className="w-[50%] flex items-center relative justify-center">
          <Image src={cry1} alt="cry" className="absolute top-0" />
          <Image src={unreal} alt="unreal" />
          <Image src={gamePad} alt="game-pad" className="w-[80%] pt-10" />
          <Image src={unity} alt="unity" className="absolute top-5 right-0" />
        </div>
      </main>
    </>
  );
};

export default Hero;
