import React from "react";

const InformationPanel = ({ selectedAlgo, operations, currentStep }) => {
  const playedOperations = operations.slice(0, currentStep);
  const comparisons = playedOperations.filter(
    (operation) => operation.type === "compare"
  ).length;
  const swaps = playedOperations.filter(
    (operation) => operation.type === "swap").length;
  const overwrites = playedOperations.filter(
    (operation) => operation.type === "overwrite"
  ).length;

  const complexity = {
    Bubble: {
      best: "O(n)",
      average: "O(n²)",
      worst: "O(n²)",
      space: "O(1)",
    },
    Selection: {
      best: "O(n²)",
      average: "O(n²)",
      worst: "O(n²)",
      space: "O(1)",
    },
    Insertion: {
      best: "O(n)",
      average: "O(n²)",
      worst: "O(n²)",
      space: "O(1)",
    },
    Merge: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n log n)",
      space: "O(n)",
    },
    Quick: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n²)",
      space: "O(log n)",
    },
  };

  const selectedComplexity = complexity[selectedAlgo];

  return (
    <div className="flex rounded-md border border-stone-300 bg-white p-4 shadow-sm">
      {/* Algorithm Complexity */}
      <div className="w-1/2 border-r border-stone-200 pr-4">
        <h3 className="mb-3 text-sm font-semibold text-slate-700">
          Algorithm Complexity
        </h3>

        <div className="flex flex-col gap-2 text-sm text-slate-600">
          <p className="flex justify-between">
            <span>Best Case</span>
            <span className="font-semibold text-slate-800">
              {selectedComplexity.best}
            </span>
          </p>
          <p className="flex justify-between">
            <span>Average Case</span>
            <span className="font-semibold text-slate-800">
              {selectedComplexity.average}
            </span>
          </p>
          <p className="flex justify-between">
            <span>Worst Case</span>
            <span className="font-semibold text-slate-800">
              {selectedComplexity.worst}
            </span>
          </p>
          <p className="flex justify-between">
            <span>Space Complexity</span>
            <span className="font-semibold text-slate-800">
              {selectedComplexity.space}
            </span>
          </p>
        </div>
      </div>

      {/* Statistics */}
      <div className="w-1/2 pl-4">
        <h3 className="mb-3 text-sm font-semibold text-slate-700">
          Statistics
        </h3>

        <div className="flex gap-2">
          <div className="flex-1 rounded-md border border-stone-200 p-2 text-center">
            <p className="text-xs text-slate-500">Comparisons</p>
            <h4 className="text-sm font-semibold text-slate-800">
              {comparisons}
            </h4>
          </div>

          {selectedAlgo === "Merge" ? (
            <div className="flex-1 rounded-md border border-stone-200 p-2 text-center">
              <p className="text-xs text-slate-500">Overwrites</p>
              <h4 className="text-sm font-semibold text-slate-800">
                {overwrites}
              </h4>
            </div>
          ) : (
            <div className="flex-1 rounded-md border border-stone-200 p-2 text-center">
              <p className="text-xs text-slate-500">Swaps</p>
              <h4 className="text-sm font-semibold text-slate-800">{swaps}</h4>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default InformationPanel;
