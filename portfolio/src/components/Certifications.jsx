import React from "react";
import { certificationsData } from "../assets/me";
import {motion} from 'framer-motion';

const Certifications = () => {
  return (
        <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8 }}
      viewport={{ once: true }}
    >
    <section
      id="certifications"
      className="py-20 bg-gray-50/50 dark:bg-zinc-950/40 text-gray-900 dark:text-white"
    >
      <h2 className="text-3xl font-bold text-center mb-10">Certifications</h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {certificationsData.map((cert, index) => (
          <a
            href={cert.link || "#"}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block"
          >
            <div className="max-w-sm mx-auto bg-white border border-gray-100 rounded-xl shadow-md dark:bg-zinc-900/40 dark:border-zinc-800/80 hover:shadow-2xl dark:hover:shadow-purple-500/10 hover:border-purple-500/30 dark:hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <img
                className="w-full h-48 object-cover border-b border-gray-100 dark:border-zinc-800/60"
                src={cert.imge}
                alt={cert.title}
              />

              <div className="p-5 text-center">
                <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">
                  {cert.title}
                </h5>

                <p className="mb-4 font-normal text-sm text-gray-600 dark:text-zinc-400 line-clamp-2">
                  {cert.description}
                </p>

                <a
                  href={cert.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-lg shadow-md shadow-purple-500/15 dark:shadow-none hover:shadow-lg transition-all duration-300"
                >
                  Voir
                  <svg
                    className="rtl:rotate-180 w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
    </motion.div>
  );
};

export default Certifications;
