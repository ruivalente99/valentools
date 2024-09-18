// app/components/CurrentTimeDisplay.tsx
"use client";

import React, { useState, useEffect } from "react";
import moment from "moment-timezone";

const CurrentTimeDisplay: React.FC = () => {
  const [time, setTime] = useState("");
  const [timezone, setTimezone] = useState("UTC");
  const [format, setFormat] = useState("HH:mm:ss");

  useEffect(() => {
    const storedTimezone = localStorage.getItem("timezone");
    if (storedTimezone) {
      setTimezone(storedTimezone);
    }
    const interval = setInterval(() => {
      setTime(moment().tz(timezone).format(format));
    }, 1000);
    return () => clearInterval(interval);
  }, [timezone, format]);

  const handleTimezoneChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimezone(e.target.value);
    localStorage.setItem("timezone", e.target.value);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(time);
    alert("Time copied to clipboard!");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Current Time Display</h2>
      <div className="mb-4">
        <select value={timezone} onChange={handleTimezoneChange} className="border p-2">
          {moment.tz.names().map((tz) => (
            <option key={tz} value={tz}>
              {tz}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <select value={format} onChange={(e) => setFormat(e.target.value)} className="border p-2">
          <option value="HH:mm:ss">24h</option>
          <option value="hh:mm:ss A">12h</option>
          <option value="HH:mm:ss.SSS">24h with milliseconds</option>
          <option value="hh:mm:ss.SSS A">12h with milliseconds</option>
        </select>
      </div>
      <div className="text-3xl font-bold mb-4">{time}</div>
      <button
        onClick={copyToClipboard}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Copy Time
      </button>
    </div>
  );
};

export default CurrentTimeDisplay;
