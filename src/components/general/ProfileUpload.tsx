// components/ImageUpload.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ImageUpload({ userId }: { userId: string }) {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!image || !userId) return;

    const formData = new FormData();
    formData.append('image', image);
    formData.append('userId', userId);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    alert(data.image ? 'Uploaded!' : 'Failed');
  };

  return (
    <div className="space-y-4">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && <Image src={preview} alt="Profile Image" width={200} height={200} />}
      <button onClick={handleUpload} className="px-4 py-2 bg-blue-500 text-white rounded">
        Upload
      </button>
    </div>
  );
}
