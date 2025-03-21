"use client"
import { useEffect, useState } from "react";
import { DataTable } from "./data-table"
import { columns } from "./column";
import { motion } from 'framer-motion';

type Categories = {
    id: string;
    icon: string;
    name: string;
    description: string;
    createdAt: string;              
}

export default function UsersPage() {
    const [data, setData] = useState<Categories[]>([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories/createCategories`); // Replace with your API
          const json = await res.json();
          console.log(json);
          setData(json);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);

  return (
    <>
    <div className="flex items-center justify-between">
        <div className="font-bold text-2xl text-primary">Main Categories</div>
        <div></div>
    </div>
    <div className="">
        {loading ? (
            <motion.div
            className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          />
        ) : (
      <DataTable columns={columns} data={data} />
        )}
    </div>
    </>
  )
}
