"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";

type About = {
  id: string;
  title: string;
  body: string;
  createdAt: string;
};

export default function WhoWeServe() {
  const [aboutEntries, setAboutEntries] = useState<About[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

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

  function startEditing(entry: About) {
    setEditingId(entry.id);
    setEditTitle(entry.title);
    setEditBody(entry.body);
  }

  function cancelEditing() {
    setEditingId(null);
    setEditTitle("");
    setEditBody("");
  }

  async function saveEditing() {
    if (!editingId) return;

    try {
      const res = await fetch(`/api/whoweserve/${editingId}`, {
        method: "PATCH",  // <<== PATCH here
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: editTitle,
          body: editBody,
        }),
      });

      if (!res.ok) throw new Error("Failed to save changes");

      // Update UI after saving
      setAboutEntries((prev) =>
        prev.map((entry) =>
          entry.id === editingId
            ? { ...entry, title: editTitle, body: editBody }
            : entry
        )
      );

      cancelEditing();
    } catch (err) {
      console.error(err);
    }
  }

  if (loading) {
    return (
      <div className="space-y-4 grid md:grid-cols-2 gap-12">
        {[...Array(4)].map((_, idx) => (
          <div key={idx}>
            <Skeleton className="h-30 w-full" />
            <Skeleton className="h-10 w-60 my-2" />
            <Skeleton className="h-10 w-full" />
          </div>
        ))}
      </div>
    );
  }

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="pb-2">
      <div className="container mx-auto pb-6">
        <h2 className="text-2xl md:text-4xl font-bold text-primary mx-auto text-center">
          Who We Serve
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {aboutEntries.length === 0 ? (
          <p>No entries found.</p>
        ) : (
          aboutEntries.map((entry) => (
            <div key={entry.id} className="border p-4 rounded-md shadow-sm">
              {editingId === entry.id ? (
                <div>
                  <input
                    className="border p-2 w-full mb-2"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    placeholder="Title"
                  />
                  <textarea
                    className="border p-2 w-full mb-2"
                    value={editBody}
                    onChange={(e) => setEditBody(e.target.value)}
                    placeholder="Body"
                  />
                  <div className="flex space-x-2">
                    <button
                      onClick={saveEditing}
                      className="bg-primary hover:bg-green-800 font-bold text-white px-4 py-2 rounded"
                    >
                      Save
                    </button>
                    <button
                      onClick={cancelEditing}
                      className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl font-bold text-primary">{entry.title}</h2>
                  <p className="mt-2">{entry.body}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Created at: {new Date(entry.createdAt).toLocaleDateString()}
                  </p>
                  <button
                    onClick={() => startEditing(entry)}
                    className="mt-4 text-sm text-white font-bold hover:underline bg-primary p-2 rounded"
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
