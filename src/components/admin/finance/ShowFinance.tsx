'use client'

import { Skeleton } from '@/components/ui/skeleton';
import React from 'react'
import { useState, useEffect } from "react";


type About = {
    id: string;
    title: string;
    content: string;
    createdAt: string;
};

export default function ShowFinance() {
    const [aboutEntries, setAboutEntries] = useState<About[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchAbout() {
            try {
                const res = await fetch("/api/finance", { cache: 'no-store' });

                if (!res.ok) throw new Error("Failed to fetch entries");

                const data = await res.json();
                console.log(data);
                setAboutEntries(data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unknown error occurred");
                }
            } finally {
                setLoading(false);
            }
        }

        fetchAbout();
    }, []);

    if (loading) {
        return (
            <div className="w-full">
                <Skeleton className="w-full h-40 rounded" />
            </div>
        );
    }

    if (error) return <p className="text-red-500">{error}</p>;


    return (
        <div>
            {aboutEntries.length === 0 ? (
                <p>No entries found.</p>
            ) : (
                aboutEntries.map((entry) => (
                    <div key={entry.id} className="">
                        <h2 className="text-xl md:text-4xl font-bold text-primary">{entry.title}</h2>
                        <p className='md:text-2xl font-light'>{entry.content}</p>
                    </div>
                ))
            )}
        </div>
    )
}
