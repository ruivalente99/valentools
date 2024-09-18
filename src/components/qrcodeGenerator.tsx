// app/components/QRCodeGenerator.tsx
"use client";

import React, { useState } from "react";
import {QRCodeCanvas as QRCode} from 'qrcode.react';

const QRCodeGenerator: React.FC = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const downloadQRCode = () => {
    const canvas = document.querySelector("canvas")!;
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qrcode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">QR Code Generator</h2>
      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <input type="file" onChange={handleImageUpload} className="mb-4" />
      <div className="mb-4">
        <QRCode
          value={text}
          size={256}
          imageSettings={
            image
              ? {
                  src: image,
                  height: 64,
                  width: 64,
                  excavate: true,
                }
              : undefined
          }
        />
      </div>
      <button
        onClick={downloadQRCode}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Download QR Code
      </button>
    </div>
  );
};

export default QRCodeGenerator;
