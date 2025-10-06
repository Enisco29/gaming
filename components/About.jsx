import Image from "next/image";
import React from "react";
import Rectangle4 from "../public/Rectangle 4.png";
import Group21 from "../public/Group 21.png";

const About = () => {
  return (
    <section className="mt-[100px] mx-[30px] space-y-[20px] flex flex-col justify-center items-center">
      <h3 className="text-center text-4xl font-bold w-[800px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </h3>
      <div className="w-full flex flex-col justify-center items-start mt-[50px] space-y-[10px]">
        <h2 className="text-2xl font-bold">Lorem Ipsum</h2>
        <p className="w-[500px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
      </div>
      <div className="relative w-full h-[550px]">
        <Image
          src={Group21}
          alt="dot"
          className="absolute top-0 right-[200px] -z-50"
        />
        <Image src={Rectangle4} alt="spiderman" className="mt-[60px] w-full" />
      </div>
    </section>
  );
};

export default About;
