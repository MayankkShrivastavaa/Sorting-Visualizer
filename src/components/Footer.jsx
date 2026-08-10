import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-3 border-t border-[#353044] py-4 text-center">
      <h3 className="text-sm font-semibold text-[#F5F1FA]">
        Sorting Visualizer
      </h3>

      <p className="mt-1 text-sm text-[#AAA3B8]">
        An interactive educational tool for understanding sorting algorithms.
      </p>

      <p className="mt-1 text-xs text-[#AAA3B8]">
        Built with React, Tailwind CSS, and JavaScript
      </p>

      <div className="mt-3 flex justify-center gap-5 text-[#AAA3B8]">
        <a
          className="p-1 transition-colors hover:text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          href="https://github.com/MayankkShrivastavaa"
          aria-label="GitHub"
        >
          <FaGithub className="h-5 w-5" aria-hidden="true" />
        </a>
        <a
          className="p-1 transition-colors hover:text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          href="https://www.linkedin.com/in/mayank-shrivastava-4bb4473a5/"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="h-5 w-5" aria-hidden="true" />
        </a>
        <a
          className="p-1 transition-colors hover:text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          href="mailto:shrivastava.mayank.me@gmail.com"
          aria-label="Email"
        >
          <FaEnvelope className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>

      <p className="mt-3 text-xs text-[#AAA3B8]">
        © 2026 Mayank Shrivastava. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
