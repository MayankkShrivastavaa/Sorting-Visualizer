import React from "react";

const ControlPanel = () => {

  const generateArray = () => {
    

  };

  return (
    <div className="flex items-end justify-between gap-8 p-6">
      {/* Algorithm Selection */}
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold">Algorithm</h3>

        <select
          name="sort-techniques"
          id="sort-techniques"
          className="border rounded-md px-3 py-2"
        >
          <option value="Bubble">Bubble Sort</option>
          <option value="Quick">Quick Sort</option>
          <option value="Merge">Merge Sort</option>
          <option value="Selection">Selection Sort</option>
        </select>
      </div>

      {/* Array Size */}
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold">Array Size</h3>

        <input type="range" min="5" max="100" />
      </div>

      {/* Speed */}
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold">Speed</h3>

        <input type="range" min="50" max="2000" />
      </div>

      {/* Custom Array Input */}
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold">Array Input</h3>

        <input
          type="text"
          placeholder="e.g. 5, 2, 9, 1, 6"
          className="border rounded-md px-3 py-2"
        />
      </div>

      {/* Generate Array Button */}
      <button
        className="border rounded-md px-5 py-2 font-semibold cursor-pointer"
        onClick={generateArray}
      >
        Generate Array
      </button>
    </div>
  );
};

export default ControlPanel;
