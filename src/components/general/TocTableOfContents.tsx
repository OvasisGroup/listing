"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional: Icon library

const headings = [
  { id: "introduction", title: "Introduction" },
  { id: "features", title: "Features" },
  { id: "usage", title: "Usage" },
  { id: "faq", title: "FAQ" },
];

export default function TableOfContents() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button (Mobile) */}
      <div className="md:hidden p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-blue-600"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Sidebar for desktop + dropdown for mobile */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:block w-full md:w-64 md:sticky md:top-20 p-4 border-r bg-white z-50 md:h-screen overflow-y-auto`}
      >
        <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className="text-blue-600 hover:underline"
                onClick={() => setIsOpen(false)} // auto-close on mobile
              >
                {heading.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
