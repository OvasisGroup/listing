"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

type SubCategory = {
    id: string;
    name: string;
    slug: string;
    isActive: boolean;
};

type Category = {
    id: string;
    name: string;
    icon: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    description: string;
    subCategories: SubCategory[]; // Include subcategories
};

export default function CategoryDetail() {
    const { id } = useParams(); // Get the category ID from the URL
    const [data, setData] = useState<Category | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/api/categories/${id}`); // Fetch category by ID
                if (!res.ok) {
                    throw new Error("Failed to fetch category");
                }
                const json = await res.json();
                setData(json.data);
            } catch (error) {
                console.error("Error fetching category:", error);
                setError("Failed to load category details.");
            }
        };

        if (id) {
            fetchData();
        }
    }, [id]);

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="w-full mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">{data.name}</h1>
                <Image
                    src={data.image}
                    alt={data.name}
                    width={800}
                    height={400}
                    className="w-full h-auto rounded-md mb-4"
                />
                <p className="text-gray-700 mb-4">{data.description}</p>
                <p className="text-sm text-gray-500">
                    Created At: {new Date(data.createdAt).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-500">
                    Updated At: {new Date(data.updatedAt).toLocaleDateString()}
                </p>

                {/* Subcategories Section */}
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Subcategories</h2>
                    {data.subCategories.length > 0 ? (
                        <ul className="list-disc pl-5 space-y-2">
                            {data.subCategories.map((subCategory) => (
                                <li key={subCategory.id} className="text-gray-700">
                                    <span className="font-medium">{subCategory.name}</span>{" "}
                                    {subCategory.isActive ? (
                                        <span className="text-green-600">(Active)</span>
                                    ) : (
                                        <span className="text-red-600">(Inactive)</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">No subcategories available.</p>
                    )}
                </div>
            </div>
        </Suspense>
    );
}