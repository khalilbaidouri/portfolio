import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { assets } from "../assets/me";
import About from "./About";

const Hero = () => {
    return (
        <div id="home" className="min-h-screen relative flex items-center pt-16 overflow-hidden">
            {/* Dual Gradient Overlay Background */}
            <div
                className="absolute inset-0 -z-10 transition-opacity duration-300"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
            radial-gradient(circle 500px at 20% 80%, rgba(139,92,246,0.3), transparent),
            radial-gradient(circle 500px at 80% 20%, rgba(59,130,246,0.3), transparent)
          `,
                    backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
                }}
            />

            {/* Dark Mode Background */}
            <div
                className="absolute inset-0 -z-10 hidden dark:block"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(39, 39, 42, 0.8) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(39, 39, 42, 0.8) 1px, transparent 1px),
            radial-gradient(circle 500px at 20% 80%, rgba(139,92,246,0.15), transparent),
            radial-gradient(circle 500px at 80% 20%, rgba(59,130,246,0.15), transparent)
          `,
                    backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
                }}
            />

            {/* Your Content/Components */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 break-words text-zinc-900 dark:text-white">
                            <span className="text-zinc-700 dark:text-zinc-300">FullStack Developer</span>
                            <br />
                            <span className="text-cyan-700 dark:text-cyan-500">Java</span>
                        </h1>
                        <About />
                        <br />

                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <a href="#projects">
                                <button className="flex gap-2 items-center px-10 py-4 bg-black dark:bg-zinc-100 rounded-full text-slate-200 dark:text-zinc-900 hover:text-white dark:hover:text-black hover:bg-zinc-800 dark:hover:bg-white cursor-pointer transition duration-300 font-medium">
                                    View My Work
                                    <FaArrowAltCircleRight />
                                </button>
                            </a>

                            <button
                                id="contact"
                                onClick={() =>
                                    (window.location.href = "mailto:khalilbaidouri97@gmail.com")
                                }

                                className="flex items-center gap-2 border border-slate-400 dark:border-zinc-700 rounded-full px-10 py-4 hover:border-slate-800 dark:hover:border-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300 dark:text-zinc-400 transition duration-300 cursor-pointer"
                            >
                                Contact Me
                                <FaArrowAltCircleRight />
                            </button>
                        </div>
                    </div>

          <div className="flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-100 floating">
              <div className="absolute inset-0 rounded-2xl overflow-hidden border-4 border-slate-600/30 glow">
                <img
                  className="w-full h-full object-cover"
                  src={assets.profilImg}
                  alt="profile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
