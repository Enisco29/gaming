"use client";
import React from "react";
import Image from "next/image";
import gamePad from "../public/game-pad.webp";
import cry1 from "../public/cry 1.png";
import unreal from "../public/unity 1.png";
import unity from "../public/unreal 1.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Split headline text
    const textSplit = new SplitText("#text", { type: "words" });

    // Animate words
    tl.from(textSplit.words, {
      opacity: 0,
      yPercent: 120,
      stagger: 0.03,
      duration: 1.2,
    })

      // Fade in and slide paragraph + button
      .from(
        "#text p, #text button",
        {
          opacity: 0,
          y: 40,
          stagger: 0.2,
          duration: 0.8,
        },
        "-=1.6"
      )

      // Animate images with scale & rotation
      .from(
        ".hero-image",
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
          rotate: 10,
          stagger: 0.2,
          duration: 1,
        },
        "-=1"
      );
  }, []);

  return (
    <main className="flex md:flex-row flex-col justify-between items-center pt-[150px] lg:mx-[80px] md:mx-[50px] mx-[30px] gap-[30px]">
      <div
        id="text"
        className="md:w-[50%] justify-start items-start md:h-[480px] flex flex-col relative"
      >
        <h4 className="text-[#E87D0E] font-bold text-2xl">3D game Dev</h4>
        <h2 className="md:text-4xl text-3xl lg:text-6xl mt-8 font-extrabold text-white lg:leading-[70px] md:leading-relaxed">
          Work that we produce for our clients
        </h2>
        <p className="mt-7 text-white lg:leading-normal md:leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard. Get more
          details
        </p>
        <button className="bg-[#FA9021] p-3 px-7 mt-[40px] cursor-pointer rounded-full">
          Get more details
        </button>
      </div>

      {/* Right side images */}
      <div className="md:w-[50%] flex items-center relative justify-center">
        <Image
          src={cry1}
          alt="cry"
          className="absolute md:top-0 -top-6 hero-image"
        />
        <Image src={unreal} alt="unreal" className="hero-image" />
        <Image
          src={gamePad}
          alt="game-pad"
          className="w-[80%] pt-10 hero-image"
        />
        <Image
          src={unity}
          alt="unity"
          className="absolute md:top-5 top-0 right-0 hero-image"
        />
      </div>
    </main>
  );
};

export default Hero;
