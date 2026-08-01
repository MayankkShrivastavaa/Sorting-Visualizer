import React from "react";

const InformationPanel = () => {
  return (
    <div className="flex rounded-md border border-stone-300 bg-white p-4 shadow-sm">
      {/* Current Step */}
      <div className="w-1/3 border-r border-stone-200 pr-4">
        <h3 className="mb-3 text-sm font-semibold text-slate-700">
          Current Step
        </h3>

        <p className="text-sm text-slate-600">Ready to start sorting...</p>
      </div>

      {/* Statistics */}
      <div className="w-1/3 border-r border-stone-200 px-4">
        <h3 className="mb-3 text-sm font-semibold text-slate-700">
          Statistics
        </h3>

        <div className="flex gap-2">
          <div className="flex-1 rounded-md border border-stone-200 p-2 text-center">
            <p className="text-xs text-slate-500">Comparisons</p>
            <h4 className="text-sm font-semibold text-slate-800">0</h4>
          </div>

          <div className="flex-1 rounded-md border border-stone-200 p-2 text-center">
            <p className="text-xs text-slate-500">Swaps</p>
            <h4 className="text-sm font-semibold text-slate-800">0</h4>
          </div>

          <div className="flex-1 rounded-md border border-stone-200 p-2 text-center">
            <p className="text-xs text-slate-500">Time Elapsed</p>
            <h4 className="text-sm font-semibold text-slate-800">00:00:00</h4>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="w-1/3 pl-4">
        <h3 className="mb-3 text-sm font-semibold text-slate-700">Legend</h3>

        <div className="flex flex-col gap-2 text-sm text-slate-600">
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
