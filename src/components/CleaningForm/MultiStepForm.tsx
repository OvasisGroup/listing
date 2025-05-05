// components/CleaningForm/MultiStepForm.tsx
'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { cleaningSchema, CleaningFormData } from './validation';
import { useState } from 'react';
import StepAddress from './StepAddress';
import StepPersonalInfo from './StepPersonalInfo';
import StepPropertyDetails from './StepPropertyDetails';
import StepCleaningInfo from './StepCleaningInfo';


const steps = ["Address", "Personal Info", "Property Details", "Cleaning Info"];

export default function MultiStepForm() {
  const methods = useForm<CleaningFormData>({
    resolver: zodResolver(cleaningSchema),
    defaultValues: {},
    mode: 'onBlur',
  });

  const [step, setStep] = useState(0);

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const onSubmit = (data: CleaningFormData) => {
    console.log("Final Submission:", data);
    // Submit to backend here
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="max-w-xl mx-auto p-4 space-y-4">
        <h2 className="text-2xl font-bold">{steps[step]}</h2>

        {step === 0 && <StepAddress methods={methods} />}
        {step === 1 && <StepPersonalInfo methods={methods} />}
        {step === 2 && <StepPropertyDetails methods={methods} />}
        {step === 3 && <StepCleaningInfo methods={methods} />}

        <div className="flex justify-between mt-4">
          {step > 0 && (
            <button type="button" onClick={prevStep} className="px-4 py-2 border rounded">
              Back
            </button>
          )}

          {step < steps.length - 1 ? (
            <button
              type="button"
              onClick={async () => {
                const isStepValid = await methods.trigger();
                if (isStepValid) nextStep();
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Next
            </button>
          ) : (
            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">
              Submit
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  );
}
