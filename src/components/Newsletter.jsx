import React from "react";

const Newsletter = () => {
  return (
    <section className="w-full py-16 px-4 text-white bg-gray-1">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 flex flex-col items-start justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsleter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter e-mail"
            />
            <button className="bg-emerald-400 hover:bg-emerald-600 text-black rounded-md font-medium  w-[200px] ml-4 my-6 px-6 py-3">
              Notify me
            </button>
          </div>
          <p>
            We care abou the protection of your data. Read our{" "}
            <span className="text-emerald-400">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
