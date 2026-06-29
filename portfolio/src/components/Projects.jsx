import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { projectsData } from "../assets/me";

export const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleProjects.length === 0) {
          // Charger les projets seulement quand la section est visible
          setVisibleProjects(projectsData);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [visibleProjects]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: visibleProjects.length ? 1 : 0 }}
      transition={{ duration: 1.8 }}
      viewport={{ once: true }}
    >
      <section
        ref={sectionRef}
        id="projects"
        className="py-20 bg-gray-50/50 dark:bg-zinc-950/40 text-gray-900 dark:text-white"
      >
        <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {visibleProjects.length === 0 ? (
            <p className="text-center col-span-full">Chargement...</p>
          ) : (
            visibleProjects.map((project, index) => (
              <a
                href={project.linkDeploy || "#"}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block"
              >
                <div className="max-w-sm mx-auto bg-white border border-gray-100 rounded-xl shadow-md dark:bg-zinc-900/40 dark:border-zinc-800/80 hover:shadow-2xl dark:hover:shadow-cyan-500/10 hover:border-cyan-500/30 dark:hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <img
                    className="w-full h-48 object-cover border-b border-gray-100 dark:border-zinc-800/60"
                    src={project.imageUrl}
                    alt={project.title}
                  />
                  <div className="p-5">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">
                      {project.title}
                    </h5>
                    <div className="mb-3">
                      <span className="inline-block px-3 py-0.5 bg-cyan-50 text-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-400 border border-cyan-100 dark:border-cyan-500/20 rounded-full text-xs font-semibold uppercase tracking-wider">
                        {project.post}
                      </span>
                    </div>
                    <p className="mb-4 font-normal text-sm text-gray-600 dark:text-zinc-400 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2.5 py-0.5 bg-zinc-100 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-300 border border-zinc-200/50 dark:border-zinc-850 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.gitHubLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-xs font-semibold text-center text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg shadow-md shadow-cyan-500/15 dark:shadow-none hover:shadow-lg transition-all duration-300"
                    >
                      GitHub
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
            ))
          )}
        </div>
      </section>
    </motion.div>
  );
};