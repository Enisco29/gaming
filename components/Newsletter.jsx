import React from "react";

const Newsletter = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-[100px] mx-[100px]">
      <div className="flex flex-col items-start justify-between w-full">
        <div className="space-y-6 mb-10">
          <h2 className="text-3xl font-bold ">Lorem Ipsum</h2>
          <p className="w-[500px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
        </div>

        <form className="bg-[#1C140F] flex p-7 rounded-2xl justify-between items-center w-full">
          <div className="w-[60%] space-y-3">
            <h4 className="text-xl font-[400]">Stay in the loop</h4>
            <p className="text-white/70">
              Subscribe to receive the latest news and updates about TDA. <br />{" "}
              We promise not to spam you!{" "}
            </p>
          </div>
          <div className="flex relative items-center justify-between w-[400px]">
            <input
              type="email"
              placeholder="Enter email address"
              className="bg-white p-3 px-6 rounded-md text-black/60 w-full"
            />
            <button
              type="submit"
              className="absolute right-0 bg-[#DC7000] p-1.5 px-4 mr-3 rounded-md"
            >
              continue
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
