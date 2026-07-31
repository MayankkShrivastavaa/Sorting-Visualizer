import React from "react";

const InformationPanel = () => {
  return (
    <div className="border-2 border-black rounded-md p-5 flex">

      {/* Current Step */}
      <div className="w-1/3 border-r pr-6">
        <h3 className="font-semibold text-lg mb-4">Current Step</h3>

        <p>Ready to start sorting...</p>
      </div>

      {/* Statistics */}
      <div className="w-1/3 border-r px-6">
        <h3 className="font-semibold text-lg mb-4">Statistics</h3>

        <div className="flex gap-4">
          <div className="border rounded-md p-3 text-center flex-1">
            <p>Comparisons</p>
            <h4 className="text-xl font-semibold">0</h4>
          </div>

          <div className="border rounded-md p-3 text-center flex-1">
            <p>Swaps</p>
            <h4 className="text-xl font-semibold">0</h4>
          </div>

          <div className="border rounded-md p-3 text-center flex-1">
            <p>Time Elapsed</p>
            <h4 className="text-xl font-semibold">00:00:00</h4>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="w-1/3 pl-6">
        <h3 className="font-semibold text-lg mb-4">Legend</h3>

        <div className="flex flex-col gap-2">
          <p>🟦 Unsorted</p>
          <p>🟥 Comparing</p>
          <p>🟨 Swapping</p>
          <p>🟩 Sorted</p>
        </div>
      </div>

    </div>
  );
};

export default InformationPanel;