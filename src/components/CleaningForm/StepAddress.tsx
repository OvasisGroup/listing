// components/CleaningForm/StepAddress.tsx
import { UseFormReturn } from "react-hook-form";
import { CleaningFormData } from "./validation";


export default function StepAddress({ methods }: { methods: UseFormReturn<CleaningFormData> }) {
  const { register, formState: { errors } } = methods;
  return (
    <div>
      <label className="block mb-2 font-semibold">Address</label>
      <input {...register("address")} className="w-full border rounded p-2" />
      {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
    </div>
  );
}
