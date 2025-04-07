"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Section {
  id: string;
  title: string;
}

const Sidebar = () => {
  const [sections, setSections] = useState<Section[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch content from API
    const fetchContent = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/legal`);
        const data = await response.json();
        setSections(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching content:", error);
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (loading) {
    return <div className="p-4 text-white">Loading...</div>; // Improved loading state
  }

  return (
    <div className="fixed inset-0 md:w-64 w-full bg-gray-800 text-white md:flex flex-col p-4">
      <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <Link href={`#${section.id}`} className="hover:text-gray-400">
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
