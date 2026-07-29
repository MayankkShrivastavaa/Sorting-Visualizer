import React from "react";
import Header from "./components/Header";
import ControlPanel from "./components/ControlPanel";

const App = () => {
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
    </div>
  );
};

export default App;
