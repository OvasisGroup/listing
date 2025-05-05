// components/CleaningForm/StepPropertyDetails.tsx
import { UseFormReturn } from "react-hook-form";
import { CleaningFormData } from "./validation";

export default function StepPropertyDetails({ methods }: { methods: UseFormReturn<CleaningFormData> }) {
  const { register, formState: { errors } } = methods;
  return (
    <div className="space-y-4">
      <div>
        <label className="block mb-1">Apt/Suite</label>
        <input {...register("aptSuite")} className="w-full border rounded p-2" />
        {errors.aptSuite && <p className="text-red-500 text-sm">{errors.aptSuite.message}</p>}
      </div>

      <div>
        <label className="block mb-1">Bedrooms</label>
        <input {...register("bedroooms", { valueAsNumber: true })} className="w-full border rounded p-2" type="number" />
        {errors.bedroooms && <p className="text-red-500 text-sm">{errors.bedroooms.message}</p>}
      </div>

      <div>
        <label className="block mb-1">Bathrooms</label>
        <input {...register("bathrooms", { valueAsNumber: true })} className="w-full border rounded p-2" type="number" />
        {errors.bathrooms && <p className="text-red-500 text-sm">{errors.bathrooms.message}</p>}
      </div>
    </div>
  );
}
