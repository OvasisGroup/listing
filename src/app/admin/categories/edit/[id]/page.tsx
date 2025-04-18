"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Category = {
    id: string;
    name: string;
    description: string;
};

export default function EditCategoryPage() {
    const { id } = useParams(); // Get the category ID from the URL
    const router = useRouter(); // For navigation after saving
    const [category, setCategory] = useState<Category | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isSaving, setIsSaving] = useState(false); // State for saving status

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories/${id}`);
                if (!res.ok) {
                    throw new Error("Failed to fetch category");
                }
                const data = await res.json();
                setCategory(data.data);
            } catch (error) {
                console.error("Error fetching category:", error);
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError("An unknown error occurred");
                }
            }
        };

        if (id) {
            fetchCategory();
        }
    }, [id]);

    const handleSave = async () => {
        if (!category) return;

        setIsSaving(true); // Set saving state
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: category.name,
                    description: category.description,
                }),
            });

            if (!res.ok) {
                throw new Error("Failed to save category");
            }

            // Navigate back to the categories list or show a success message
            router.push("/admin/categories");
        } catch (error) {
            console.error("Error saving category:", error);
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("An unknown error occurred");
            }
        } finally {
            setIsSaving(false); // Reset saving state
        }
    };

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    if (!category) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Edit Category</h1>
            <div className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <Input
                        id="name"
                        type="text"
                        value={category.name}
                        onChange={(e) => setCategory({ ...category, name: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <Textarea
                        id="description"
                        value={category.description}
                        onChange={(e) => setCategory({ ...category, description: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="mt-4">
                    <Button
                        onClick={handleSave}
                        disabled={isSaving}
                        className={`inline-flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-darkgreen focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                            isSaving ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                    >
                        {isSaving ? "Saving..." : "Save"}
                    </Button>
                </div>
            </div>
        </div>
    );
}