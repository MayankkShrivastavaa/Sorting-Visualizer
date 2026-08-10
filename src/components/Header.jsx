import React from "react";

const Header = () => {
  return (
    <div className="rounded-md border border-[#353044] bg-[#1D1A27] px-4 py-3 shadow-sm sm:px-5 sm:py-4">
      <h1 className="text-xl font-semibold text-[#F5F1FA]">
        Sorting Visualizer
      </h1>
      <p className="text-sm text-[#AAA3B8]">
        Visualize how sorting algorithms work step by step.
      </p>
    </div>
  );
};

export default Header;
