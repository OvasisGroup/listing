"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

interface Categories {
    id: string;
    name: string;
    description: string;
    icon: string;
    image: string;
}

export default function MainCategoriesSidebar() {
    const [data, setData] = useState<Categories[]>([]);
        const [loading, setLoading] = useState(true);
      
        useEffect(() => {
          const fetchData = async () => {
            try {
              const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`); // Replace with your API
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

        if (loading) {
            return (
                <div className="p-8 flex justify-center items-center">
                    <p className="text-gray-500">Loading categories...</p>
                </div>
            );
        }

  return (
    <div className='md:pl-8'>
       
        {data.map((category) => (
             <Link key={category.id} href={`/categories/${category.id}`}>
            <div  className='flex gap-2 items-center border-b-1 border-dashed py-4 border-accent-foreground'>
                <Image src={category.icon} alt={category.name} width={30} height={30} />
                <h1>{category.name}</h1>
            </div>
            </Link>
        ))}
    </div>
  )
}
