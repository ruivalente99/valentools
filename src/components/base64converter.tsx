// app/components/Base64Converter.tsx
"use client";

import React, { useState } from "react";

const Base64Converter: React.FC = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isEncoding, setIsEncoding] = useState(true);

  const handleConvert = () => {
    try {
      if (isEncoding) {
        setOutput(btoa(input));
      } else {
        setOutput(atob(input));
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setOutput("Invalid input for decoding.");
    }
  };

  const flipConversion = () => {
    setIsEncoding(!isEncoding);
    setInput("");
    setOutput("");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    alert("Copied to clipboard!");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Base64 Converter</h2>
      <button
        onClick={flipConversion}
        className="bg-gray-500 text-white px-4 py-2 rounded mb-4"
      >
        {isEncoding ? "Switch to Decode" : "Switch to Encode"}
      </button>
      <textarea
        placeholder={isEncoding ? "Enter text to encode" : "Enter Base64 to decode"}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 w-full mb-4"
        rows={4}
      />
      <button
        onClick={handleConvert}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Convert
      </button>
      <textarea
        readOnly
        value={output}
        className="border p-2 w-full mb-4"
        rows={4}
      />
      <button
        onClick={copyToClipboard}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Copy Result
      </button>
    </div>
  );
};

export default Base64Converter;
