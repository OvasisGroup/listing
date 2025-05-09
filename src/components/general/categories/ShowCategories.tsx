'use client';

import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type Subcategory = {
  id: number;
  name: string;
};

export default function SubcategoryPage() {
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchSubcategories = async (pageNum: number) => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/subcategories/subcategory?page=${pageNum}&limit=50`,
        { cache: 'no-store' }
      );

      if (!res.ok) {
        throw new Error('Failed to fetch subcategories');
      }

      const data: Subcategory[] = await res.json();

      if (data.length === 0) {
        setHasMore(false);
      } else {
        setSubcategories((prev) => [...prev, ...data]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSubcategories(page);
  }, [page]);

  const filteredSubcategories = subcategories.filter((subcat) =>
    subcat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLoadMore = () => {
    if (hasMore && !isLoading) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className='py-10'>
      <div>
                          <h1 className='text-4xl font-bold text-primary'>All Categories</h1>
                          <p>Looking for Professional Service Provider or <span><Link href={"/jobs"}>Open Job Opportunity?</Link></span></p>
                      </div>

      <input
        type="text"
        placeholder="Search subcategories..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="my-4 p-2 border rounded w-full border-primary"
      />

      <ul className="space-y-2 flex flex-wrap gap-2">
        {filteredSubcategories.map((subcat) => (
          // <li key={subcat.id} className="p-2 bg-gray-100 rounded text-black">
          //   <Link href="/post-job">{subcat.name}</Link>
          // </li>
          <AlertDialog key={subcat.id}>
          <AlertDialogTrigger asChild>
              <Button className="border-1 rounded-4xl px-4 py-2 w-fit break-inside-avoid hover:bg-green-50 text-white hover:text-black">
                  {subcat.name}
              </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
              <AlertDialogHeader>
                  <h2 className="text-lg font-bold">Subcategory Details</h2>
                  <p>Do you want to post a job with <span className="font-bold text-primary">{subcat.name}?</span></p>
              </AlertDialogHeader>
              <AlertDialogFooter>
                  <AlertDialogCancel>
                      Cancel
                  </AlertDialogCancel>
                  <Button asChild className="text-white">
                      <Link href={`/post-job/${subcat.id}`}>
                          Confirm
                      </Link>
                  </Button>
              </AlertDialogFooter>
          </AlertDialogContent>
      </AlertDialog>
        ))}
      </ul>

      {hasMore && !searchTerm && (
        <button
          onClick={handleLoadMore}
          disabled={isLoading}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          {isLoading ? 'Loading...' : 'Load More'}
        </button>
      )}
    </div>
  );
}