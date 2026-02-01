import React from "react";
import { certificationsData } from "../assets/me";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-20 bg-gray-50 dark:bg-black text-gray-900 dark:text-white"
    >
      <h2 className="text-3xl font-bold text-center mb-10">Certifications</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {certificationsData.map((cert, index) => (
          <a
            href={cert.link || "#"}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
              <img
                className="rounded-lg w-full h-48 object-cover"
                src={cert.imge}
                alt={cert.title}
              />

              <div className="p-5 text-center">
                <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {cert.title}
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {cert.description}
                </p>

                <a
                  href={cert.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Voir
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
        ))}
      </div>
    </section>
  );
};

export default Certifications;
