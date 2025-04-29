// components/WhyChooseUsList.tsx
'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface WhyChooseUs {
  id: number;
  image: string;
  title: string;
  body: string;
  // Add more fields as per your DB schema
}

export default function WhyChooseUsList() {
  const [data, setData] = useState<WhyChooseUs[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/whychooseus');
        if (!res.ok) throw new Error('Failed to fetch');
        const result = await res.json();
        setData(result);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid md:grid-cols-4 gap-6 grid-cols-2 mt-10">
      {data.map(entry => (
        <div key={entry.id} className="p-4 border rounded-2xl hover:border-green-600">
            <Image src={entry.image} alt={entry.title} width={60} height={60} className='mt-4 pb-4' />
          <h3 className="text-lg font-bold">{entry.title}</h3>
          <p>{entry.body}</p>
        </div>
      ))}
    </div>
  );
}
