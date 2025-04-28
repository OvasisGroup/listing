"use client"
import { Skeleton } from '@/components/ui/skeleton';
import React, { useEffect, useState } from 'react'

type Jobs = {
    id: string;
    title: string;
    description: string;
    createdAt: string;
  };

export default function DisplayListings() {
    const [aboutEntries, setAboutEntries] = useState<Jobs[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAbout() {
      try {
        const res = await fetch("/api/listing");

        if (!res.ok) throw new Error("Failed to fetch Jobs entries");

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

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 gap-12">
        <Skeleton className="w-full h-40 rounded" />
        <Skeleton className="w-full h-40 rounded" />
        </div>
    );
  }
     
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>DisplayListings
        {aboutEntries.length === 0 ? (
            <p>No Jobs entries found.</p>
        ) : (
            aboutEntries.map((entry) => (
            <div key={entry.id} className="grid md:grid-cols-2 gap-12">
                <h2 className="text-2xl md:text-4xl font-bold text-primary">{entry.title}</h2>
                <p>{entry.description}</p>
            </div>
            ))
        )}
    </div>
  )
}
