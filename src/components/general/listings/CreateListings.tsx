'use client';
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Script from 'next/script';
import axios from 'axios';
import { useRouter } from 'next/navigation';

type SubCategory = {
  id: string;
  name: string;
};

type ListingFormValues = {
  title: string;
  description: string;
  budget: number;
  subCategoryId: string;
  location: string;
  estateName: string;
  apartmentNumber: string;
  duration: number;
  phoneNumber: string;
};

export default function ListingForm() {
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  const [placesReady, setPlacesReady] = useState(false);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ListingFormValues>();

  const watchedValues = watch();

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  useEffect(() => {
    axios
      .get('/api/categories/subcategories')
      .then((res) => {
        const data = res.data?.data ?? res.data;
        if (Array.isArray(data)) setSubCategories(data);
      })
      .catch(() => setSubCategories([]));
  }, []);

  useEffect(() => {
    if (!placesReady || typeof window === 'undefined') return;
    const input = document.getElementById('location') as HTMLInputElement;
    if (!input) return;
    const autocomplete = new google.maps.places.Autocomplete(input, { types: ['geocode'] });
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (place.formatted_address) {
        setValue('location', place.formatted_address);
      } else if (place.name) {
        setValue('location', place.name);
      }
    });
  }, [placesReady, setValue]);

  const onSubmit = async (data: ListingFormValues) => {
    try {
      setLoading(true);
      const res = await axios.post('/api/listing', data);
      const { transactionId } = res.data;

      let attempts = 0;
      const maxAttempts = 10;
      let paymentConfirmed = false;

      while (!paymentConfirmed && attempts < maxAttempts) {
        const statusRes = await axios.get(`/api/listing/status?transactionId=${transactionId}`);
        if (statusRes.data.status === 'SUCCESS') {
          paymentConfirmed = true;
        } else {
          await new Promise((resolve) => setTimeout(resolve, 3000));
          attempts++;
        }
      }

      setLoading(false);

      if (!paymentConfirmed) {
        alert('Payment was not confirmed in time. Please try again.');
        return;
      }

      const queryParams = new URLSearchParams(data as any).toString();
      router.push(`/success?${queryParams}`);
    } catch (error: any) {
      setLoading(false);
      console.error(error);
      alert('Failed to complete listing or payment.');
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 container mx-auto py-10">
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
        onLoad={() => setPlacesReady(true)}
      />

      {/* Form Section */}
      <div className="md:w-2/3">
        <p className="mb-4">Create Listing (Step {step} of 3)</p>
        <h2 className="text-xl font-semibold mb-4 text-primary">Tell Us About Your Location</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {step === 1 && (
            <>
              <input {...register('location', { required: true })} id="location" placeholder="Location" className="input w-full p-2 border rounded" />
              <input {...register('estateName', { required: true })} placeholder="Estate Name" className="input w-full p-2 border rounded" />
              <input {...register('apartmentNumber', { required: true })} placeholder="Apartment Number" className="input w-full p-2 border rounded" />
              <div className="flex justify-end">
                <button type="button" onClick={nextStep} className="bg-primary text-white px-4 py-2 rounded hover:bg-green-700 w-full">
                  Next
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <select {...register('subCategoryId', { required: true })} className="input w-full p-2 border rounded">
                <option value="">Select Subcategory</option>
                {subCategories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
              <div className="flex justify-between">
                <button type="button" onClick={prevStep} className="bg-gray-300 px-4 py-2 rounded">
                  Back
                </button>
                <button type="button" onClick={nextStep} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Next
                </button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <input {...register('title', { required: true })} placeholder="Title" className="input w-full p-2 border rounded" />
              <textarea {...register('description', { required: true })} placeholder="Description" className="textarea w-full p-2 border rounded" />
              <input {...register('budget', { required: true, valueAsNumber: true })} type="number" placeholder="Budget (KES)" className="input w-full p-2 border rounded" />
              <input {...register('duration', { required: true, valueAsNumber: true })} type="number" placeholder="Duration (days)" className="input w-full p-2 border rounded" />
              <input
                {...register('phoneNumber', {
                  required: true,
                  pattern: /^(?:254|0)?7\d{8}$/,
                })}
                placeholder="Phone Number (e.g. 0712345678)"
                className="input w-full p-2 border rounded"
              />
              <div className="flex justify-between">
                <button type="button" onClick={prevStep} className="bg-gray-300 px-4 py-2 rounded">
                  Back
                </button>
                <button type="submit" disabled={loading} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                  {loading ? 'Processing Payment...' : 'Submit & Pay'}
                </button>
              </div>
            </>
          )}
        </form>

        {Object.keys(errors).length > 0 && (
          <div className="text-red-500 mt-4">Please fill all required fields correctly.</div>
        )}
      </div>

      {/* Preview Section */}
      <div className="md:w-1/3 bg-gray-100 p-4 rounded shadow-md h-fit">
        <h3 className="text-lg font-medium mb-2">Live Preview</h3>
        <div className="text-sm space-y-2">
          <p><strong>Location:</strong> {watchedValues.location}</p>
          <p><strong>Estate:</strong> {watchedValues.estateName}</p>
          <p><strong>Apartment:</strong> {watchedValues.apartmentNumber}</p>
          <p><strong>Subcategory:</strong> {subCategories.find(s => s.id === watchedValues.subCategoryId)?.name}</p>
          <p><strong>Title:</strong> {watchedValues.title}</p>
          <p><strong>Description:</strong> {watchedValues.description}</p>
          <p><strong>Budget:</strong> {watchedValues.budget}</p>
          <p><strong>Duration:</strong> {watchedValues.duration} days</p>
          <p><strong>Phone:</strong> {watchedValues.phoneNumber}</p>
        </div>
      </div>
    </div>
  );
}
