import React from "react";
import { skillsData } from "../assets/me";

const Skills = () => {
  return (
    <div id="skills" className="grid grid-cols-3 w-full gap-5 mx-auto py-20 px-2 ">
      {skillsData.map((skill, index) => {
        const Icon = skill.icon;
        return (
          <div key={index} className="flex flex-col col-span-1 justify-center items-center gap-4 border rounded-2xl p-2">
            <Icon className="size-10 " />
            <h1>{skill.title}</h1>
            <div className="flex flex-wrap gap-2 items-center justify-center">
              {skill.technologies.map((tec, ind) => {
                return <span key={ind}>{tec}</span>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
