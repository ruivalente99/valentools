// app/components/GUIDGenerator.tsx
"use client";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const GUIDGenerator: React.FC = () => {
  const [guid, setGuid] = useState("");

  const generateGUID = () => {
    setGuid(uuidv4());
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(guid);
    alert("GUID copied to clipboard!");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">GUID Generator</h2>
      <button
        onClick={generateGUID}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Generate GUID
      </button>
      {guid && (
        <div className="mb-4">
          <input
            type="text"
            value={guid}
            readOnly
            className="border p-2 w-full mb-2"
          />
          <button
            onClick={copyToClipboard}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Copy GUID
          </button>
        </div>
      )}
    </div>
  );
};

export default GUIDGenerator;
