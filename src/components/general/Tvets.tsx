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
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

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

  const totalPages = Math.ceil(tvets.length / pageSize);
  const paginatedData = tvets.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold text-primary">TVET Institutions</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold text-primary">Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((tvet) => (
            <TableRow key={tvet.id}>
              <TableCell>{tvet.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center pt-4">
        <Button
          variant="outline"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <Button
          variant="outline"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
