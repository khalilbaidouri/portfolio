import React from "react";
import { skillsData } from "../assets/me";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 text-gray-900 dark:text-white overflow-hidden relative"
    >
      <div
        className="absolute inset-0 -z-10 dark:opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, #ffffff, #A855F74D 60%),
            radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #A855F74D 100%)
          `,
          backgroundBlendMode: "overlay",
        }}
      />
      <div 
        className="absolute inset-0 -z-10 hidden dark:block"
        style={{
             backgroundImage: `
            linear-gradient(to bottom, #09090b, #581c874D 60%),
            radial-gradient(125% 125% at 50% 90%, #09090b 40%, #581c874D 100%)
          `, 
        }}
      />

      <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>

      <div className="relative w-full overflow-hidden group h-auto">
        <div className="flex animate-scroll gap-8 px-4 w-max group-hover:[animation-play-state:paused] cursor-pointer items-center">
          {skillsData.concat(skillsData).map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center border border-gray-300 rounded-2xl p-4 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 min-w-[120px] shadow-md hover:shadow-lg"
            >
              <img
                src={skill.icon}
                alt={skill.title}
                className="w-16 h-16 object-contain mb-2"
              />
              <h1 className="text-sm font-medium">{skill.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
