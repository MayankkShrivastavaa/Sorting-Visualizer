import React, { useState } from "react";
import Header from "./components/Header";
import ControlPanel from "./components/ControlPanel";
import VisualizationaArea from "./components/VisualizationaArea";
import PlaybackControls from "./components/PlaybackControls";
import InformationPanel from "./components/InformationPanel";

const App = () => {
  const [values, setValues] = useState([15, 25, 36]);

  return (
    <div className="min-h-screen bg-stone-100 px-4 py-4 text-slate-800 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-3 text-center">
        <Header />
      </div>

      {/* Control Panel */}
      <div className="mb-3 w-full rounded-md border border-stone-300 bg-white p-4 shadow-sm">
        <ControlPanel setValues={setValues} />
      </div>

      {/* Visualization Area */}
      <div className="mb-3">
        <VisualizationaArea value={values} />
      </div>

      {/* Playback Controls */}
      <div className="mb-3">
        <PlaybackControls />
      </div>

      <div>
        <InformationPanel />
      </div>
    </div>
  );
};

export default App;
