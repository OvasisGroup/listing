"use client"
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { FileDown} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from 'react'

type Company = {
    id: string;
    resume: string;
    name: string;
    location: string;
  }
  

export default function JobSeekerSummary() {

    const [data, setData] = useState<Company[]>([]);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/jobseeker`); // Replace with your API
            const json = await res.json();
            setData(json);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, []);
    
  return (
    <div>
         <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] font-bold text-primary">Resume</TableHead>
          <TableHead className="font-bold text-primary">Name</TableHead>
          <TableHead className="font-bold text-primary">Location</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">
                <Link href={invoice.resume} className="flex items-center gap-2 text-primary cursor-pointer"><FileDown/></Link>
            </TableCell>
            <TableCell>{invoice.name}</TableCell>
            <TableCell>
              {invoice.location}
              </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
        </TableRow>
      </TableFooter>
    </Table>
    </div>
  )
}
