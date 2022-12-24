import React from "react";

const Hero = () => {
  return (
    <section className="text-white z-0">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="uppercase text-emerald-400 font-bold">
          growing with data analytics
        </p>
        <h1 className="font-bold  text-4xl sm:text-6xl md:text-7xl pt-4 tracking-wide">
          Grow with data.
        </h1>
        <p className="text-xl sm:text-4xl md:text-5xl font-bold py-4">
          Fast, flexible financing for{" "}
          <span className="text-emerald-500">everything you need</span>.
        </p>
        <p className="text-xl md:text-2xl font-bold text-gray-500 pt-2">
          Monitor your data analytics to increase revenue for BTB, BTC & SAAS
          platforms!
        </p>
        <button className="bg-emerald-400 hover:bg-emerald-600 mx-auto py-3 px-6 rounded-md font-bold mt-6 text-black">
          Get Started!
        </button>
      </div>
    </section>
  );
};

export default Hero;
