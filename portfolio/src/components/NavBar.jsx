import React, { useState } from "react";
import { navMenu } from "../assets/me";
import { FaArrowRight } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
      <div className="fixed w-full py-4 bg-white/70 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* LOGO */}
          <a href="/" className="text-2xl font-bold text-zinc-800">
            <span>THE-</span>
            <span className="text-teal-800 font-orbitron">KHALIL-BAIDOURI</span>
          </a>

          {/* BUTTON MOBILE (hamburger) */}
          <button
              className="md:hidden text-3xl text-zinc-700"
              onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center space-x-8 border border-gray-200 rounded-full px-10 py-4">
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

          {/* CV DESKTOP */}
          <div className="hidden md:block w-60">
            <a
                download
                href="/CV.pdf"
                className="px-6 py-3 border border-zinc-800 rounded-full flex items-center gap-2
            text-slate-600 hover:text-slate-900 hover:border-teal-700 hover:translate-y-1
            transition duration-300 cursor-pointer"
            >
              Mon CV
              <FaArrowRight className="text-gray-500 text-sm" />
            </a>
          </div>
        </div>

        {/* MENU MOBILE (dropdown sous la navbar) */}
        {open && (
            <div className="md:hidden bg-white/90 backdrop-blur-md shadow-lg mt-3 py-4 px-6 space-y-4">
              {navMenu.map((item, index) => (
                  <a
                      key={index}
                      href={`#${item.toLowerCase()}`}
                      className="block text-gray-700 text-lg font-medium hover:text-teal-700 transition"
                      onClick={() => setOpen(false)}
                  >
                    {item}
                  </a>
              ))}

              <a
                  download
                  href="/CV.pdf"
                  className="block mt-4 px-6 py-3 border border-zinc-800 rounded-full text-center
            text-slate-700 hover:text-slate-900 hover:border-teal-700 transition"
              >
                Mon CV
              </a>
            </div>
        )}
      </div>
  );
};

export default NavBar;
