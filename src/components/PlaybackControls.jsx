import React from "react";

const PlaybackControls = () => {
  return (
    <div className="border-2 border-black rounded-md p-5 flex items-center justify-between">

      {/* Playback Buttons */}
      <div className="flex items-center gap-4">

        <button className="px-6 py-2 rounded-md bg-green-500 text-white font-semibold cursor-pointer">
          ▶ Start
        </button>

        <button className="px-6 py-2 rounded-md bg-yellow-500 text-white font-semibold cursor-pointer">
          ⏸ Pause
        </button>

        <button className="px-6 py-2 rounded-md bg-red-500 text-white font-semibold cursor-pointer">
          ■ Stop
        </button>

        <button className="px-6 py-2 rounded-md bg-purple-500 text-white font-semibold cursor-pointer">
          ↻ Reset
        </button>

      </div>

      {/* Sorting Mode */}
      <div className="flex items-center gap-3">

        <h3 className="font-semibold">Mode</h3>

        <select className="border rounded-md px-4 py-2">
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>

      </div>

    </div>
  );
};

export default PlaybackControls;