// app/components/PasswordGenerator.tsx
"use client";

import React, { useState } from "react";

const PasswordGenerator: React.FC = () => {
  const [length, setLength] = useState(12);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+{}[]<>?";
    let chars = lower + upper + numbers;
    if (includeSymbols) {
      chars += symbols;
    }
    let pwd = "";
    for (let i = 0; i < length; i++) {
      pwd += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pwd);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Password Generator</h2>
      <div className="mb-4">
        <label className="block mb-2">Length: {length}</label>
        <input
          type="range"
          min={6}
          max={32}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full"
        />
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
            className="mr-2"
          />
          Include Symbols
        </label>
      </div>
      <button
        onClick={generatePassword}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Generate Password
      </button>
      {password && (
        <div className="mb-4">
          <input
            type="text"
            value={password}
            readOnly
            className="border p-2 w-full mb-2"
          />
          <button
            onClick={copyToClipboard}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Copy Password
          </button>
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;
