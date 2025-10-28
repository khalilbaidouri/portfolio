import React from "react";
import { navMenu } from "../assets/me.js";
import { FaArrowRight } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="fixed w-full py-4 bg-white/70 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-zinc-800">
            <span>THE-</span>
            <span className="text-teal-800 font-orbitron">KHALIL-</span>
            <span className="text-teal-800 font-orbitron">BAIDOURI</span>
          </div>

          {/* Menu */}
          <div className="hidden md:flex space-x-8 border border-gray-200 rounded-full px-10 py-4">
            {navMenu.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-teal-700 transition duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Resume Button */}
          <div>
            <a download href="/CV.pdf"
              className="px-6 py-3 border border-zinc-800 rounded-full flex items-center gap-2 text-slate-600 hover:text-slate-900 hover:border-teal-700 hover:translate-y-1 transition duration-300 cursor-pointer"
            >
              Resume
              <FaArrowRight className="text-gray-500 text-sm" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
