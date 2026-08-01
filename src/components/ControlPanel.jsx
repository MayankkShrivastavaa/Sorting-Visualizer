import React, { useState } from "react";

const ControlPanel = ({ setValues }) => {
  // State for custom array input
  const [arrayInput, setArrayInput] = useState("");

  // State for array size slider
  const [arraySize, setArraySize] = useState(20);

  // Generate random array according to selected array size
  const generateRandomArray = () => {
    let temp = [];
    for (let i = 0; i < arraySize; i++) {
      let randomValue = Math.floor(Math.random() * 100) + 1;
      temp.push(randomValue);
    }

    setValues(temp);
  };

  // Generate array using custom user input
  const customArray = () => {
    let arr = arrayInput.split(",");

    let numbers = arr.map((value) => {
      return Number(value);
    });

    setValues(numbers);
  };

  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      {/* Algorithm Selection */}
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-slate-700">Algorithm</h3>

        <select
          name="sort-techniques"
          id="sort-techniques"
          className="border border-stone-300 rounded-md px-3 py-2 text-sm bg-white"
        >
          <option value="Bubble">Bubble Sort</option>
          <option value="Quick">Quick Sort</option>
          <option value="Merge">Merge Sort</option>
          <option value="Selection">Selection Sort</option>
        </select>
      </div>

      {/* Array Size */}
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-slate-700">
          Array Size: {arraySize}
        </h3>

        <input
          type="range"
          min="5"
          max="100"
          value={arraySize}
          onChange={(e) => setArraySize(Number(e.target.value))}
          className="accent-emerald-600"
        />
      </div>

      {/* Speed */}
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-slate-700">Speed</h3>

        <input
          type="range"
          min="50"
          max="2000"
          className="accent-emerald-600"
        />
      </div>

      {/* Custom Array Input */}
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-slate-700">Array Input</h3>

        <input
          type="text"
          placeholder="e.g. 5, 2, 9, 1, 6"
          className="border border-stone-300 rounded-md px-3 py-2 text-sm bg-white"
          value={arrayInput}
          onChange={(e) => setArrayInput(e.target.value)}
        />
      </div>

      {/* Generate Random Array */}
      <button
        className="border border-stone-300 rounded-md px-4 py-2 text-sm font-semibold cursor-pointer bg-white text-slate-700"
        onClick={generateRandomArray}
      >
        Generate Random Array
      </button>

      {/* Use Custom Array */}
      <button
        className="rounded-md px-4 py-2 text-sm font-semibold cursor-pointer bg-emerald-600 text-white"
        onClick={customArray}
      >
        Use Custom Array
      </button>
    </div>
  );
};

export default ControlPanel;
