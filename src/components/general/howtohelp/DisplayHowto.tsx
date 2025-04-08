"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";

type About = {
  id: string;
  title: string;
  body: string;
  createdAt: string;
};

export default function HowToDisplay() {
  const [aboutEntries, setAboutEntries] = useState<About[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAbout() {
      try {
        const res = await fetch("/api/howhelp");

        if (!res.ok) throw new Error("Failed to fetch About entries");

        const data = await res.json();
        setAboutEntries(data);
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

  if (loading) 
  {
    return (
      <div className="">
        <div className="py-4">
        <Skeleton className="w-full h-50 rounded" />
        </div>
      </div>
    )
  }
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="py-10 ">
      {aboutEntries.length === 0 ? (
        <p>No entries found.</p>
      ) : (
        aboutEntries.map((entry) => (
          <div key={entry.id} className="flex flex-col justify-center items-center max-w-[70%] mx-auto gap-4">
            <h2 className="text-2xl md:text-4xl font-bold text-primary">{entry.title}</h2>
            <p className="text-center">{entry.body}</p>
          </div>
        ))
      )}
    </div>
  );
}


//  <p className="text-sm text-gray-500">Created at: {new Date(entry.createdAt).toLocaleDateString()}</p>