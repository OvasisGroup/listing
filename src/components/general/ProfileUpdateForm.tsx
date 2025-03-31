/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { useState } from "react";

interface Profile {
  id: string;
  name: string;
  location?: string;
  about?: string;
  image: string;
}

interface ProfileUpdateFormProps {
  profile: Profile;
}

export default function ProfileUpdateForm({ profile }: ProfileUpdateFormProps) {
  const [formData, setFormData] = useState({
    name: profile.name || "",
    location: profile.location || "",
    about: profile.about || "",
    image: profile.image || "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      // Replace with your image upload API endpoint
      const uploadUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/upload`;
      const res = await fetch(uploadUrl, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to upload image");
      }

      const data = await res.json();
      setFormData((prev) => ({ ...prev, image: data.url })); // Assuming the API returns the uploaded image URL
      setSuccess("Image uploaded successfully!");
    } catch (err: any) {
      setError(err.message || "An error occurred while uploading the image");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
  
    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/profile`;
      console.log("API URL:", apiUrl); // Debugging the API URL
  
      const res = await fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: profile.id, ...formData }),
      });
  
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to update profile");
      }
  
      setSuccess("Profile updated successfully!");
      console.log( res, "Profile updated successfully!"); // Debugging the success message
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold">Update Profile</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {success && <p className="text-green-500">{success}</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div>
          <label htmlFor="name" className="block font-bold">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
       
       
        <div>
          <label htmlFor="location" className="block font-bold">Location</label>
          <input
            id="location"
            name="location"
            type="text"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="about" className="block font-bold">About</label>
          <textarea
            id="about"
            name="about"
            value={formData.about}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="image" className="block font-bold">Profile Image</label>
          <input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border rounded"
          />
          {formData.image && (
            <Image
              src={formData.image}
              alt="Profile"
              width={100}
              height={100}
              className="mt-4 w-32 h-32 object-cover rounded-full"
            />
          )}
        </div>

        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
}