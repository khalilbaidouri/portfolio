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
        className="py-20 bg-gray-50 dark:bg-black text-gray-900 dark:text-white "
      >
        <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {visibleProjects.length === 0 ? (
            <p className="text-center col-span-full">Chargement...</p>
          ) : (
            visibleProjects.map((project, index) => (
              <a
                href={project.linkDeploy || "#"}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                  <img
                    className="rounded-t-lg w-full h-48 object-cover"
                    src={project.imageUrl}
                    alt={project.title}
                  />
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {project.title}
                    </h5>
                    <h2 className="inline-block px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-bold">
                      {project.post}
                    </h2>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.gitHubLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      GitHub
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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