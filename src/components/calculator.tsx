// app/components/SimpleCalculator.tsx
"use client";

import React, { useState, useEffect } from "react";

const SimpleCalculator: React.FC = () => {
  const [expression, setExpression] = useState("");

  const handleButtonClick = (value: string) => {
    setExpression((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      // Evaluate the expression using Function constructor
      const result = new Function("return " + expression)();
      setExpression(result.toString());
    } catch {
      setExpression("Error");
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (/[\d+\-*/.]/.test(e.key)) {
      setExpression((prev) => prev + e.key);
    } else if (e.key === "Enter") {
      calculateResult();
    } else if (e.key === "Backspace") {
      setExpression((prev) => prev.slice(0, -1));
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Simple Calculator</h2>
      <input
        type="text"
        value={expression}
        readOnly
        className="border p-2 w-full mb-4 text-right"
      />
      <div className="grid grid-cols-4 gap-2">
        {["7", "8", "9", "/",
          "4", "5", "6", "*",
          "1", "2", "3", "-",
          "0", ".", "=", "+"].map((value) => (
          <button
            key={value}
            onClick={() =>
              value === "=" ? calculateResult() : handleButtonClick(value)
            }
            className="bg-gray-200 p-4 text-xl w-full"
          >
            {value}
          </button>
        ))}
        <button
          onClick={() => setExpression("")}
          className="col-span-4 bg-red-500 text-white p-4 w-full"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default SimpleCalculator;
