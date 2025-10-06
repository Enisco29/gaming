import Image from "next/image";
import React from "react";
import mountain from "../../public/mountain.png";
import { features } from "@/data/data";

const Features = () => {
  return (
    <section className="relative mt-[90px] mx-[30px]">
      <div className="absolute inset-0 bg-black/80 h-[753px]" />
      <div className="absolute w-full flex flex-col items-center ">
        <h3 className="mt-[90px] text-2xl font-bold w-[500px] text-center leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h3>
        <p className="w-[600px] text-center mt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <div className="grid grid-cols-4 gap-4 space-y-5 mt-[90px]">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center justify-center space-y-5 p-2"
            >
              {feature.image ? (
                <Image src={feature.image} alt={feature.title} />
              ) : (
                ""
              )}
              <p>{feature.title}</p>
              {feature.arrow ? (
                <Image src={feature.arrow} alt="arrow" />
              ) : (
                ""
              )}{" "}
            </div>
          ))}
        </div>
      </div>
      <Image src={mountain} alt="mountain" className="relative -z-50" />
    </section>
  );
};

export default Features;
