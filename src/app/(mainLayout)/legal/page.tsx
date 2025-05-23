"use client";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Scale } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
// pages/index.tsx
import { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

const Home = () => {
  const [legal, setLegal] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/legal`); // Replace with your API
        const json = await res.json();
        setLegal(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }finally {
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
      <Image src={'/images/law-header.jpg'} alt={'law'} width={10000} height={100} className='w-full mt-4 rounded-2xl' />
      <div className='flex md:flex-row flex-col md:justify-between md:items-center  py-6 border-b-1 border-primary'>
              <div>
                <h1 className='text-4xl font-bold text-primary'>Legal</h1>
                <p>Looking for Professional Service Provider or <span><Link href={"/jobs"}>Open Job Opportunity?</Link></span></p>
              </div>
              <div className='mt-4'>
                <Link href={"/post-job"}><Button className='rounded-sm font-bold text-white'>Post A Service Request</Button></Link>
              </div>
            </div>


      <div>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-6 mt-10 md:px-0 px-4  mb-8'>
          {legal.map((category) => (
            <Link key={category.id} href={`/legal/${category.id}`}>
              <Card key={category.id} className="shadow-none hover:bg-gray-800 hover:text-white min-h-[200px]">

                <CardContent className=''>
                  <div >
                    <Scale className='text-primary mb-4'/>
                  </div>
                  <p className='font-bold '>{category.title}</p>
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

export default Home;
