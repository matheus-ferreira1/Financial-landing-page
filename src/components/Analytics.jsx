import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[455px] mx-auto my-4"
          src={Laptop}
          alt="Laptop image for testing purpose"
        />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-emerald-400 font-bold">
            data analytics dashboard
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p className="text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab libero
            odio ipsam. Quae repudiandae enim nemo quas fuga similique,
            architecto sequi mollitia laudantium consequatur maxime corporis sed
            omnis natus dolores?
          </p>
          <button className="bg-black hover:bg-black/10 mx-auto md:ml-0 py-3 px-6 rounded-md font-bold mt-6 text-emerald-400">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
