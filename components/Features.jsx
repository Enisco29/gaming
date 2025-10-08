import Image from "next/image";
import React from "react";
import mountain from "../public/mountain.png";
import { features, featuresM } from "@/data/data";

const Features = () => {
  return (
    <section className="relative ">
      <div className="absolute inset-0 bg-black/80 h-full z-10" />
      <div className="absolute w-full flex flex-col items-center z-50 ">
        <h3 className="md:mt-[90px] mt-[40px] md:text-3xl sm:text-2xl text-lg font-bold md:w-[580px] mx-5 text-center leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h3>
        <p className="md:w-[600px] text-center mt-5 mx-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <div className="md:grid md:grid-cols-4 sm:grid-cols-2 gap-4 space-y-5 mt-[90px] hidden">
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
              <p className="text-center">{feature.title}</p>
              {feature.arrow ? (
                <Image src={feature.arrow} alt="arrow" />
              ) : (
                ""
              )}{" "}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:hidden sm:grid-cols-2 gap-4 space-y-2 mt-[20px] max-sm:mx-6">
          {featuresM.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center justify-center space-y-5 p-2"
            >
              {feature.image ? (
                <Image src={feature.image} alt={feature.title} />
              ) : (
                ""
              )}
              <p className="text-center">{feature.title}</p>
              {feature.arrow ? (
                <Image src={feature.arrow} alt="arrow" />
              ) : (
                ""
              )}{" "}
            </div>
          ))}
        </div>
      </div>
      <Image
        src={mountain}
        alt="mountain"
        className="relative h-[850px] w-full"
      />
    </section>
  );
};

export default Features;
