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
    <div className="flex items-center justify-between gap-4 rounded-md border border-[#353044] bg-[#1D1A27] p-4 shadow-sm">
      {/* Playback Buttons */}
      <div className="flex items-center gap-3">
        <button
          className="cursor-pointer rounded-md border border-[#353044] bg-[#252131] px-4 py-2 text-sm font-semibold text-[#F5F1FA] transition-colors hover:border-purple-300 hover:bg-purple-400 hover:text-[#1D1A27] focus-visible:bg-purple-400 focus-visible:text-[#1D1A27] focus-visible:outline-none"
          onClick={onPlay}
        >
          ▶ Start
        </button>

        <button
          className="cursor-pointer rounded-md border border-[#353044] bg-[#252131] px-4 py-2 text-sm font-semibold text-[#F5F1FA] transition-colors hover:border-purple-300 hover:bg-purple-400 hover:text-[#1D1A27] focus-visible:bg-purple-400 focus-visible:text-[#1D1A27] focus-visible:outline-none"
          onClick={onPause}
        >
          ⏸ Pause
        </button>

        {/* <button className="rounded-md border border-stone-300 hover:bg-emerald-600  px-4 py-2 text-sm font-semibold text-slate-700 cursor-pointer">
          ■ Stop
        </button> */}

        <button
          className="cursor-pointer rounded-md border border-[#353044] bg-[#252131] px-4 py-2 text-sm font-semibold text-[#F5F1FA] transition-colors hover:border-purple-300 hover:bg-purple-400 hover:text-[#1D1A27] focus-visible:bg-purple-400 focus-visible:text-[#1D1A27] focus-visible:outline-none"
          onClick={onReset}
        >
          ↻ Reset
        </button>
      </div>

      {/* Sorting Mode */}
      <div className="flex items-center gap-2">
        <h3 className="text-sm font-semibold text-[#F5F1FA]">Mode</h3>

        <select
          className="rounded-md border border-[#353044] bg-[#252131] px-3 py-2 text-sm text-[#F5F1FA] transition-colors hover:border-purple-300 hover:bg-[#2D2738] focus:outline-none focus:ring-2 focus:ring-purple-400"
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
