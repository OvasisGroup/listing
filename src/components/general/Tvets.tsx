/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface Tvet {
  id: number;
  name: string;
  location: string;
}

export default function TvetsTable() {
  const [tvets, setTvets] = useState<Tvet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(10);
  const step = 10; // how many to show or hide each click

  useEffect(() => {
    const fetchTvets = async () => {
      try {
        const res = await fetch("/api/tvets");
        if (!res.ok) throw new Error("Failed to fetch TVETs.");
        const data = await res.json();
        setTvets(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTvets();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">TVET Institutions</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold text-primary">Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tvets.slice(0, visibleCount).map((tvet) => (
            <TableRow key={tvet.id}>
              <TableCell>{tvet.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {visibleCount < tvets.length && (
        <div className="flex justify-center pt-4 w-full ">
          <Button onClick={() => setVisibleCount((prev) => prev + 10)} className="px-4 py-2 rounded-md bg-primary text-white w-full">
            Show More
          </Button>
        </div>
      )}

      {visibleCount > step && (
          <Button
            variant="outline"
            onClick={() => setVisibleCount((prev) => Math.max(prev - step, step))}
          >
            Show Less
          </Button>
        )}

      {visibleCount >= tvets.length && tvets.length > 0 && (
        <div className="text-center text-gray-500 pt-4">No more records to show.</div>
      )}
    </div>
  );
}
