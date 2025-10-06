import Image from "next/image";
import React from "react";
import mountain from "../../public/mountain.png";
import { features } from "@/data/data";
import arrow from "../../public/arrow 6.png";

const Features = () => {
  return (
    <section className="relative mt-[90px] mx-[30px]">
      <div className="absolute inset-0 bg-black/50 h-[500px]" />
      <div className="absolute w-full h-[700px] flex flex-col items-center justify-center ">
        <h3 className="mt-[100px] ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        {features.map((feature) => (
          <div key={feature.id}>
            <Image src={feature.image} alt={feature.title} />
            <p>{feature.title}</p>
            <Image src={arrow} alt="arrow" />
          </div>
        ))}
      </div>
      <Image src={mountain} alt="mountain" className="relative -z-50" />
    </section>
  );
};

export default Features;
