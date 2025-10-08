import { projectsImage } from "@/data/data";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <section className="flex flex-col mt-[100px] md:mx-[60px] mx-[20px]  items-center justify-center space-y-5">
      <h3 className="text-3xl font-bold">Our Recent Projects</h3>
      <p className="w-[400px] text-center mb-[80px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.{" "}
      </p>
      <div className="grid lg:grid-cols-[1fr_.4fr_1.2fr_.3fr_1.5fr] md:grid-cols-2 sm:grid-cols-1 gap-7 items-center justify-center">
        {projectsImage.map((image) => (
          <Image
            key={image.id}
            src={image.image}
            alt="project-card"
            className={`${image.class} h-[250px] rounded-xl`}
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
