import React, { useState } from "react";
import Header from "./components/Header";
import ControlPanel from "./components/ControlPanel";
import VisualizationaArea from "./components/VisualizationaArea";
import PlaybackControls from "./components/PlaybackControls";
import InformationPanel from "./components/InformationPanel";

const App = () => {

  const [values, setValues] = useState([15,25,36]);


  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="text-center">
        <Header />
      </div>

      {/* Control Panel */}
      <div className="w-full h-30 border-2 border-black rounded-md">
        <ControlPanel setValues = {setValues} />
      </div>

      {/* Visualization Area */}
      <div className="mt-1.5">
        <VisualizationaArea value = {values}/>
      </div>

       {/* Playback Controls */}
      <div className="mt-1.5">
        <PlaybackControls/>
      </div>

      <div className="mt-1.5">
        <InformationPanel/>
      </div>

    </div>
  );
};

export default App;
