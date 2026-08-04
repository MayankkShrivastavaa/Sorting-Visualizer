import React from "react";

const PlaybackControls = ({onStart}) => {

  
  return (
    <div className="flex items-center justify-between gap-4 rounded-md border border-stone-300 bg-white p-4 shadow-sm">
      {/* Playback Buttons */}
      <div className="flex items-center gap-3">
        <button className="rounded-md border border-stone-300 hover:bg-emerald-600 px-4 py-2 text-sm font-semibold text-slate-700 cursor-pointer" onClick={onStart}>
          ▶ Start
        </button>

        <button className="rounded-md border border-stone-300 hover:bg-emerald-600  px-4 py-2 text-sm font-semibold text-slate-700 cursor-pointer">
          ⏸ Pause
        </button>

        <button className="rounded-md border border-stone-300 hover:bg-emerald-600  px-4 py-2 text-sm font-semibold text-slate-700 cursor-pointer">
          ■ Stop
        </button>

        <button className="rounded-md border border-stone-300 hover:bg-emerald-600 px-4 py-2 text-sm font-semibold text-slate-700 cursor-pointer">
          ↻ Reset
        </button>
      </div>

      {/* Sorting Mode */}
      <div className="flex items-center gap-2">
        <h3 className="text-sm font-semibold text-slate-700">Mode</h3>

        <select className="border border-stone-300 rounded-md px-3 py-2 text-sm bg-white">
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
    </div>
  );
};

export default PlaybackControls;
