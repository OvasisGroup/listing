import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`);
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
        <>
            <motion.div className='mt-10 flex justify-between items-end w-full'>
                <div>
                    <h1 className='font-bold text-3xl'>Browse talent by category</h1>
                    <p className='text-xl'>
                        Looking for work? <span className='text-primary'><Link href={'/jobs'}>Browse Jobs</Link></span>
                    </p>
                </div>
                <Link href={'/allCategories'}>
                    <div className='mt-4 flex gap-2 items-center'>
                        <h1 className='text-primary font-bold md:text-2xl'>All Categories</h1>
                        <ArrowUpRightIcon />
                    </div>
                </Link>
            </motion.div>

            {loading ? (
                <div className="grid md:grid-cols-4 gap-6 mt-10">
                    {[...Array(4)].map((_, idx) => (
                        <div
                            key={idx}
                            className="animate-pulse p-4 border rounded-lg space-y-4 bg-gray-100 dark:bg-gray-800"
                        >
                            <div className="w-10 h-10 bg-gray-300 dark:bg-gray-700 rounded" />
                            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
                            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2" />
                        </div>
                    ))}
                </div>
            ) : (
                <motion.div
                    className="grid md:grid-cols-4 gap-6 mt-10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    {data.map((category) => (
                        <Link key={category.id} href={`/categories/${category.id}`}>
                            <Card className="shadow-none hover:bg-gray-800 hover:text-white">
                                <CardHeader>
                                    <Image
                                        src={category.icon || '/fallback-icon.png'}
                                        alt={category.name}
                                        width={40}
                                        height={40}
                                        loading="lazy"
                                        className='object-contain'
                                    />
                                </CardHeader>
                                <CardContent>
                                    <p className='font-bold text-xl'>{category.name}</p>
                                </CardContent>
                                <CardFooter className='flex items-center justify-between'>
                                    <div className='flex items-center'>
                                        <Star className='text-primary w-5 h-5 mr-2' />
                                        <span className='font-bold'>300 skills</span>
                                    </div>
                                    <ArrowUpRightIcon />
                                </CardFooter>
                            </Card>
                        </Link>
                    ))}
                </motion.div>
            )}
        </>
    );
}
