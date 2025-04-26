"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // <-- Import router

interface Tvet {
  id: number;
  title: string;
  body: string;
}

export default function AboutAdmin() {
  const [about, setAbout] = useState<Tvet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedTitle, setEditedTitle] = useState<string>("");
  const [editedBody, setEditedBody] = useState<string>("");

  const router = useRouter(); // <-- Initialize router

  useEffect(() => {
    const fetchTvets = async () => {
      try {
        const res = await fetch("/api/about");
        if (!res.ok) throw new Error("Failed to fetch About Us.");
        const data = await res.json();
        setAbout(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTvets();
  }, []);

  const startEditing = (entry: Tvet) => {
    setEditingId(entry.id);
    setEditedTitle(entry.title);
    setEditedBody(entry.body);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditedTitle("");
    setEditedBody("");
  };

  const saveEdit = async (id: number) => {
    try {
      const res = await fetch(`/api/about/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: editedTitle, body: editedBody }),
      });

      if (!res.ok) throw new Error("Failed to update About Us.");

      const updatedEntry = await res.json();

      setAbout((prev) =>
        prev.map((item) => (item.id === id ? updatedEntry : item))
      );

      cancelEditing();

      router.push("/about"); // <-- Navigate after saving (Change "/somewhere" to your target page)

    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="p-4 space-y-8">
      <h1 className="text-2xl font-bold">About Us</h1>
      {about.length === 0 ? (
        <p>No About entries found.</p>
      ) : (
        about.map((entry) => (
          <div key={entry.id} className="space-y-4 border p-4 rounded-md">
            {editingId === entry.id ? (
              <div className="space-y-2">
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  className="border p-2 w-full rounded"
                />
                <textarea
                  value={editedBody}
                  onChange={(e) => setEditedBody(e.target.value)}
                  className="border p-2 w-full rounded"
                  rows={5}
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => saveEdit(entry.id)}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  >
                    Save
                  </button>
                  <button
                    onClick={cancelEditing}
                    className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold text-primary">{entry.title}</h2>
                  <p>{entry.body}</p>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => startEditing(entry)}
                    className="bg-primary text-white px-4 py-2 rounded hover:bg-green-800 cursor-pointer font-bold"
                  >
                    Edit
                  </button>
                </div>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}
