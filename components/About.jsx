"use client";
import Image from "next/image";
import React from "react";
import Rectangle4 from "../public/Rectangle 4.png";
import Group21 from "../public/Group 21.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      defaults: { ease: "power1.out" },
    });

    tl.from(
      "#about > *",
      {
        opacity: 0,
        yPercent: 100,
        ease: "power1.inOut",
        stagger: 0.09,
        duration: 0.7,
      },
      "+=.5"
    );
  }, []);
  return (
    <section
      id="about"
      className="mt-[100px] pb-[90px] md:mx-[80px] mx-[20px] space-y-[20px] flex flex-col justify-center items-center"
    >
      <h3 className="text-center md:text-4xl text-xl font-bold md:w-[800px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </h3>
      <div className="w-full flex flex-col justify-center items-start mt-[50px] space-y-[10px]">
        <h2 className="text-2xl font-bold">Lorem Ipsum</h2>
        <p className="md:w-[500px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
      </div>
      <div className="relative w-full">
        <Image
          src={Group21}
          alt="dot"
          className="absolute top-0 right-[150px] -z-50"
        />
        <Image src={Rectangle4} alt="spiderman" className="mt-[60px] w-full" />
      </div>
    </section>
  );
};

export default About;
