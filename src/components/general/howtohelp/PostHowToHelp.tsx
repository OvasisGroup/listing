"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

interface AboutFormInputs {
  title: string;
  body: string;
}

export default function HowCanWeHelpForm() {
  const { register, handleSubmit, reset } = useForm<AboutFormInputs>();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (data: AboutFormInputs) => {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/howhelp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to create How to help entry");
      }

      setMessage("How to help entry created successfully!");
      reset(); // Reset form after successful submission
      console.log("Response:", response);
    } catch (error) {
      setMessage("Error: " + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Create How To Help Entry</h2>

      {message && <p className="mb-3 text-sm text-red-500">{message}</p>}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            {...register("title", { required: true })}
            className="mt-1 p-2 block w-full border rounded-md"
            placeholder="Enter title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Body</label>
          <textarea
            {...register("body", { required: true })}
            className="mt-1 p-2 block w-full border rounded-md"
            placeholder="Enter body content"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
