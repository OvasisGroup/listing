'use client';

import { useSearchParams } from 'next/navigation';
import { useRef } from 'react';
import html2pdf from 'html2pdf.js';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const contentRef = useRef<HTMLDivElement>(null);

  const location = searchParams.get('location');
  const title = searchParams.get('title');
  const description = searchParams.get('description');
  const budget = searchParams.get('budget');
  const estateName = searchParams.get('estateName');
  const apartmentNumber = searchParams.get('apartmentNumber');
  const duration = searchParams.get('duration');
  const phoneNumber = searchParams.get('phoneNumber');

  const downloadPDF = () => {
    if (contentRef.current) {
      html2pdf().from(contentRef.current).save('Success_Details.pdf');
    }
  };

  return (
    <div className="p-6">
      <div ref={contentRef} className="bg-white p-6 shadow rounded">
        <h1 className="text-2xl font-bold mb-4">Booking Success</h1>
        <p><strong>Title:</strong> {title}</p>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Estate Name:</strong> {estateName}</p>
        <p><strong>Apartment Number:</strong> {apartmentNumber}</p>
        <p><strong>Duration:</strong> {duration} mins</p>
        <p><strong>Budget:</strong> KES {budget}</p>
        <p><strong>Phone Number:</strong> {phoneNumber}</p>
      </div>

      <button
        onClick={downloadPDF}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Download PDF
      </button>
    </div>
  );
}
