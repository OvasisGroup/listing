"use client";

import { useState } from "react";
import MapPicker from "./MapPicker";


export default function CreateListingPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    budget: "",
    location: "",
    lat: 0,
    lng: 0,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/listing", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Listing created!");
    } else {
      alert("Failed to create listing.");
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create New Listing</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="border p-2 w-full rounded"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />

        <textarea
          className="border p-2 w-full rounded"
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
        />

        <input
          className="border p-2 w-full rounded"
          type="number"
          placeholder="Budget"
          value={formData.budget}
          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
          required
        />

        <div>
          <label className="font-semibold mb-2 block">Pick Location:</label>
          <MapPicker
            onLocationSelect={(loc) => {
              setFormData(prev => ({
                ...prev,
                lat: loc.lat,
                lng: loc.lng,
                location: loc.address
              }));
            }}
          />
          {formData.location && (
            <p className="mt-2 text-sm text-gray-700">
              📍 Selected: {formData.location}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded shadow hover:bg-blue-700"
        >
          Submit Listing
        </button>
      </form>
    </div>
  );
}
