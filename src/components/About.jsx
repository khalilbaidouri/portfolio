import React from "react";
import { reseauData } from "../assets/me";
const About = () => {
  return (
    <div id="about" className="text-center lg:text-left">
      <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500">
        About Me
      </h2>

      <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
        Hi, I’m <span className="font-bold text-teal-600 dark:text-teal-400">Khalil</span>, a{" "}
        <span className="font-semibold text-purple-600 dark:text-purple-400">Full-Stack Developer</span> and{" "}
        <span className="font-semibold text-cyan-600 dark:text-cyan-400">Computer Engineering student</span>. I specialize in web development with{" "}
        <span className="text-indigo-600 dark:text-indigo-400 font-medium">React</span> and{" "}
        <span className="text-red-600 dark:text-red-400 font-medium">Java</span>, and I have hands-on experience with{" "}
        <span className="font-semibold text-yellow-600 dark:text-yellow-400">Spring Security</span> for building secure and robust applications. I love creating functional, user-friendly web apps, exploring new technologies, and continuously improving my skills in software development.
      </p>

      <div className="flex justify-center lg:justify-start space-x-4 mt-4">
        {reseauData.map((network, index) => (
          <a
            key={index}
            href={network.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition transform hover:-translate-y-1 duration-300"
          >
            <network.icon size={28} className="hover:text-gradient" />
            <span className="sr-only">{network.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default About;
