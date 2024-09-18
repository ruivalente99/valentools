// app/components/BoxShadowGenerator.tsx
"use client";

import React, { useState } from "react";

const BoxShadowGenerator: React.FC = () => {
  const [hOffset, setHOffset] = useState(0);
  const [vOffset, setVOffset] = useState(0);
  const [blur, setBlur] = useState(5);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState("#000000");
  const [inset, setInset] = useState(false);

  const boxShadow = `${inset ? "inset " : ""}${hOffset}px ${vOffset}px ${blur}px ${spread}px ${color}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`box-shadow: ${boxShadow};`);
    alert("CSS copied to clipboard!");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">CSS Box Shadow Generator</h2>
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label>Horizontal Offset</label>
          <input
            type="range"
            min={-50}
            max={50}
            value={hOffset}
            onChange={(e) => setHOffset(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label>Vertical Offset</label>
          <input
            type="range"
            min={-50}
            max={50}
            value={vOffset}
            onChange={(e) => setVOffset(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label>Blur Radius</label>
          <input
            type="range"
            min={0}
            max={100}
            value={blur}
            onChange={(e) => setBlur(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label>Spread Radius</label>
          <input
            type="range"
            min={-50}
            max={50}
            value={spread}
            onChange={(e) => setSpread(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="col-span-2">
          <label>Shadow Color</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-full h-10"
          />
        </div>
        <div className="col-span-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={inset}
              onChange={(e) => setInset(e.target.checked)}
              className="mr-2"
            />
            Inset
          </label>
        </div>
      </div>
      <div
        className="w-32 h-32 mb-4"
        style={{
          backgroundColor: "#fff",
          boxShadow: boxShadow,
        }}
      ></div>
      <div className="mb-4">
        <code>box-shadow: {boxShadow};</code>
      </div>
      <button
        onClick={copyToClipboard}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Copy CSS
      </button>
    </div>
  );
};

export default BoxShadowGenerator;
