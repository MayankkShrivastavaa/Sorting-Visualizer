import React, { useState } from "react";
import Header from "./components/Header";
import ControlPanel from "./components/ControlPanel";
import VisualizationaArea from "./components/VisualizationaArea";

const App = () => {

  const [value, setValue] = useState([]);


  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="text-center">
        <Header />
      </div>

      {/* Control Panel */}
      <div className="w-full h-30 border-2 border-black rounded-md">
        <ControlPanel />
      </div>

      {/* Visualization Area */}
      <div className="mt-1.5">
        <VisualizationaArea/>
      </div>

    </div>
  );
};

export default App;
