"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

type FormData = {
  title: string;
  body: string;
  image: FileList;
};

export default function WhyChooseUsForm() {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("body", data.body || "");
    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }

    try {
      const res = await fetch("/api/whychooseus", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (res.ok) {
        setMessage("Entry created successfully!");
        reset();
      } else {
        setMessage(result.error || "Failed to create entry.");
      }
    } catch (err) {
      console.error(err);
      setMessage("An unexpected error occurred.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <h2 className="font-bold text-2xl text-primary">Create Why Choose Us</h2>
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          type="text"
          {...register("title", { required: true })}
          className="mt-1 block w-full border px-3 py-2 rounded-md"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Body</label>
        <textarea
          {...register("body")}
          className="mt-1 block w-full border px-3 py-2 rounded-md"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Image</label>
        <input
          type="file"
          accept="image/*"
          {...register("image")}
          className="mt-1 block w-full"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>

      {message && <p className="text-sm mt-2">{message}</p>}
    </form>
  );
}
