"use client";

import MainCategoriesSidebar from "@/components/general/MainCategoriesSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type SubCategory = {
    id: string;
    name: string;
};

type Category = {
    id: string;
    name: string;
    description: string;
    icon: string;
    image: string;
    subCategories: SubCategory[]; // Add subcategories to the category type
};

export default function CategoryDetail() {
    const { id } = useParams(); // Get the category ID from the URL
    const [category, setCategory] = useState<Category | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true); // Add a loading state

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const res = await fetch(`/api/categories/${id}`);
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
            } finally {
                setLoading(false); // Set loading to false after fetch
            }
        };

        if (id) {
            fetchCategory();
        }
    }, [id]);


    useEffect(() => {
        const handleContextMenu = (event: MouseEvent) => event.preventDefault();
        const handleCopy = (event: ClipboardEvent) => event.preventDefault();
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.ctrlKey && (event.key === "c" || event.key === "u")) {
                event.preventDefault();
                console.log("Ctrl+C or Ctrl+U");
            }
        };

        document.addEventListener("contextmenu", handleContextMenu);
        document.addEventListener("copy", handleCopy);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
            document.removeEventListener("copy", handleCopy);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Show a loading message while fetching
    }

    if (error) {
        return <div className="text-red-500">Error: {error}</div>; // Show an error message if fetch fails
    }

    if (!category) {
        return <div>No category found</div>; // Handle case where category is null
    }

    return (
        <div className="container mx-auto p-4 md:px-0">
            <h1 className="text-3xl text-primary font-bold">All Categories</h1>
            <p className="pb-6">Looking for Open Job Opportunities? <span className="text-primary font-bold">Find Jobs</span></p>
            <form className="flex gap-2 mb-6"><Input placeholder="Search for categories" /><Button>Search</Button></form>
            <div className='grid md:grid-cols-3 gap-8'>
                <div className="md:col-span-2 col-span-1 bg-grey">
                    <Image src={category.image} alt={category.name} width={1000} height={100} unselectable="off" className="mb-4 w-full rounded-2xl unclickable pointer-events-none select-none " />
                    <h1 className="text-2xl font-bold mb-4 text-primary">{category.name}</h1>
                    <p>{category.description}</p>
                    <div className="border-b-1 border-primary mt-4"></div>
                    <div className="mt-4">
                <h2 className="text-xl font-semibold mb-4">Subcategories</h2>
                {category.subCategories.length > 0 ? (
                    <ul className="list-disc pl-5">
                        {category.subCategories.map((sub) => (
                            <li key={sub.id} className="text-gray-700">
                                {sub.name}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No subcategories available.</p>
                )}
            </div>
                </div>
                <div className=" rounded-2xl">
                    <MainCategoriesSidebar/>
                </div>
            </div>
            
        </div>
    );
}