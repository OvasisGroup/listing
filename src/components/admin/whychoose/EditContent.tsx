'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // ✅ Import router

interface WhyChooseUs {
  id: number;
  title: string;
  body: string;
}

export default function WhyChooseUsListEdit() {
  const router = useRouter(); // ✅ Initialize router
  const [data, setData] = useState<WhyChooseUs[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({ title: '', description: '' });

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/whychooseus');
      const result = await res.json();
      setData(result);
    }
    fetchData();
  }, []);

  const handleEdit = (item: WhyChooseUs) => {
    setEditingId(item.id);
    setFormData({ title: item.title, description: item.body });
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({ title: '', description: '' });
  };

  const handleSave = async (id: number) => {
    const res = await fetch(`/api/whychooseus/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      const updated = await res.json();
      setData(prev =>
        prev.map(item => (item.id === id ? updated : item))
      );
      // ✅ Redirect after save
      router.push('/whychooseus'); // or another route like `/dashboard`
    } else {
      alert('Failed to update');
    }
  };

  return (
    <div className="space-y-4 mt-8">
      {data.map(entry => (
        <div key={entry.id} className="p-4 border rounded shadow">
          {editingId === entry.id ? (
            <>
              <input
                type="text"
                value={formData.title}
                onChange={e => setFormData({ ...formData, title: e.target.value })}
                className="w-full mb-2 p-2 border rounded"
              />
              <textarea
                value={formData.description}
                onChange={e => setFormData({ ...formData, description: e.target.value })}
                className="w-full p-2 border rounded"
              />
              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => handleSave(entry.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-300 px-3 py-1 rounded"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <h3 className="text-lg font-bold">{entry.title}</h3>
              <p>{entry.body}</p>
              <button
                onClick={() => handleEdit(entry)}
                className="mt-2 text-sm text-blue-600"
              >
                Edit
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
