import React from "react";

const VisualizationArea = ({ value }) => {
  let values = value;

  // Finding the largest value in the array
  let maxValue = Math.max(...values);

  return (
    <div className="rounded-md border border-stone-300 bg-white p-3 shadow-sm">
      <div className="flex h-64 items-end justify-center gap-2 border border-stone-200 bg-stone-50 px-3 py-4">
        {values.map((value, index) => {
          // Converting the value into percentage height
          let heightPercentage = (value / maxValue) * 100;

          return (
            <div
              key={index}
              className="w-6 bg-sky-400"
              style={{ height: `${heightPercentage}%` }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default VisualizationArea;
