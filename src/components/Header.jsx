import React from "react";

const Header = () => {
  return (
    <div className="rounded-md border border-stone-300 bg-white px-4 py-3 shadow-sm sm:px-5 sm:py-4">
      <h1 className="text-xl font-semibold text-slate-800">
        Sorting Visualizer
      </h1>
      <p className="text-sm text-slate-600">
        Visualize how sorting algorithms work step by step.
      </p>
    </div>
  );
};

export default Header;
