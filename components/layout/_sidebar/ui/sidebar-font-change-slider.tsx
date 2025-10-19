"use client";

import React from "react";

export default function SidebarFontChangeSlider({
  fontSize,
  setFontSize,
}: {
  fontSize: number;
  setFontSize: React.Dispatch<React.SetStateAction<number>>;
}) {
  const min = 12;
  const max = 20;
  const pct = ((fontSize - min) / (max - min)) * 100;

  return (
    <div className="w-full">
      <div className="relative px-3 py-4">
        {/* tooltip (dark pill) that touches the line */}
        <div
          aria-hidden
          className="absolute -top-6 pointer-events-none flex flex-col items-center rounded-2xl"
          style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
        >
          <div className="bg-slate-800 text-white dark:bg-white dark:text-black text-xs font-semibold rounded-full px-3 py-1 shadow-sm select-none">
            {fontSize}px
          </div>
        </div>

        {/* range input with filled-progress + ticks (ticks drawn with repeating-linear-gradient) */}
        <input
          aria-label="Font size"
          type="range"
          min={min}
          max={max}
          step={1}
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
          className="w-full h-3 appearance-none rounded-full focus:outline-none"
          style={{
            // ticks on top, then the colored fill + unfilled track
            backgroundImage: `repeating-linear-gradient(to right, rgba(0,0,0,0.14) 0 1px, transparent 1px 20px), linear-gradient(90deg, #34d399 ${pct}%, #e5e7eb ${pct}%)`,
            backgroundSize: "auto, 100% 100%",
          }}
        />

        <style jsx>{`
          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: white;
            border: 3px solid #0f172a; /* dark ring */
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
            margin-top: -8px; /* center on track */
            cursor: pointer;
          }
          input[type="range"]::-webkit-slider-runnable-track {
            height: 8px;
            border-radius: 9999px;
          }
          input[type="range"]::-moz-range-thumb {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: white;
            border: 3px solid #0f172a;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
            cursor: pointer;
          }
          input[type="range"]::-moz-range-track {
            height: 8px;
            border-radius: 9999px;
            background: transparent;
          }
          /* focus glow */
          input[type="range"]:focus::-webkit-slider-thumb {
            box-shadow: 0 0 0 6px rgba(34, 197, 94, 0.12);
          }
        `}</style>
      </div>
    </div>
  );
}
