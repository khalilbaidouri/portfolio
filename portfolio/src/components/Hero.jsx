import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { assets } from "../assets/me";  

const Hero = () => {
  return (
    <div id="hero" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-10">
              <span className="text-zinc-700">FullStack Developer</span>
              <br />
              <span className="text-cyan-700">Java</span>
            </h1>

            <p className="text-xl text-zinc-900 mb-6">
              I create dynamic and responsive web applications using modern
              technologies.
            </p>

            {/* Boutons */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <button className="flex gap-2 items-center px-10 py-4 bg-black rounded-full text-slate-200 hover:text-white hover:bg-zinc-800 cursor-pointer transition duration-300">
                View My Work
                <FaArrowAltCircleRight />
              </button>

              <button className="flex items-center gap-2 border border-slate-400 rounded-full px-10 py-4 hover:border-slate-800 hover:text-zinc-800 transition duration-300 cursor-pointer">
                Contact Me
                <FaArrowAltCircleRight />
              </button>
            </div>
          </div>

          {/* Image */}
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
