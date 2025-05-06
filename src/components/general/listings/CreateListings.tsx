/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { jsPDF } from 'jspdf';
import { useRouter } from 'next/navigation';
import { useLoadScript, Autocomplete } from '@react-google-maps/api';

const formSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  budget: z.coerce.number().positive(),
  phoneNumber: z.string().min(10),
  location: z.string().optional(),
  estateName: z.string().optional(),
  apartmentNumber: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  subCategoryIds: z.array(z.string()).min(1),
});

type FormData = z.infer<typeof formSchema>;

type SubCategory = {
  id: string;
  name: string;
};

const libraries: ("places")[] = ['places'];
const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

export default function CreateListingForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey,
    libraries,
  });

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    axios.get('/api/subcategories/subcategory')
      .then((res) => {
        setSubCategories(res.data);
      })
      .catch((err) => {
        console.error('Failed to fetch subcategories:', err);
      });
  }, []);

  const onPlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      const location = place.formatted_address || '';
      setValue('location', location);
    }
  };

  const generatePDF = (data: FormData) => {
    const doc = new jsPDF();
    const date = new Date().toLocaleString();

    doc.setFontSize(18);
    doc.text("Payment Receipt", 20, 20);
    doc.setFontSize(12);
    doc.text(`Date: ${date}`, 20, 30);
    doc.text(`Title: ${data.title}`, 20, 40);
    doc.text(`Description: ${data.description}`, 20, 50);
    doc.text(`Phone: ${data.phoneNumber}`, 20, 60);
    doc.text(`Budget: KES ${data.budget}`, 20, 70);
    doc.text(`Location: ${data.location || '-'}`, 20, 80);
    doc.text(`Estate: ${data.estateName || '-'}`, 20, 90);
    doc.text(`Apartment: ${data.apartmentNumber || '-'}`, 20, 100);
    doc.text(`Start: ${data.startDate || '-'}`, 20, 110);
    doc.text(`End: ${data.endDate || '-'}`, 20, 120);

    doc.save(`receipt-${data.title}-${Date.now()}.pdf`);
  };

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      const response = await axios.post('/api/listing', data);
      console.log('Success:', response.data);
      alert('Listing created & STK push sent!');
    } catch (error: any) {
      console.error('Error:', error.response?.data || error.message);
      alert('Error: ' + (error.response?.data?.error || 'Something went wrong'));
    } finally {
      setLoading(false);
      generatePDF(data);
      reset();
      router.push('/listings');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
      <input {...register('title')} placeholder="Title" className="border p-2 w-full" />
      <p className="text-red-500">{errors.title?.message}</p>

      <textarea {...register('description')} placeholder="Description" className="border p-2 w-full" />
      <p className="text-red-500">{errors.description?.message}</p>

      <input type="number" {...register('budget')} placeholder="Budget" className="border p-2 w-full" />
      <p className="text-red-500">{errors.budget?.message}</p>

      <input {...register('phoneNumber')} placeholder="Phone Number" className="border p-2 w-full" />
      <p className="text-red-500">{errors.phoneNumber?.message}</p>

      {isLoaded && (
        <Autocomplete
          onLoad={(auto) => setAutocomplete(auto)}
          onPlaceChanged={onPlaceChanged}
        >
          <input placeholder="Search Location" className="border p-2 w-full" />
        </Autocomplete>
      )}
      <input type="hidden" {...register('location')} />
      <p className="text-red-500">{errors.location?.message}</p>

      <input {...register('estateName')} placeholder="Estate Name" className="border p-2 w-full" />
      <input {...register('apartmentNumber')} placeholder="Apartment Number" className="border p-2 w-full" />
      <input type="date" {...register('startDate')} className="border p-2 w-full" />
      <input type="date" {...register('endDate')} className="border p-2 w-full" />

      <label>Subcategories:</label>
      <select multiple {...register('subCategoryIds')} className="border p-2 w-full">
        {subCategories.map((subcat) => (
          <option key={subcat.id} value={subcat.id}>
            {subcat.name}
          </option>
        ))}
      </select>
      <p className="text-red-500">{errors.subCategoryIds?.message}</p>

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? 'Submitting...' : 'Create Listing'}
      </button>
    </form>
  );
}
