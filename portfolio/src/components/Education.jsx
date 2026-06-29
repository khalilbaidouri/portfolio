import React from "react";
import { motion } from "framer-motion";
import { formationData } from "../assets/me";
import { FaCalendarAlt, FaUniversity } from "react-icons/fa";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8 }}
      viewport={{ once: true }}
    >
      <section id="education" className="py-20 bg-gray-50/50 dark:bg-zinc-950/40 overflow-hidden">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
          My Education
        </h2>

        <div className="max-w-5xl mx-auto px-6">
          <div className="relative">
            {/* Center Line for desktop, left line for mobile */}
            <div className="absolute left-[16px] md:left-1/2 top-0 w-[2px] h-full bg-zinc-200 dark:bg-zinc-800 -translate-x-1/2"></div>

            <div className="space-y-12">
              {formationData.map((formation, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div 
                    key={index} 
                    className={`flex flex-col md:flex-row items-start md:items-center relative ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Card Container */}
                    <div className="w-full md:w-1/2 pl-10 md:pl-0 md:px-8">
                      <div className="bg-white border border-gray-100 dark:border-zinc-805/80 dark:bg-zinc-900/40 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-2xl dark:hover:shadow-indigo-500/10 hover:border-indigo-500/30 dark:hover:border-indigo-500/40 hover:-translate-y-1.5 transition-all duration-350 relative overflow-hidden group">
                        
                        {/* Decorative side color strip */}
                        <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-blue-500 to-indigo-500 group-hover:from-indigo-500 group-hover:to-purple-500 transition-colors duration-300"></div>

                        <div className="flex justify-between items-start gap-4">
                          <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-cyan-400 dark:group-hover:to-purple-400 transition-all duration-300">
                            {formation.diploma}
                          </h3>
                          {formation.last && (
                            <span className="shrink-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-white dark:from-cyan-950/60 dark:to-blue-950/60 dark:text-cyan-400 dark:border dark:border-cyan-500/20 text-xs font-semibold px-3 py-1 rounded-full animate-pulse">
                              Latest
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2 mt-3 text-zinc-600 dark:text-zinc-400 text-sm font-medium">
                          <FaUniversity className="text-blue-500 dark:text-cyan-400 shrink-0" />
                          <span>{formation.institution}</span>
                        </div>

                        {/* Date shown on mobile view only inside the card */}
                        <div className="flex items-center gap-2 mt-2 text-zinc-400 dark:text-zinc-500 text-xs md:hidden">
                          <FaCalendarAlt className="shrink-0" />
                          <time>{formation.period}</time>
                        </div>
                      </div>
                    </div>

                    {/* Glowing Timeline Node */}
                    <div className="absolute left-[16px] md:left-1/2 top-6 md:top-auto flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-zinc-900 ring-4 ring-white dark:ring-zinc-950 z-10 -translate-x-1/2 transition-all duration-300 hover:scale-125 shadow-md border border-zinc-200 dark:border-zinc-800">
                      <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-pulse shadow-sm"></span>
                    </div>

                    {/* Date capsule shown on desktop view opposite the card */}
                    <div className={`hidden md:block w-1/2 px-8 ${isEven ? 'text-right' : 'text-left'}`}>
                      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-zinc-900/60 border border-zinc-200/50 dark:border-zinc-850 text-sm font-semibold text-zinc-600 dark:text-zinc-300 shadow-sm transition-transform duration-300 hover:scale-105">
                        <FaCalendarAlt className="text-indigo-500 dark:text-indigo-400 shrink-0" />
                        <time>{formation.period}</time>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Education;
