import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const navLinks = [
  {
    id: 1,
    text: "home",
  },
  {
    id: 2,
    text: "company",
  },
  {
    id: 3,
    text: "resources",
  },
  {
    id: 4,
    text: "about",
  },
  {
    id: 5,
    text: "contact",
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav((prev) => !prev);
  };

  return (
    <nav className="text-white flex justify-between items-center h-24 px-4 max-w-[1240px] mx-auto">
      <h1 className="w-full text-3xl font-bold text-yellow-400 uppercase">
        React
      </h1>
      {/* large devices menu */}
      <ul className="hidden md:flex">
        {navLinks.map((item, index) => (
          <li
            className={`py-4 capitalize ${
              index === navLinks.length - 1 ? "mr-0" : "mr-4"
            }`}
            key={item.id}
          >
            {item.text}
          </li>
        ))}
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* mobile */}
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black/80 px-4 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <ul className="pt-12 uppercase text-lg font-semibold">
          {navLinks.map((item, index) => (
            <li
              className={`p-4 ${
                index === navLinks.length - 1 ? "" : "border-b border-gray-600"
              }`}
              key={item.id}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
