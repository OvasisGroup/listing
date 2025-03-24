"use client";

import MainCategoriesSidebar from "@/components/general/MainCategoriesSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogCancel } from "@/components/ui/alert-dialog"; // Import AlertDialog components
import Image from "next/image";
import Link from "next/link";
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
    subCategories: SubCategory[];
};

export default function CategoryDetail() {
    const { id } = useParams();
    const [category, setCategory] = useState<Category | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

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
                setLoading(false);
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
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    if (!category) {
        return <div>No category found</div>;
    }

    return (
        <div className="container mx-auto p-4 md:px-0">
            <h1 className="text-3xl text-primary font-bold">All Categories</h1>
            <p className="pb-6">Looking for Open Job Opportunities? <span className="text-primary font-bold">Find Jobs</span></p>
            <form className="flex gap-2 mb-6"><Input placeholder="Search for categories" /><Button className="text-white">Search</Button></form>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 col-span-1 bg-grey">
                    <Image src={category.image} alt={category.name} width={1000} height={100} unselectable="off" className="mb-4 w-full rounded-2xl unclickable pointer-events-none select-none" />
                    <h1 className="text-2xl font-bold mb-4 text-primary">{category.name}</h1>
                    <p>{category.description}</p>
                    <div className="border-b-1 border-primary mt-4"></div>
                    <div className="mt-4">
                        <h2 className="text-2xl font-semibold mb-4 text-primary">Subcategories</h2>
                        {category.subCategories.length > 0 ? (
                            <div className="flex flex-wrap gap-2">
                                {category.subCategories.map((sub) => (
                                    <AlertDialog key={sub.id}>
                                        <AlertDialogTrigger asChild>
                                            <Button className="border-1 rounded-4xl px-4 py-2 w-fit break-inside-avoid hover:bg-green-50 text-white hover:text-black">
                                                {sub.name}
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <h2 className="text-lg font-bold">Subcategory Details</h2>
                                                <p>Do you want to post a job with <span className="font-bold text-primary">{sub.name}?</span></p>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                            <AlertDialogCancel>     
                                                    Cancel
                                                </AlertDialogCancel>
                                                <Button asChild className="text-white">
                                                    <Link href={`/post-job/${sub.id}`}>
                                                        Confirm
                                                    </Link>
                                                </Button>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-500">No subcategories available.</p>
                        )}
                    </div>
                </div>
                <div className="rounded-2xl">
                    <MainCategoriesSidebar />
                </div>
            </div>
        </div>
    );
}