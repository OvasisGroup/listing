// components/CleaningForm/StepPersonalInfo.tsx
import { UseFormReturn } from "react-hook-form";
import { CleaningFormData } from "./validation";

export default function StepPersonalInfo({ methods }: { methods: UseFormReturn<CleaningFormData> }) {
  const { register, formState: { errors } } = methods;
  return (
    <div className="space-y-4">
      <div>
        <label className="block mb-1">First Name</label>
        <input {...register("firstName")} className="w-full border rounded p-2" />
        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
      </div>

      <div>
        <label className="block mb-1">Last Name</label>
        <input {...register("lastName")} className="w-full border rounded p-2" />
        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
      </div>

      <div>
        <label className="block mb-1">Email</label>
        <input {...register("email")} className="w-full border rounded p-2" type="email" />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block mb-1">Phone</label>
        <input {...register("phone")} className="w-full border rounded p-2" />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
      </div>
    </div>
  );
}
