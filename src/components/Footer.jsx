import React from "react";

const Footer = () => {
  return (
    <footer className="mt-3 border-t border-stone-300 py-4 text-center">
      <h3 className="text-sm font-semibold text-slate-700">
        Sorting Visualizer
      </h3>

      <p className="mt-1 text-sm text-slate-600">
        An interactive educational tool for understanding sorting algorithms.
      </p>

      <p className="mt-1 text-xs text-slate-500">
        Built with React, Tailwind CSS, and JavaScript
      </p>

      <div className="mt-3 flex justify-center gap-4 text-sm text-slate-600">
        <a className="hover:text-slate-800" href="#">
          GitHub
        </a>
        <a className="hover:text-slate-800" href="#">
          LinkedIn
        </a>
        <a className="hover:text-slate-800" href="#">
          Email
        </a>
      </div>

      <p className="mt-3 text-xs text-slate-500">
        © 2026 Mayank Shrivastava. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
