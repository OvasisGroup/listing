// components/CleaningForm/StepCleaningInfo.tsx
import { UseFormReturn } from "react-hook-form";
import { CleaningFormData } from "./validation";

export default function StepCleaningInfo({ methods }: { methods: UseFormReturn<CleaningFormData> }) {
  const { register, formState: { errors } } = methods;
  return (
    <div className="space-y-4">
      <div>
        <label className="block mb-1">Cleaning Type</label>
        <input {...register("cleaningType")} className="w-full border rounded p-2" />
        {errors.cleaningType && <p className="text-red-500 text-sm">{errors.cleaningType.message}</p>}
      </div>

      <div>
        <label className="block mb-1">Description</label>
        <textarea {...register("description")} className="w-full border rounded p-2" />
        {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
      </div>

      <div>
        <label className="block mb-1">Preferred Contact Method</label>
        <select {...register("contactType")} className="w-full border rounded p-2">
          <option value="">Select</option>
          <option value="phone">Phone</option>
          <option value="email">Email</option>
        </select>
        {errors.contactType && <p className="text-red-500 text-sm">{errors.contactType.message}</p>}
      </div>

      <div>
        <label className="block mb-1">Date</label>
        <input {...register("date")} className="w-full border rounded p-2" type="date" />
        {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
      </div>

      <div>
        <label className="block mb-1">Time</label>
        <input {...register("time")} className="w-full border rounded p-2" type="time" />
        {errors.time && <p className="text-red-500 text-sm">{errors.time.message}</p>}
      </div>
    </div>
  );
}
