import React from "react";
import { motion } from "framer-motion";
import { formationData } from "../assets/me";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8 }}
      viewport={{ once: true }}
    >
      <section id="education" className="py-20 bg-gray-50 dark:bg-black">
        <h2 className="text-3xl font-bold text-center mb-10">
          My Educations
        </h2>

        <div className="max-w-5xl mx-auto px-6">
          <div className="relative">
            <div className="absolute left-0 top-0 w-1 h-full bg-gray-300 dark:bg-gray-700"></div>

            <ul className="space-y-10 max-w-4xl mx-auto">
              {formationData.map((formation, index) => (
                <li key={index} className="relative pl-10 group">
                  <span className="absolute -left-3 top-2 flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full ring-4 ring-gray-50 dark:ring-gray-900 dark:bg-blue-700 transition-transform group-hover:scale-110">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </span>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded shadow hover:shadow-lg transition-all">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                      {formation.diploma}
                      {formation.last && (
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium ml-3 px-2 py-0.5 rounded dark:bg-blue-700 dark:text-blue-200">
                          Latest
                        </span>
                      )}
                    </h3>

                    <time className="block text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {formation.period}
                    </time>

                    <p className="text-gray-600 dark:text-gray-300">
                      {formation.institution}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Education;
