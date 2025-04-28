/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const MultistepForm = () => {
  const { register, handleSubmit } = useForm();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<any>({});
  const [phoneNumber, setPhoneNumber] = useState('');
  const [mpesaCharge, setMpesaCharge] = useState(0);

  // Sample subcategories, you can replace this with your actual categories
  const subcategories = [
    { id: '1', name: 'Category 1' },
    { id: '2', name: 'Category 2' },
    { id: '3', name: 'Category 3' },
  ];

  // Sample locations (you can modify this with real location data or an API request)
  const locations = ['Location 1', 'Location 2', 'Location 3'];

  // Calculate the MPESA charge based on the selected budget
  const getMPESACharge = (budget: number) => {
    if (budget >= 1 && budget <= 500) {
      return 50;
    } else if (budget >= 501 && budget <= 1000) {
      return 100;
    } else if (budget >= 1001 && budget <= 5000) {
      return 150;
    } else if (budget > 5000) {
      return 200;
    }
    return 0;
  };

  const handleBudgetChange = (budget: number) => {
    const charge = getMPESACharge(budget);
    setMpesaCharge(charge);
  };

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const handleFormSubmit = async (data: any) => {
    setFormData((prevData: any) => ({
      ...prevData,
      ...data,
    }));

    if (step === 3) {
      try {
        const response = await fetch('/api/listings', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            phoneNumber,
          }),
        });

        if (response.ok) {
          // Handle successful response (e.g., navigate to success page)
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    } else {
      nextStep();
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2>Step 1: Select Location</h2>
            <select {...register('location')}>
              {locations.map((location, index) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Step 2: Title & Description</h2>
            <input
              {...register('title')}
              placeholder="Title"
              type="text"
            />
            <input
              {...register('description')}
              placeholder="Description"
              type="text"
            />
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Step 3: Budget & Date</h2>
            <input
              {...register('budget')}
              placeholder="Budget"
              type="number"
              onChange={(e) => handleBudgetChange(Number(e.target.value))}
            />
            <p>MPESA Charge: {mpesaCharge} KES</p>
            <input
              {...register('startDate')}
              placeholder="Start Date"
              type="date"
            />
            <input
              {...register('endDate')}
              placeholder="End Date"
              type="date"
            />
          </div>
        );
      case 4:
        return (
          <div>
            <h2>Step 4: Subcategories & Final Details</h2>
            <select {...register('subCategories')} multiple>
              {subcategories.map((subcategory) => (
                <option key={subcategory.id} value={subcategory.id}>
                  {subcategory.name}
                </option>
              ))}
            </select>

            <input
              {...register('phoneNumber')}
              placeholder="Phone Number"
              type="text"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button type="submit">Submit</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      {renderStepContent()}
      <div>
        {step > 1 && <button type="button" onClick={prevStep}>Back</button>}
        {step < 4 && <button type="button" onClick={nextStep}>Next</button>}
      </div>
    </form>
  );
};

export default MultistepForm;
