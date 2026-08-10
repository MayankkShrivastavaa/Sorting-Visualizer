import React from "react";

const PlaybackControls = ({
  onStart,
  onPlay,
  onPause,
  onReset,
  sortOrder,
  setSortOrder,
}) => {
  return (
    <div className="flex items-center justify-between gap-4 rounded-md border border-stone-300 bg-white p-4 shadow-sm">
      {/* Playback Buttons */}
      <div className="flex items-center gap-3">
        <button
          className="rounded-md border border-stone-300 px-4 py-2 text-sm font-semibold text-slate-700 cursor-pointer hover:bg-emerald-600 hover:text-white focus-visible:bg-emerald-600 focus-visible:text-white focus-visible:outline-none"
          onClick={onPlay}
        >
          ▶ Start
        </button>

        <button
          className="rounded-md border border-stone-300 px-4 py-2 text-sm font-semibold text-slate-700 cursor-pointer hover:bg-emerald-600 hover:text-white focus-visible:bg-emerald-600 focus-visible:text-white focus-visible:outline-none"
          onClick={onPause}
        >
          ⏸ Pause
        </button>

        {/* <button className="rounded-md border border-stone-300 hover:bg-emerald-600  px-4 py-2 text-sm font-semibold text-slate-700 cursor-pointer">
          ■ Stop
        </button> */}

        <button
          className="rounded-md border border-stone-300 px-4 py-2 text-sm font-semibold text-slate-700 cursor-pointer hover:bg-emerald-600 hover:text-white focus-visible:bg-emerald-600 focus-visible:text-white focus-visible:outline-none"
          onClick={onReset}
        >
          ↻ Reset
        </button>
      </div>

      {/* Sorting Mode */}
      <div className="flex items-center gap-2">
        <h3 className="text-sm font-semibold text-slate-700">Mode</h3>

        <select
          className="border border-stone-300 rounded-md px-3 py-2 text-sm bg-white"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
    </div>
  );
};

export default PlaybackControls;
