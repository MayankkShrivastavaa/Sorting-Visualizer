import React from "react";

const VisualizationArea = ({value}) => {
  let values = value ;

  // Finding the largest value in the array
  let maxValue = Math.max(...values);

  return (
    <div>
      <div className="border-2 border-black h-65 flex justify-center items-end gap-3 px-4">

        {values.map((value, index) => {

          // Converting the value into percentage height
          let heightPercentage = (value / maxValue) * 100;

          return (
            <div
              key={index}
              className="w-8 bg-blue-400"
              style={{ height: `${heightPercentage}%` }}
            ></div>
          );
        })}

      </div>
    </div>
  );
};

export default VisualizationArea;