import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowAltCircleRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* LOGO + tagline */}
          <div>
            <div className="text-xl font-bold text-zinc-800 dark:text-zinc-100 tracking-tight mb-2">
              THE-
              <span className="text-cyan-700 dark:text-cyan-500">
                KHALIL-BAIDOURI
              </span>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xs">
              FullStack Developer — Java & React.
              <br />
              Disponible pour des missions freelance.
            </p>
          </div>

          {/* NAV */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-3">
              Navigation
            </p>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              {["Home", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-cyan-700 dark:hover:text-cyan-400 transition duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-3">
              Contact
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              khalilbaidouri97@gmail.com
            </p>
            <Link to="/form">
              <button className="flex gap-2 items-center px-6 py-2.5 bg-black dark:bg-zinc-100 rounded-full text-white dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-white transition duration-300 font-medium text-sm">
                Vos Questions
                <FaArrowAltCircleRight />
              </button>
            </Link>
          </div>

          {/* SOCIAL */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-3">
              Réseaux
            </p>
            <div className="flex gap-4 text-xl text-zinc-600 dark:text-zinc-400">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-900 dark:hover:text-white transition duration-200"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-600 dark:hover:text-cyan-400 transition duration-200"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:khalilbaidouri97@gmail.com"
                className="hover:text-zinc-900 dark:hover:text-white transition duration-200"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER + BOTTOM */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 mt-10 pt-6 text-center text-sm text-zinc-400 dark:text-zinc-500">
          © 2026 Khalil Baidouri. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
