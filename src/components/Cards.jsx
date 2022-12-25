import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <section className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-200">
          <img
            src={Single}
            alt=""
            className="w-20 h-[60px] mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="text-2xl font-bold text-center py-6">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-6">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-emerald-400 hover:bg-emerald-500 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-10 md:my-0 rounded-lg hover:scale-105 duration-200">
          <img
            src={Double}
            alt=""
            className="w-20 h-[60px] mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="text-2xl font-bold text-center py-6">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-6">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="text-emerald-400 bg-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-200">
          <img
            src={Triple}
            alt=""
            className="w-20 h-[60px] mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="text-2xl font-bold text-center py-6">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-6">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-emerald-400 hover:bg-emerald-500 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cards;
