import React, { useEffect } from "react";

const VisualizationArea = ({ value, currentOperation, selectedAlgo }) => {
  let values = value;
  const showPivot = selectedAlgo === "Quick";
  const showCurrentMinimum = selectedAlgo === "Selection";

  // Finding the largest value in the array
  let maxValue = Math.max(...values);

  return (
    <div className="rounded-md border border-stone-300 bg-white p-3 shadow-sm">
      <div className="overflow-x-auto overflow-y-hidden border border-stone-200 bg-stone-50">
        <div className="flex h-72 justify-center gap-2 px-3 py-4 min-w-min">
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
                className="flex h-full w-8 flex-shrink-0 flex-col items-center pt-4"
              >
                <div className="flex flex-1 w-full items-end">
                  <div
                    className={`relative w-full ${
                      isPivot
                        ? "bg-yellow-500"
                        : isMinimum
                          ? "bg-green-500"
                          : isComparing
                            ? "bg-red-500"
                            : "bg-sky-500"
                    }`}
                    style={{ height: `${heightPercentage}%` }}
                  >
                    <span className="absolute bottom-full left-0 right-0 text-center text-xs font-bold text-slate-800">
                      {value}
                    </span>
                  </div>
                </div>

                <span className="text-xs text-slate-500">{index}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Visual States */}
      <div className="mt-3">
        <h3 className="mb-2 text-sm font-semibold text-slate-700">
          Visual States
        </h3>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
          <p className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-sm bg-sky-500"></span>
            Default
          </p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-sm bg-red-500"></span>
            Comparing
          </p>
          {showPivot && (
            <p className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-sm bg-yellow-500"></span>
              Pivot
            </p>
          )}
          {showCurrentMinimum && (
            <p className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-sm bg-green-500"></span>
              Current Minimum
            </p>
          )}
        </div>
      </div>

      {/* {console.log(value)}
      {useEffect(() => {
        console.log("Visualization received:", value);
      }, [value])} */}
    </div>
  );
};

export default VisualizationArea;
