import React from "react";
import { skillsData } from "../assets/me";

const Skills = () => {
  return (
    <section id="skills" className="py-20  min-h-screen text-white overflow-hidden relative">

<div className="min-h-screen w-full relative bg-white">
  {/* Cool Blue Glow Right */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#ffffff",
      backgroundImage: `
        radial-gradient(
          circle at top right,
          rgba(70, 130, 180, 0.5),
          transparent 70%
        )
      `,
      filter: "blur(80px)",
      backgroundRepeat: "no-repeat",
    }}
  />
 <h2 className="text-3xl font-bold text-center mb-10 text-black ">My Skills</h2>

      <div className="relative w-full overflow-hidden group">
        <div className="flex animate-scroll gap-8 px-4 w-max group-hover:[animation-play-state:paused] cursor-pointer">
          {skillsData.concat(skillsData).map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center border rounded-2xl p-4 bg-white-800 hover:bg-gray-700 transition-all duration-300 min-w-[120px]"
            >
              <img
                src={skill.icon}
                alt={skill.title}
                className="w-16 h-16 object-contain mb-2"
              />
              <h1 className="text-sm">{skill.title}</h1>
            </div>
          ))}
        </div>
      </div></div>
     
    </section>
  );
};

export default Skills;