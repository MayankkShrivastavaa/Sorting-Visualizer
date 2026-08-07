import React, { useEffect } from "react";

const VisualizationArea = ({ value, currentOperation }) => {
  let values = value;

  // Finding the largest value in the array
  let maxValue = Math.max(...values);

  return (
    <div className="rounded-md border border-stone-300 bg-white p-3 shadow-sm">
      <div className="flex h-64 items-end justify-center gap-2 border border-stone-200 bg-stone-50 px-3 py-4">
        {values.map((value, index) => {
          // Converting the value into percentage height
          let heightPercentage = (value / maxValue) * 100;

          const isComparing =
            currentOperation &&
            currentOperation.type === "compare" &&
            (index === currentOperation.index1 ||
              index === currentOperation.index2);

          const isMinimum =
            currentOperation &&
            currentOperation.type === "selectMin" &&
            index === currentOperation.index;

          const isPivot =
            currentOperation &&
            currentOperation.type === "pivot" &&
            index === currentOperation.index;

          return (
            <div
              key={index}
              className={`w-8 ${
                isPivot
                  ? "bg-yellow-500"
                  : isMinimum
                    ? "bg-green-500"
                    : isComparing
                      ? "bg-red-500"
                      : "bg-sky-500"
              }`}
              style={{ height: `${heightPercentage}%` }}
            ></div>
          );
        })}
      </div>

      {/* {console.log(value)}
      {useEffect(() => {
        console.log("Visualization received:", value);
      }, [value])} */}
    </div>
  );
};

export default VisualizationArea;
