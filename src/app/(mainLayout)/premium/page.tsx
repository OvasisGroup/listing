"use client";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import Link from 'next/link';
// pages/index.tsx
import { useState, useEffect } from 'react';

interface Post {
  id: number;
  icon: string;
  image: string;
  name: string;
  description: string;
}

const Premium = () => {
  const [legal, setLegal] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/premium`); // Replace with your API
        const json = await res.json();
        setLegal(json);
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
      <div className="grid md:grid-cols-4 grid-cols-2 gap-6 mt-10 md:px-0 px-4  mb-8">
        <Skeleton className="shadow-none hover:bg-gray-800 hover:text-white min-h-[200px]" />
        <Skeleton className="shadow-none hover:bg-gray-800 hover:text-white min-h-[200px]" />
        <Skeleton className="shadow-none hover:bg-gray-800 hover:text-white min-h-[200px]" />
        <Skeleton className="shadow-none hover:bg-gray-800 hover:text-white min-h-[200px]" />
        <Skeleton className="shadow-none hover:bg-gray-800 hover:text-white min-h-[200px]" />
        <Skeleton className="shadow-none hover:bg-gray-800 hover:text-white min-h-[200px]" />
        <Skeleton className="shadow-none hover:bg-gray-800 hover:text-white min-h-[200px]" />
        <Skeleton className="shadow-none hover:bg-gray-800 hover:text-white min-h-[200px]" />
        <Skeleton className="shadow-none hover:bg-gray-800 hover:text-white min-h-[200px]" />
        <Skeleton className="shadow-none hover:bg-gray-800 hover:text-white min-h-[200px]" />
        <Skeleton className="shadow-none hover:bg-gray-800 hover:text-white min-h-[200px]" />
        <Skeleton className="shadow-none hover:bg-gray-800 hover:text-white min-h-[200px]" />
        <Skeleton className="shadow-none hover:bg-gray-800 hover:text-white min-h-[200px]" />
        <Skeleton className="shadow-none hover:bg-gray-800 hover:text-white min-h-[200px]" />
        <Skeleton className="shadow-none hover:bg-gray-800 hover:text-white min-h-[200px]" />
        <Skeleton className="shadow-none hover:bg-gray-800 hover:text-white min-h-[200px]" />
      </div>
    )
  }

  return (
    <div className="">
      <Image src={'/images/premium-header.jpg'} alt={'law'} width={10000} height={100} className='w-full mt-4 rounded-2xl' />
      <div className='flex md:flex-row flex-col md:justify-between md:items-center  py-6 border-b-1 border-primary'>
        <div>
          <h1 className='text-4xl font-bold text-primary'>Premium</h1>
          <p>Looking for Professional Service Provider or <span><Link href={"/jobs"}>Open Job Opportunity?</Link></span></p>
        </div>
        <div className='mt-4'>
          <Link href={"/post-job"}><Button className='rounded-sm font-bold text-white'>Post A Service Request</Button></Link>
        </div>
      </div>


      <div>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-6 mt-10 md:px-0 px-4  mb-8'>
          {legal.map((category) => (
            <Link key={category.id} href={`/premium/${category.id}`}>
              <Card key={category.id} className="shadow-none hover:bg-gray-800 hover:text-white min-h-[220px]">

                <CardContent className=''>
                  <div >
                    <Image src={category.icon} alt={category.name} width={40} height={50} className='object-contain my-4' />
                  </div>
                  <p className='font-bold '>{category.name}</p>
                </CardContent>
                <CardFooter className='flex items-center justify-between'>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Premium;
