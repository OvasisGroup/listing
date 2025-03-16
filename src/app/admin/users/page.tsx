"use client"
import { useEffect, useState } from "react";
import { columns } from "./columsn"
import { DataTable } from "./data-table"

type Users = {
    id: string;
    image: string;
    name: string;
    onboardingCompleted: boolean;
    userType: string;
    createdAt: string;              
}

export default function UsersPage() {
    const [data, setData] = useState<Users[]>([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`); // Replace with your API
          const json = await res.json();
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
    <div className="">
        {loading ? (
            <p>Loading...</p>
        ) : (
      <DataTable columns={columns} data={data} />
        )}
    </div>
  )
}
