"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function CreateCategoryForm() {
    const [formData, setFormData] = useState({
        name: "",
        slug: "",
        description: "",
        isActive: true,
    });
    const [image, setImage] = useState<File | null>(null);
    const [icon, setIcon] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        if (files && files[0]) {
            if (name === "image") setImage(files[0]);
            if (name === "icon") setIcon(files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage("");
        setErrorMessage("");

        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("slug", formData.slug);
        formDataToSend.append("description", formData.description);
        formDataToSend.append("isActive", String(formData.isActive));
        if (image) formDataToSend.append("image", image);
        if (icon) formDataToSend.append("icon", icon);

        try {
            const response = await fetch("/api/categories/createCategories", {
                method: "POST",
                body: formDataToSend,
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Category created:", data);
                setSuccessMessage("Category created successfully!");
                setFormData({
                    name: "",
                    slug: "",
                    description: "",
                    isActive: true,
                });
                setImage(null);
                setIcon(null);
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.error || "Failed to create category.");
            }
        } catch (error) {
            console.error("Failed to create category:", error);
            setErrorMessage("An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium">
                    Name
                </label>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-primary shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </div>

            <div>
                <label htmlFor="slug" className="block text-sm font-medium">
                    Slug
                </label>
                <Input
                    type="text"
                    id="slug"
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-primary shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </div>

            <div>
                <label htmlFor="description" className="block text-sm font-medium">
                    Description
                </label>
                <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-primary  focus:border-primary focus:ring-green-600 sm:text-sm"
                />
            </div>

            <div>
                <label htmlFor="image" className="block text-sm font-medium">
                    Image
                </label>
                <Input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="mt-1 block w-full border-1 border-primary shadow-none"
                />
            </div>

            <div>
                <label htmlFor="icon" className="block text-sm font-medium">
                    Icon
                </label>
                <Input
                    type="file"
                    id="icon"
                    name="icon"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="mt-1 block w-full shadow-none border-1 border-primary"
                />
            </div>

            <div className="flex items-center">
                <Input
                    type="checkbox"
                    id="isActive"
                    name="isActive"
                    checked={formData.isActive}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-gray-300 text-green-500 focus:ring-green-600"
                />
                <label htmlFor="isActive" className="ml-2 block text-sm">
                    Is Active
                </label>
            </div>

            <div>
                <Button
                    type="submit"
                    disabled={loading}
                    className="inline-flex justify-center rounded-md border border-transparent bg-primary w-full py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    {loading ? "Creating..." : "Create Category"}
                </Button>
            </div>

            {successMessage && <p className="text-sm text-green-600">{successMessage}</p>}
            {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}
        </form>
    );
}