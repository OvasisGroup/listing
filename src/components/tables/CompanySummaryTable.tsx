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
import Image from "next/image";
import React, { useEffect, useState } from 'react'

type Company = {
    id: string;
    logo: string;
    name: string;
    location: string;
  }
  

export default function CompanySummaryTable() {

    const [data, setData] = useState<Company[]>([]);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/company`); // Replace with your API
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
          <TableHead className="w-[100px] font-bold text-primary">#</TableHead>
          <TableHead className="font-bold text-primary">Name</TableHead>
          <TableHead className="font-bold text-primary">Location</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">
              <Image src={invoice.logo} alt="Item" width={20} height={20} className="w-5 h-5 rounded-full object-cover" />
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
