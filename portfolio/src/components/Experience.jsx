import React from "react";
import { motion } from "framer-motion";
import { experienceData } from "../assets/me";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8 }}
      viewport={{ once: true }}
    >
      <section id="experience" className="py-20 bg-white dark:bg-zinc-950 overflow-hidden relative">
        {/* Background shapes */}
        <div
          className="absolute inset-0 -z-10 transition-opacity duration-500 opacity-100 dark:opacity-0"
          style={{
            backgroundImage: `radial-gradient(circle 500px at 80% 80%, rgba(6,182,212,0.1), transparent), radial-gradient(circle 500px at 20% 20%, rgba(139,92,246,0.1), transparent)`,
          }}
        />
        <div
          className="absolute inset-0 -z-10 transition-opacity duration-500 opacity-0 dark:opacity-100"
          style={{
            backgroundImage: `radial-gradient(circle 500px at 80% 80%, rgba(6,182,212,0.05), transparent), radial-gradient(circle 500px at 20% 20%, rgba(139,92,246,0.05), transparent)`,
          }}
        />

        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500">
          Work Experience
        </h2>

        <div className="max-w-5xl mx-auto px-6">
          <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-4 md:ml-32">
            {experienceData.map((exp, index) => (
              <div key={index} className="mb-12 last:mb-0 relative pl-8 md:pl-12">
                {/* Timeline dot */}
                <div className="absolute -left-[17px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-zinc-900 ring-4 ring-white dark:ring-zinc-950 z-10 hover:scale-110 transition-transform duration-300 shadow-md border border-zinc-200 dark:border-zinc-800">
                  <FaBriefcase className="text-teal-600 dark:text-teal-400 text-sm" />
                </div>

                {/* Left side Date Capsule (Desktop only) */}
                <div className="hidden md:block absolute -left-36 top-1.5 text-right w-28">
                  <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 block">
                    {exp.period}
                  </span>
                  
                </div>

                {/* Content Card */}
                <div className="bg-white border border-gray-100 dark:border-zinc-805/80 dark:bg-zinc-900/40 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-2xl dark:hover:shadow-teal-500/10 hover:border-teal-500/30 dark:hover:border-teal-500/40 hover:-translate-y-1.5 transition-all duration-350 relative overflow-hidden group">
                  
                  {/* Decorative line */}
                  <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-teal-500 to-cyan-500 group-hover:from-cyan-500 group-hover:to-blue-500 transition-colors duration-300"></div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-4">
            
                      <div>
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-blue-600 dark:group-hover:from-teal-400 dark:group-hover:to-cyan-400 transition-all duration-300">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-semibold text-teal-700 dark:text-teal-400 mt-1">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Date capsule for mobile */}
                    <div className="flex items-center gap-1.5 text-zinc-400 dark:text-zinc-500 text-xs md:hidden">
                      <FaCalendarAlt className="shrink-0" />
                      <time>{exp.period}</time>
                    </div>
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Technologies utilized */}
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-zinc-50 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-300 border border-zinc-200/40 dark:border-zinc-800 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Experience;
