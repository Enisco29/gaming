"use client";
import Image from "next/image";
import React from "react";
import mountain from "../public/mountain.png";
import { features, featuresM } from "@/data/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#features",
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate heading and paragraph first
    tl.from("#features h3, #features p.main-text", {
      opacity: 0,
      y: 50,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.2,
    });

    // Add delay before the cards appear one by one
    tl.from(
      "#features .feature-card",
      {
        opacity: 0,
        y: 100,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.2,
      },
      "+=0.5"
    );
  }, []);

  return (
    <section id="features" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-black/80 h-full z-10" />

      <div className="absolute w-full flex flex-col items-center z-30">
        {/* Heading */}
        <h3 className="md:mt-[90px] mt-[40px] md:text-3xl sm:text-2xl text-lg font-bold md:w-[580px] mx-5 text-center leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h3>

        {/* Paragraph */}
        <p className="main-text md:w-[600px] text-center mt-5 mx-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>

        {/* Desktop Grid */}
        <div className="md:grid md:grid-cols-4 sm:grid-cols-2 gap-4 cursor-pointer space-y-5 mt-[90px] hidden">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="feature-card flex flex-col items-center justify-center space-y-5 p-2"
            >
              {feature.image && (
                <Image src={feature.image} alt={feature.title} />
              )}
              <p className="text-center">{feature.title}</p>
              {feature.arrow && <Image src={feature.arrow} alt="arrow" />}
            </div>
          ))}
        </div>

        {/* Mobile Grid */}
        <div className="grid grid-cols-2 md:hidden sm:grid-cols-2 gap-4 space-y-2 mt-[20px] max-sm:mx-6">
          {featuresM.map((feature) => (
            <div
              key={feature.id}
              className="feature-card flex flex-col items-center justify-center space-y-5 p-2"
            >
              {feature.image && (
                <Image src={feature.image} alt={feature.title} />
              )}
              <p className="text-center">{feature.title}</p>
              {feature.arrow && <Image src={feature.arrow} alt="arrow" />}
            </div>
          ))}
        </div>
      </div>

      <Image
        src={mountain}
        alt="mountain"
        className="relative h-[850px] w-full object-cover"
      />
    </section>
  );
};

export default Features;
