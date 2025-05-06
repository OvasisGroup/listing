/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';

export default function ListingCount() {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch('/api/listing/count');
        if (!res.ok) throw new Error('Failed to fetch count');
        const data = await res.json();
        setCount(data.count);
      } catch (err: any) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchCount();
  }, []);

  if (loading) return <p>Loading listing count...</p>;
  if (error) return <p>Error: {error}</p>;

  return <h1 className='font-ligh text-4xl text-gray-800 mt-4'>{count}</h1>;
}
