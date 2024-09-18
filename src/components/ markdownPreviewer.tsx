// app/components/MarkdownPreviewer.tsx
"use client";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "github-markdown-css";

const MarkdownPreviewer: React.FC = () => {
  const [markdown, setMarkdown] = useState("# Hello, Markdown!");

  return (
    <div className="flex flex-col md:flex-row h-full">
      <div className="md:w-1/2 md:pr-2">
        <h2 className="text-xl font-bold mb-4">Markdown Input</h2>
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          className="border p-2 w-full h-64 md:h-full"
        />
      </div>
      <div className="md:w-1/2 md:pl-2 mt-4 md:mt-0">
        <h2 className="text-xl font-bold mb-4">Preview</h2>
        <div className="markdown-body border p-4 h-64 md:h-full overflow-auto">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default MarkdownPreviewer;
