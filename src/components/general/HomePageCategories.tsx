import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
// import Image from 'next/image'
import { motion } from 'framer-motion';
import { ArrowUpRightIcon, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

type Categories = {
    id: string;
    name: string;
    icon: string;
  }


export default function HomePageCategories() {

    const [data, setData] = useState<Categories[]>([]);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`); // Replace with your API
            const json = await res.json();
            setData(json);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, []);


    return (
        <>
            <motion.div className='mt-10'
            >
                <h1 className='font-bold text-3xl'>Browse talent by category</h1>
                <p className='text-xl'>Looking for work? <span className='text-primary'><Link href={'/jobs'}>Browse Jobs</Link></span></p>
            </motion.div>
            <motion.div className="grid md:grid-cols-4 gap-6 mt-10"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                {data.map((category) => (
                    <Link key={category.id} href={`/categories/${category.id}`}>
                        <Card key={category.id} className="shadow-none hover:bg-gray-800 hover:text-white">
                            <CardHeader>
                                <Image src={category.icon} alt={category.name} width={40} height={40}  className='object-contain' />
                            </CardHeader>
                            <CardContent className=' first:text-white'>
                                <p className='font-bold text-xl '>{category.name}</p>
                            </CardContent>
                            <CardFooter className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <Star className='text-primary w-5 h-5 mr-2' /> <span className='font-bold'>300 skills</span>
                                </div>
                                <div>
                                    <ArrowUpRightIcon />
                                </div>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </motion.div>
        </>
    )
}
