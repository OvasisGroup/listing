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
import { useEffect, useState } from "react";

type Users = {
  id: string;
  image: string;
  name: string;
  onboardingCompleted: boolean;
  userType: string;
  createdAt: string;
}

const formatDate = (isoDate: string) => {
  return new Date(isoDate).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};




export function TableDemo() {
  
  const [data, setData] = useState<Users[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`); // Replace with your API
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);



  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">#</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Date Joined</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">
              <Image src={invoice.image} alt="Item" width={20} height={20} className="w-5 h-5 rounded-full object-cover" />
            </TableCell>
            <TableCell>{invoice.name}</TableCell>
            <TableCell>
              {formatDate(invoice.createdAt)}
              </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
