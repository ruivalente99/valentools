// app/components/ColorPicker.tsx
"use client";

import React, { useState, useEffect } from "react";
import { SketchPicker, ColorResult } from "react-color";

const ColorPicker: React.FC = () => {
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    const storedColor = localStorage.getItem("favoriteColor");
    if (storedColor) {
      setColor(storedColor);
    }
  }, []);

  const handleChange = (color: ColorResult) => {
    setColor(color.hex);
  };

  const saveColor = () => {
    localStorage.setItem("favoriteColor", color);
    alert("Color saved!");
  };

  const generateRandomColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Color Picker</h2>
      <SketchPicker color={color} onChange={handleChange} />
      <div className="mt-4">
        <button
          onClick={generateRandomColor}
          className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
        >
          Random Color
        </button>
        <button
          onClick={saveColor}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save Color
        </button>
      </div>
    </div>
  );
};

export default ColorPicker;
