"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type About = {
  id: string;
  title: string;
  body: string;
  image: string;
};

export default function HowWeHelp() {
  const [aboutEntries, setAboutEntries] = useState<About[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAbout() {
      try {
        const res = await fetch("/api/whoweserve");

        if (!res.ok) throw new Error("Failed to fetch About entries");

        const data = await res.json();
        setAboutEntries(data);
        console.log(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchAbout();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6 bg-green-100 mt-4 rounded-xl">
      {aboutEntries.length === 0 ? (
        <p>No entries found.</p>
      ) : (
        aboutEntries.map((entry) => (
          <div key={entry.id} className="grid md:grid-cols-2 md:gap-12 gap-4 justify-center items-center mb-4 border-b-1 pb-4">
            <Image
              src={entry.image}
              alt={entry.title}
              width={500}
              height={500}
              className="rounded-lg w-full"/>
              <div>
              <h2 className="text-2xl md:text-4xl font-bold text-primary">{entry.title}</h2>
              <p>{entry.body}</p>
              </div>
          </div>
        ))
      )}
    </div>
  );
}


//  <p className="text-sm text-gray-500">Created at: {new Date(entry.createdAt).toLocaleDateString()}</p>