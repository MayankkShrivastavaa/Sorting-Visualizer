import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ControlPanel from "./components/ControlPanel";
import VisualizationaArea from "./components/VisualizationaArea";
import PlaybackControls from "./components/PlaybackControls";
import InformationPanel from "./components/InformationPanel";

import bubbleSort from "./algorithms/bubbleSort";
import selectionSort from "./algorithms/selectionSort";
import insertionSort from "./algorithms/insertionSort";

const App = () => {
  const [values, setValues] = useState([15, 36, 25, 21, 30]);
  const [selectedAlgo, setSelectedAlgo] = useState("Bubble");
  const [currentOperation, setCurrentOperation] = useState(null);
  const [operations, setOperations] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [speed, setSpeed] = useState(500);
  const [status, setStatus] = useState("stopped"); // "running", "paused", "stopped"
  const [originalValues, setOriginalValues] = useState([]);

  const handleStartSorting = () => {
    setOriginalValues([...values]);
    let generatedOperations = [];
    switch (selectedAlgo) {
      case "Bubble":
        // Generate all compare & swap operations
        generatedOperations = bubbleSort([...values]);
        break;

      case "Selection":
        generatedOperations = selectionSort([...values]);
        break;

      case "Insertion":
        generatedOperations = insertionSort([...values]);
        break;

      case "Merge":
        break;

      case "Quick":
        break;

      default:
        break;
    }
    setOperations(generatedOperations);
    setCurrentStep(0);
  };

  const handlePlay = () => {
    if (status === "stopped") {
      handleStartSorting();
    }

    setStatus("running");
  };

  const handlePause = () => {
    setStatus("paused");
  };

  const handleReset = () => {
    setStatus("stopped");

    setCurrentStep(0);

    setCurrentOperation(null);

    setOperations([]);

    if (originalValues.length > 0) {
      setValues([...originalValues]);
    }
  };

  // useEffect(() => {

  //   if (operations.length === 0) return;

  //   const interval = setInterval(() => {
  //     setCurrentStep((prevStep) => {
  //       if (prevStep >= operations.length) {
  //         clearInterval(interval);
  //         return prevStep;
  //       }

  //       const operation = operations[prevStep];

  //       // Highlight current comparison
  //       setCurrentOperation(operation);

  //       // Perform swap if needed
  //       if (operation.type === "swap") {
  //         console.log("SWAP OPERATION:", operation);

  //         setValues((prevValues) => {
  //           console.log("Before:", prevValues);
  //           const newValues = [...prevValues];

  //           const temp = newValues[operation.index1];
  //           newValues[operation.index1] = newValues[operation.index2];
  //           newValues[operation.index2] = temp;
  //           console.log("After:", newValues);
  //           return newValues;
  //         });
  //       }

  //       return prevStep + 1;
  //     });
  //   }, 500);

  //   return () => clearInterval(interval);
  // }, [operations]);
  useEffect(() => {
    if (status !== "running") return;

    if (operations.length === 0) return;

    if (currentStep >= operations.length) return;

    const interval = setInterval(() => {
      const operation = operations[currentStep];

      setCurrentOperation(operation);

      if (operation.type === "swap") {
        setValues((prevValues) => {
          const newValues = [...prevValues];

          const temp = newValues[operation.index1];

          newValues[operation.index1] = newValues[operation.index2];

          newValues[operation.index2] = temp;

          return newValues;
        });
      }

      setCurrentStep(currentStep + 1);
      // setCurrentStep(prev => prev + 1);
    }, speed);

    return () => clearInterval(interval);
  }, [currentStep, operations, speed, status]);

  return (
    <div className="min-h-screen bg-stone-100 px-4 py-4 text-slate-800 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-3 text-center">
        <Header />
      </div>

      {/* Control Panel */}
      <div className="mb-3 w-full rounded-md border border-stone-300 bg-white p-4 shadow-sm">
        <ControlPanel
          setValues={setValues}
          selectedAlgo={selectedAlgo}
          setSelectedAlgo={setSelectedAlgo}
          speed={speed}
          setSpeed={setSpeed}
        />
      </div>

      {/* Visualization Area */}
      <div className="mb-3">
        <VisualizationaArea
          value={values}
          currentOperation={currentOperation}
        />
      </div>

      {/* Playback Controls */}
      <div className="mb-3">
        <PlaybackControls
          onStart={handleStartSorting}
          onPlay={handlePlay}
          onPause={handlePause}
          onReset={handleReset}
        />
      </div>

      {/* Information Panel */}
      <div>
        <InformationPanel />
      </div>
    </div>
  );
};

export default App;
