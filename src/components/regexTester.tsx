// app/components/RegexTester.tsx
"use client";

import React, { useState } from "react";

const RegexTester: React.FC = () => {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [testString, setTestString] = useState("");
  const [matches, setMatches] = useState<string[]>([]);

  const testRegex = () => {
    try {
      const regex = new RegExp(pattern, flags);
      const result = testString.match(regex);
      setMatches(result || []);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      alert("Invalid regular expression");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Regex Tester</h2>
      <input
        type="text"
        placeholder="Enter regex pattern"
        value={pattern}
        onChange={(e) => setPattern(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <input
        type="text"
        placeholder="Enter flags (e.g., g, i, m)"
        value={flags}
        onChange={(e) => setFlags(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <textarea
        placeholder="Enter test string"
        value={testString}
        onChange={(e) => setTestString(e.target.value)}
        className="border p-2 w-full mb-4"
        rows={5}
      />
      <button
        onClick={testRegex}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Test Regex
      </button>
      {matches.length > 0 && (
        <div>
          <h3 className="font-bold mb-2">Matches:</h3>
          <ul className="list-disc list-inside">
            {matches.map((match, index) => (
              <li key={index}>{match}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RegexTester;
