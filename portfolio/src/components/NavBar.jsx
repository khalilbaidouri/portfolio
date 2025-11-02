import React from "react";
import { navMenu } from "../assets/me.js";
import { FaArrowRight } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="fixed w-full py-4 bg-white/70 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-zinc-800">
            <span>THE-</span>
            <span className="text-teal-800 font-orbitron">KHALIL-BAIDOURI</span>
          </a>

          <div className="hidden md:flex space-x-8 border border-gray-200 rounded-full px-10 py-4 w-">
            {navMenu.map((item, index) => (
              <div className="">
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-teal-700 transition duration-300"
                >
                  {item}
                </a>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row">
            <a
              download
              href="/CV.pdf"
              className="px-6 py-3 border border-zinc-800 rounded-full flex items-center gap-2 text-slate-600 hover:text-slate-900 hover:border-teal-700 hover:translate-y-1 transition duration-300 cursor-pointer "
            >
              Mon CV
              <FaArrowRight className="text-gray-500 text-sm" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
