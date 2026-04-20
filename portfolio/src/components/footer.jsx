import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* LOGO */}
          <div className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            THE-
            <span className="text-teal-700 dark:text-teal-400">
              KHALIL-BAIDOURI
            </span>
          </div>

          {/* BUTTON QUESTIONS */}
          <Link
            to="/form"
            className="px-6 py-3 rounded-full bg-teal-700 text-white hover:bg-teal-800 transition duration-300"
          >
            Vos Questions
          </Link>

          {/* SOCIAL */}
          <div className="flex gap-4 text-2xl text-zinc-700 dark:text-zinc-300">
            <a href="https://github.com/" target="_blank">
              <FaGithub />
            </a>

            <a href="https://linkedin.com/" target="_blank">
              <FaLinkedin />
            </a>

            <a href="mailto:youremail@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="text-center text-sm text-zinc-500 dark:text-zinc-400 mt-8">
          © 2026 Khalil Baidouri. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
