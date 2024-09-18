// app/page.tsx
"use client";

import React from "react";
import dynamic from "next/dynamic";
import { NextPage } from "next";

const QRCodeGenerator = dynamic(() => import("@/components/qrcodeGenerator"), {
  ssr: false,
});

const Base64Converter = dynamic(() => import("@/components/base64converter"), {
  ssr: false,
});

const ColorPicker = dynamic(() => import("@/components/colorpicker"), {
  ssr: false,
});

const CurrentTimeDisplay = dynamic(
  () => import("@/components/currentTimeDisplay"),
  {
    ssr: false,
  }
);

const GUIDGenerator = dynamic(() => import("@/components/guidGenerator"), {
  ssr: false,
});

const BookmarkCard = dynamic(() => import("@/components/bookmarkCard"), {
  ssr: false,
});

const SimpleCalculator = dynamic(() => import("@/components/calculator"), {
  ssr: false,
});

const JSONFormatter = dynamic(() => import("@/components/jsonFormatter"), {
  ssr: false,
});

const RegexTester = dynamic(() => import("@/components/regexTester"), {
  ssr: false,
});

const TimestampConverter = dynamic(
  () => import("@/components/timestampConverter"),
  {
    ssr: false,
  }
);

const PasswordGenerator = dynamic(
  () => import("@/components/passwordGenerator"),
  {
    ssr: false,
  }
);

const BoxShadowGenerator = dynamic(
  () => import("@/components/boxShadowGenerator"),
  {
    ssr: false,
  }
);

const MarkdownPreviewer = dynamic(
  () => import("@/components/ markdownPreviewer"),
  {
    ssr: false,
  }
);

interface Widget {
  name: string;
  component: React.ReactNode;
}

const widgets: Widget[] = [
  { name: "QR Code Generator", component: <QRCodeGenerator /> },
  { name: "Base64 Converter", component: <Base64Converter /> },
  { name: "Color Picker", component: <ColorPicker /> },
  { name: "Current Time Display", component: <CurrentTimeDisplay /> },
  { name: "GUID Generator", component: <GUIDGenerator /> },
  { name: "Bookmark Card", component: <BookmarkCard /> },
  { name: "Simple Calculator", component: <SimpleCalculator /> },
  { name: "JSON Formatter", component: <JSONFormatter /> },
  { name: "Regex Tester", component: <RegexTester /> },
  { name: "Timestamp Converter", component: <TimestampConverter /> },
  { name: "Password Generator", component: <PasswordGenerator /> },
  { name: "CSS Box Shadow Generator", component: <BoxShadowGenerator /> },
  { name: "Markdown Previewer", component: <MarkdownPreviewer /> },
];

const HomePage: NextPage = () => {  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Developer Tools Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {widgets.map((widget) => (
          <div
            key={widget.name}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-200
              dark:border-gray-700  dark:text-white dark:shadow-gray-800
            "
          >
            <div className=" p-2 font-semibold text-center">
              {widget.name}
            </div>
            <div className="p-4">{widget.component}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
