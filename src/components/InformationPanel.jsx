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
    <div className="flex rounded-md border border-[#353044] bg-[#1D1A27] p-4 shadow-sm">
      {/* Algorithm Complexity */}
      <div className="w-1/2 border-r border-[#353044] pr-4">
        <h3 className="mb-3 text-sm font-semibold text-[#F5F1FA]">
          Algorithm Complexity
        </h3>

        <div className="flex flex-col gap-2 text-sm text-[#AAA3B8]">
          <p className="flex justify-between">
            <span>Best Case</span>
            <span className="font-semibold text-[#F5F1FA]">
              {selectedComplexity.best}
            </span>
          </p>
          <p className="flex justify-between">
            <span>Average Case</span>
            <span className="font-semibold text-[#F5F1FA]">
              {selectedComplexity.average}
            </span>
          </p>
          <p className="flex justify-between">
            <span>Worst Case</span>
            <span className="font-semibold text-[#F5F1FA]">
              {selectedComplexity.worst}
            </span>
          </p>
          <p className="flex justify-between">
            <span>Space Complexity</span>
            <span className="font-semibold text-[#F5F1FA]">
              {selectedComplexity.space}
            </span>
          </p>
        </div>
      </div>

      {/* Statistics */}
      <div className="w-1/2 pl-4">
        <h3 className="mb-3 text-sm font-semibold text-[#F5F1FA]">
          Statistics
        </h3>

        <div className="flex gap-2">
          <div className="flex-1 rounded-md border border-[#353044] bg-[#252131] p-2 text-center">
            <p className="text-xs text-[#AAA3B8]">Comparisons</p>
            <h4 className="text-sm font-semibold text-[#F5F1FA]">
              {comparisons}
            </h4>
          </div>

          {selectedAlgo === "Merge" ? (
            <div className="flex-1 rounded-md border border-[#353044] bg-[#252131] p-2 text-center">
              <p className="text-xs text-[#AAA3B8]">Overwrites</p>
              <h4 className="text-sm font-semibold text-[#F5F1FA]">
                {overwrites}
              </h4>
            </div>
          ) : (
            <div className="flex-1 rounded-md border border-[#353044] bg-[#252131] p-2 text-center">
              <p className="text-xs text-[#AAA3B8]">Swaps</p>
              <h4 className="text-sm font-semibold text-[#F5F1FA]">{swaps}</h4>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default InformationPanel;
