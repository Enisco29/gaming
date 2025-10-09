"use client";

import { projectsImage } from "@/data/data";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // --- Text Animation ---
      gsap.from(".project-text", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
      });

      // --- Card Animation (One by One) ---
      const cards = gsap.utils.toArray(".project-card");
      cards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 80,
          duration: 0.7,
          ease: "power3.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col mt-[100px] md:mx-[60px] mx-[20px] items-center justify-center space-y-5"
    >
      <h3 className="project-text text-3xl font-bold">Our Recent Projects</h3>
      <p className="project-text md:w-[400px] text-center mb-[80px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      <div className="grid lg:grid-cols-[1fr_.4fr_1.2fr_.3fr_1.5fr] sm:grid-cols-2 gap-7 items-center justify-center">
        {projectsImage.map((image) => (
          <Image
            key={image.id}
            src={image.image}
            alt="project-card"
            className={`project-card ${image.class} h-[250px] w-full cursor-pointer rounded-xl`}
          />
        ))}
      </div>

      <button className="bg-[#3b3939] p-3 px-8 rounded-lg cursor-pointer text-l mt-[30px] font-bold">
        SEE ALL
      </button>
    </section>
  );
};

export default Projects;
