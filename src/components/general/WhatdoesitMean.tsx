'use client'

import React from 'react'
import { useState, useEffect } from "react";
import { Skeleton } from '../ui/skeleton';

type About = {
    id: string;
    title: string;
    body: string;
    createdAt: string;
};

export default function WhatdoesitMean() {
    const [aboutEntries, setAboutEntries] = useState<About[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchAbout() {
            try {
                const res = await fetch("/api/whatdoesitmean", { cache: 'no-store' });

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
            <div className="grid md:grid-cols-2 gap-12">
                <Skeleton className="w-full h-40 rounded" />
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
                        <h2 className="text-2xl md:text-4xl font-bold text-primary">{entry.title}</h2>
                        <p>{entry.body}</p>
                    </div>
                ))
            )}
        </div>
    )
}
