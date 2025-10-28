import React from "react";
import { skillsData } from "../assets/me";

const Skills = () => {
  return (
    <div
      id="skills"
      className="grid grid-cols-3 w-full gap-5 mx-auto py-20 px-2 "
    >
      {skillsData.map((skill, index) => {
        return (
          <div
            key={index}
            className="flex flex-col col-span-1 justify-center items-center gap-4 border rounded-2xl p-2"
          >
            <img
              src={skill.icon}
              alt={skill.title}
              className="w-16 h-16 object-contain mb-2"
            />
            <h1>{skill.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
