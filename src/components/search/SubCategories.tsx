"use client";

import { useState, useEffect } from "react";

type Category = {
  id: number;
  name: string;
};

function buildQueryParams(queries: string[]) {
  return queries.map((q) => `q=${encodeURIComponent(q)}`).join("&");
}

export default function MultiCategorySearch() {
  const [input, setInput] = useState("");
  const [keywords, setKeywords] = useState<string[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const handleSearch = () => {
    const terms = input.split(",").map((s) => s.trim()).filter(Boolean);
    setKeywords(terms);
  };

  useEffect(() => {
    if (keywords.length === 0) {
      setCategories([]);
      return;
    }

    const fetchCategories = async () => {
      const query = buildQueryParams(keywords);
      const res = await fetch(`/api/subcategories?${query}`);
      const data = await res.json();
      setCategories(data);
    };

    fetchCategories();
  }, [keywords]);

  return (
    <div className="container mx-auto py-4">
        <form className="flex flex-row gap-2 items-center w-full mb-4">
      <input
        type="text"
        placeholder="Search categories (e.g. cleaning, plumbing)"
        className="w-full p-2 border border-gray-300 rounded"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className=" px-4 py-2 bg-blue-500 text-white rounded"
      >
        Search
      </button>
      </form>

      <ul className="space-y-2">
        {categories.length > 0 ? (
          categories.map((category) => (
            <li key={category.id} className="bg-gray-100 p-2 rounded">
              {category.name}
            </li>
          ))
        ) : (
          <li className="text-gray-500">No categories found</li>
        )}
      </ul>
    </div>
  );
}
