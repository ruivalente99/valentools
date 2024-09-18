// app/components/TimestampConverter.tsx
"use client";

import React, { useState } from "react";
import moment from "moment";

const TimestampConverter: React.FC = () => {
  const [timestamp, setTimestamp] = useState("");
  const [date, setDate] = useState("");

  const convertToHumanReadable = () => {
    const parsed = moment.unix(Number(timestamp));
    setDate(parsed.format("YYYY-MM-DD HH:mm:ss"));
  };

  const convertToTimestamp = () => {
    const parsed = moment(date);
    setTimestamp(parsed.unix().toString());
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Unix Timestamp Converter</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter Unix timestamp"
          value={timestamp}
          onChange={(e) => setTimestamp(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <button
          onClick={convertToHumanReadable}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Convert to Date
        </button>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter date (YYYY-MM-DD HH:mm:ss)"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <button
          onClick={convertToTimestamp}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Convert to Timestamp
        </button>
      </div>
      {date && <div className="mt-4">Date: {date}</div>}
      {timestamp && <div className="mt-4">Timestamp: {timestamp}</div>}
    </div>
  );
};

export default TimestampConverter;
