import React, { useState } from "react";

const ControlPanel = ({
  setValues,
  selectedAlgo,
  setSelectedAlgo,
  speed,
  setSpeed,
  onAlgorithmChange,
}) => {
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
    onAlgorithmChange();
    setValues(temp);
  };

  // Generate array using custom user input
  const customArray = () => {
    let arr = arrayInput.split(",");

    let numbers = arr.map((value) => {
      return Number(value);
    });
    onAlgorithmChange();
    setValues(numbers);
  };

  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      {/* Algorithm Selection */}
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-[#F5F1FA]">Algorithm</h3>

        <select
          name="sort-techniques"
          id="sort-techniques"
          className="rounded-md border border-[#353044] bg-[#252131] px-3 py-2 text-sm text-[#F5F1FA] transition-colors hover:border-purple-300 hover:bg-[#2D2738] focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={selectedAlgo}
          onChange={(e) => {
            onAlgorithmChange();
            setSelectedAlgo(e.target.value);
          }}
        >
          <option value="Bubble">Bubble Sort</option>
          <option value="Selection">Selection Sort</option>
          <option value="Insertion">Insertion Sort</option>
          <option value="Quick">Quick Sort</option>
          <option value="Merge">Merge Sort</option>
        </select>
      </div>

      {/* Array Size */}
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-[#F5F1FA]">
          Array Size: {arraySize}
        </h3>

        <input
          type="range"
          min="3"
          max="50"
          value={arraySize}
          onChange={(e) => setArraySize(Number(e.target.value))}
          className="accent-purple-400"
        />
      </div>

      {/* Speed */}
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-[#F5F1FA]">Speed</h3>

        <input
          type="range"
          min="50"
          max="1000"
          className="accent-purple-400"
          value={50 + 1000 - speed}
          onChange={(e) => setSpeed(50 + 1000 - Number(e.target.value))}
        />
      </div>

      {/* Generate Random Array */}
      <button
        className="cursor-pointer rounded-md border border-purple-400/70 bg-[#252131] px-4 py-2 text-sm font-semibold text-[#F5F1FA] transition-colors hover:border-purple-300 hover:bg-[#2D2738] focus:outline-none focus:ring-2 focus:ring-purple-400"
        onClick={generateRandomArray}
      >
        Generate Random Array
      </button>

      {/* Custom Array Input */}
      <div className="flex items-end gap-3">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-[#F5F1FA]">Array Input</h3>

          <input
            type="text"
            placeholder="e.g. 5, 2, 9, 1, 6"
            className="rounded-md border border-[#353044] bg-[#252131] px-3 py-2 text-sm text-[#F5F1FA] placeholder:text-[#AAA3B8] focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={arrayInput}
            onChange={(e) => setArrayInput(e.target.value)}
          />
        </div>

        {/* Use Custom Array */}
        <button
          className="cursor-pointer rounded-md bg-purple-400 px-4 py-2 text-sm font-semibold text-[#1D1A27] transition-colors hover:bg-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
          onClick={customArray}
        >
          Use Custom Array
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
