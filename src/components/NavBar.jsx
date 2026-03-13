import React, { useState } from "react";
import { navMenu } from "../assets/me";
import { FaArrowRight } from "react-icons/fa";
import { HiMenu, HiX, HiMoon, HiSun } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
      <div className="fixed w-full py-4 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md shadow-sm z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          <a href="/" className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            <span>THE-</span>
            <span className="text-teal-800 dark:text-teal-400 font-orbitron">KHALIL-BAIDOURI</span>
          </a>

          <button
              className="md:hidden text-3xl text-zinc-700 dark:text-zinc-200"
              onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>

          <div className="hidden md:flex items-center space-x-8 border border-gray-200 dark:border-zinc-700/50 rounded-full px-10 py-4 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md">
            {navMenu.map((item, index) => (
                <a
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-teal-700 dark:hover:text-teal-400 transition duration-300"
                >
                  {item}
                </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <HiMoon size={20} /> : <HiSun size={20} />}
            </button>
            <div className="w-48">
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
        </div>

        {open && (
            <div className="md:hidden bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md shadow-lg mt-3 py-4 px-6 space-y-4 rounded-lg border border-gray-100 dark:border-zinc-800">
              <div className="flex justify-end">
                 <button 
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
                >
                  {theme === 'light' ? <HiMoon size={20} /> : <HiSun size={20} />}
                </button>
              </div>
              {navMenu.map((item, index) => (
                  <a
                      key={index}
                      href={`#${item.toLowerCase()}`}
                      className="block text-gray-700 dark:text-gray-200 text-lg font-medium hover:text-teal-700 dark:hover:text-teal-400 transition"
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
