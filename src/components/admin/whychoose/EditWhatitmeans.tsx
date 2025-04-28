'use client'

import { Skeleton } from '@/components/ui/skeleton';
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'; 

type About = {
  id: string;
  title: string;
  body: string;
  createdAt: string;
};

export default function WhatdoesitMeanAdmin() {
  const router = useRouter(); // ✅ Initialize router
  const [aboutEntries, setAboutEntries] = useState<About[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');

  useEffect(() => {
    async function fetchAbout() {
      try {
        const res = await fetch("/api/whatdoesitmean", { cache: 'no-store' });
        if (!res.ok) throw new Error("Failed to fetch entries");
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

  async function handleSaveEdit(id: string) {
    try {
      const res = await fetch(`/api/whatdoesitmean/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: editTitle, body: editBody }),
      });

      if (!res.ok) throw new Error('Failed to update entry.');

      const updatedEntry = await res.json();

      setAboutEntries(prevEntries =>
        prevEntries.map(entry =>
          entry.id === id ? updatedEntry : entry
        )
      );
      setEditingId(null);
      setEditTitle('');
      setEditBody('');

      router.push('/whychooseus'); // ✅ Navigate after saving (Change "/somewhere" to your target page)

    } catch (err) {
      console.error(err);
    }
  }

  function handleEditClick(entry: About) {
    setEditingId(entry.id);
    setEditTitle(entry.title);
    setEditBody(entry.body);
  }

  if (loading) {
    return (
      <div className="grid gap-12">
        <Skeleton className="w-full h-40 rounded" />
        <Skeleton className="w-full h-40 rounded" />
      </div>
    );
  }

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="space-y-6">
      {aboutEntries.length === 0 ? (
        <p>No entries found.</p>
      ) : (
        aboutEntries.map((entry) => (
          <div key={entry.id} className="p-4 border rounded-lg space-y-4">
            {editingId === entry.id ? (
              <div className="space-y-2">
                <input
                  type="text"
                  className="border w-full p-2 rounded"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <textarea
                  className="border w-full p-2 rounded"
                  value={editBody}
                  onChange={(e) => setEditBody(e.target.value)}
                />
                <div className="flex space-x-2">
                  <button
                    className="px-4 py-2 bg-green-500 text-white rounded"
                    onClick={() => handleSaveEdit(entry.id)}
                  >
                    Save
                  </button>
                  <button
                    className="px-4 py-2 bg-gray-300 text-black rounded"
                    onClick={() => setEditingId(null)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-primary">{entry.title}</h2>
                <p>{entry.body}</p>
                <button
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={() => handleEditClick(entry)}
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}
