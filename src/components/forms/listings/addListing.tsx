/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const formSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  budget: z.number().positive(),
  subCategoryIds: z.array(z.string()).nonempty(),
  location: z.string().optional(),
  googlePlaceId: z.string().optional(),
  estateName: z.string().optional(),
  apartmentNumber: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  isFeatured: z.boolean().optional(),
  isPremium: z.boolean().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function CreateListingForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subCategoryIds: [],
      isFeatured: false,
      isPremium: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      await axios.post('/api/listing', data);
      router.refresh();
      alert('Listing created successfully!');
    } catch (err: any) {
      console.error(err);
      alert(err?.response?.data?.error || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-white p-6 rounded-lg shadow max-w-xl"
    >
      <h2 className="text-xl font-bold">Create New Listing</h2>

      <div>
        <label className="block">Title</label>
        <input {...register('title')} className="input" />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </div>

      <div>
        <label className="block">Description</label>
        <textarea {...register('description')} className="input" />
        {errors.description && <p className="text-red-500">{errors.description.message}</p>}
      </div>

      <div>
        <label className="block">Budget</label>
        <input type="number" {...register('budget', { valueAsNumber: true })} className="input" />
        {errors.budget && <p className="text-red-500">{errors.budget.message}</p>}
      </div>

      <div>
        <label className="block">Sub Category IDs (comma-separated)</label>
        <input
          onChange={(e) => {
            const values = e.target.value
              .split(',')
              .map((s) => s.trim())
              .filter((s) => s); // removes empty strings
          
            if (values.length > 0) {
              setValue('subCategoryIds', values as [string, ...string[]]);
            }
          }}
          className="input"
        />
        {errors.subCategoryIds && (
          <p className="text-red-500">{errors.subCategoryIds.message}</p>
        )}
      </div>

      <div>
        <label className="block">Location</label>
        <input {...register('location')} className="input" />
      </div>

      <div>
        <label className="block">Google Place ID</label>
        <input {...register('googlePlaceId')} className="input" />
      </div>

      <div>
        <label className="block">Estate Name</label>
        <input {...register('estateName')} className="input" />
      </div>

      <div>
        <label className="block">Apartment Number</label>
        <input {...register('apartmentNumber')} className="input" />
      </div>

      <div>
        <label className="block">Start Date</label>
        <input type="date" {...register('startDate')} className="input" />
      </div>

      <div>
        <label className="block">End Date</label>
        <input type="date" {...register('endDate')} className="input" />
      </div>

      <div className="flex gap-4">
        <label>
          <input type="checkbox" {...register('isFeatured')} /> Featured
        </label>
        <label>
          <input type="checkbox" {...register('isPremium')} /> Premium
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? 'Submitting...' : 'Create Listing'}
      </button>
    </form>
  );
}
