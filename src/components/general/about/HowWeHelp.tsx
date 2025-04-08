"use client";

import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { useState, useEffect } from "react";

type About = {
  id: string;
  title: string;
  body: string;
  image: string;
};

export default function HowWeHelp() {
  const [aboutEntries, setAboutEntries] = useState<About[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAbout() {
      try {
        const res = await fetch("/api/whoweserve");

        if (!res.ok) throw new Error("Failed to fetch About entries");

        const data = await res.json();
        setAboutEntries(data);
        console.log(data);
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
      <div className="space-y-4 grid md:grid-cols-2 gap-12">
        <div className="">
        <Skeleton className="h-30 w-full" />
        <Skeleton className="h-10 w-60 my-2" />
        <Skeleton className="h-10 w-full" />
        </div>
        <div className="">
        <Skeleton className="h-30 w-full" />
        <Skeleton className="h-10 w-60 my-2" />
        <Skeleton className="h-10 w-full" />
        </div>
        <div className="">
        <Skeleton className="h-30 w-full" />
        <Skeleton className="h-10 w-60 my-2" />
        <Skeleton className="h-10 w-full" />
        </div>
        <div className="">
        <Skeleton className="h-30 w-full" />
        <Skeleton className="h-10 w-60 my-2" />
        <Skeleton className="h-10 w-full" />
        </div>
      </div>
    )
  } ;
  if (error) return <p className="text-red-500">{error}</p>;

  return (

    <div className="pb-10"> 
        <div className="container mx-auto pb-6">
        <h2 className="text-2xl md:text-4xl font-bold text-primary mx-auto text-center">Who We Serve</h2>
        </div>
    <div className="grid md:grid-cols-2 gap-12">
      {aboutEntries.length === 0 ? (
        <p>No entries found.</p>
      ) : (
        aboutEntries.map((entry) => (
          <div key={entry.id} className="">
            <Image
              src={entry.image}
              alt={entry.title}
              width={500}
              height={500}
              className="rounded-lg w-full"/>
              <div>
              <h2 className="text-2xl mt-4 font-bold text-primary">{entry.title}</h2>
              <p>{entry.body}</p>
              </div>
              </div>

        ))
      )}
    </div>
    </div>
  );
}


//  <p className="text-sm text-gray-500">Created at: {new Date(entry.createdAt).toLocaleDateString()}</p>