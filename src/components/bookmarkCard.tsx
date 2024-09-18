// app/components/BookmarkCard.tsx
"use client";

import React, { useState, useEffect } from "react";

interface Bookmark {
  id: number;
  url: string;
  favicon: string;
}

const BookmarkCard: React.FC = () => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [url, setUrl] = useState("");

  useEffect(() => {
    const storedBookmarks = localStorage.getItem("bookmarks");
    if (storedBookmarks) {
      setBookmarks(JSON.parse(storedBookmarks));
    }
  }, []);

  const addBookmark = async () => {
    if (bookmarks.length >= 4) {
      alert("You can only save up to 4 bookmarks.");
      return;
    }

    const faviconUrl = `https://www.google.com/s2/favicons?domain=${new URL(
      url
    ).hostname}`;

    const newBookmark = {
      id: Date.now(),
      url,
      favicon: faviconUrl,
    };

    const updatedBookmarks = [...bookmarks, newBookmark];
    setBookmarks(updatedBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    setUrl("");
  };

  const removeBookmark = (id: number) => {
    const updatedBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(updatedBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Bookmark Card</h2>
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <button
        onClick={addBookmark}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Add Bookmark
      </button>
      <div className="grid grid-cols-2 gap-4">
        {bookmarks.map((bookmark) => (
          <div key={bookmark.id} className="border p-2 flex items-center">
            <img src={bookmark.favicon} alt="Favicon" className="mr-2" />
            <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
              {bookmark.url}
            </a>
            <button
              onClick={() => removeBookmark(bookmark.id)}
              className="ml-auto bg-red-500 text-white px-2 py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookmarkCard;
