// app/components/JSONFormatter.tsx
"use client";

import React, { useState } from "react";

const JSONFormatter: React.FC = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, 2);
      setOutput(formatted);
      setError("");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
      setOutput("");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">JSON Formatter/Validator</h2>
      <textarea
        placeholder="Enter JSON here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 w-full mb-4"
        rows={10}
      />
      <button
        onClick={formatJSON}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Format JSON
      </button>
      {error && <div className="text-red-500 mb-4">Error: {error}</div>}
      {output && (
        <textarea
          readOnly
          value={output}
          className="border p-2 w-full mb-4"
          rows={10}
        />
      )}
    </div>
  );
};

export default JSONFormatter;
