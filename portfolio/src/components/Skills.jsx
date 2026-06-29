import React from "react";
import { skillsData } from "../assets/me";
import { motion } from "framer-motion";


const Skills = () => {
  return (
        <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8 }}
      viewport={{ once: true }}
    >
    <section
      id="skills"
      className="py-20 text-gray-900 dark:text-white overflow-hidden relative"
    >
      <div
        className="absolute inset-0 -z-10 transition-opacity duration-500 opacity-100 dark:opacity-0"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, #ffffff, rgba(168, 85, 247, 0.15) 60%),
            radial-gradient(125% 125% at 50% 90%, #ffffff 40%, rgba(168, 85, 247, 0.15) 100%)
          `,
        }}
      />
      <div 
        className="absolute inset-0 -z-10 transition-opacity duration-500 opacity-0 dark:opacity-100"
        style={{
             backgroundImage: `
            linear-gradient(to bottom, #09090b, rgba(88, 28, 135, 0.15) 60%),
            radial-gradient(125% 125% at 50% 90%, #09090b 40%, rgba(88, 28, 135, 0.15) 100%)
          `, 
        }}
      />

      <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>

      <div className="relative w-full overflow-hidden group h-auto">
        <div className="flex animate-scroll gap-8 px-4 w-max group-hover:[animation-play-state:paused] cursor-pointer items-center">
          {skillsData.concat(skillsData).map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center border border-gray-200 dark:border-zinc-800/80 rounded-2xl p-4 bg-white/80 dark:bg-zinc-900/40 backdrop-blur-sm hover:bg-gray-50 dark:hover:bg-zinc-800/60 hover:border-cyan-500/30 dark:hover:border-cyan-500/50 hover:shadow-xl transition-all duration-300 min-w-[120px] shadow-sm"
            >
              <img
                src={skill.icon}
                alt={skill.title}
                className="w-16 h-16 object-contain mb-2 rounded-lg"
              />
              <h1 className="text-sm font-medium">{skill.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
    </motion.div>
  );
};

export default Skills;
