"use client";


import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowBigLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


type Legal = {
    id: string;
    name: string;
    description: string;
    icon: string;
    image: string;
};

export default function CategoryDetail() {
    const { id } = useParams();
    const [category, setCategory] = useState<Legal | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const res = await fetch(`/api/premium/${id}`);
                if (!res.ok) {
                    throw new Error("Failed to fetch premium");
                }
                const data = await res.json();
                setCategory(data.data);
            } catch (error) {
                console.error("Error fetching premium:", error);
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

    

    if (loading) {
        return (
            <div className="container mx-auto p-4 md:px-0">
                <Skeleton className="w-full h-[50px] rounded" />
                <Skeleton className="w-full h-50 rounded my-4" />
            </div>
        )
    }

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    if (!category) {
        return <div>No category found</div>;
    }

    return (
        <div className="container mx-auto p-4 md:px-0">
            <Link href={`/premium`}>
                <Button className="text-white my-6"><ArrowBigLeftIcon/> Back to Premium</Button>
                </Link>

                <Image src={category.image} alt="category image" width={300} height={300} className="rounded-lg my-4 w-full" />
            <h1 className="text-3xl text-primary font-bold">{category.name}</h1>
           
            <div className="">
                
                <div className="">
                    <p className="text-justify text-sm">{category.description}</p>                 
                </div>
            </div>
        </div>
    );
}