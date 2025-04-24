"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import RichTextEditor from "@/components/RichTextEditor"; // 👈 adjust path
import { CategorySchema, categorySchema } from "@/utils/zodSchemas";

export default function CategoryForm() {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<CategorySchema>({
    resolver: zodResolver(categorySchema),
  });

  // Ensure `description` is registered for RHF even though we're using a custom component
  useEffect(() => {
    register("description");
  }, [register]);

  const onSubmit = async (data: CategorySchema) => {
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    const formDataToSend = new FormData();
    formDataToSend.append("name", data.name);
    formDataToSend.append("description", data.description);
    formDataToSend.append("image", data.image[0]);
    formDataToSend.append("icon", data.icon[0]);

    try {
      const res = await fetch("/api/premium", {
        method: "POST",
        body: formDataToSend,
      });

      if (res.ok) {
        setSuccessMessage("Category created successfully!");
        reset();
      } else {
        const err = await res.json();
        setErrorMessage(err.message || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block font-medium">Name</label>
        <input type="text" {...register("name")} className="border p-2 w-full rounded" />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block font-medium">Description</label>
        <RichTextEditor
          onChange={(content) => setValue("description", content)}
          initialContent={watch("description")}
        />
        {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
      </div>

      <div>
        <label className="block font-medium">Image</label>
        <input type="file" {...register("image")} accept="image/*" />
        {typeof errors.image?.message === "string" && (
  <p className="text-red-500 text-sm">{errors.image.message}</p>
)}
      </div>

      <div>
        <label className="block font-medium">Icon</label>
        <input type="file" {...register("icon")} accept="image/*" />
        {typeof errors.icon?.message === "string" && (
  <p className="text-red-500 text-sm">{errors.icon.message}</p>
)}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Submitting..." : "Create Category"}
      </button>

      {successMessage && <p className="text-green-600">{successMessage}</p>}
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
    </form>
  );
}
