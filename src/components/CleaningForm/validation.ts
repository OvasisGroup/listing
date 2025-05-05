// components/CleaningForm/validation.ts
import { z } from 'zod';

export const cleaningSchema = z.object({
  address: z.string().min(5, "Address is required"),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(10),
  aptSuite: z.string().optional(),
  bedroooms: z.number().min(0).optional(),
  bathrooms: z.number().min(0).optional(),
  cleaningType: z.string().optional(),
  description: z.string().optional(),
  contactType: z.string().optional(),
  date: z.coerce.date().optional(),
  time: z.string().optional(),
});

export type CleaningFormData = z.infer<typeof cleaningSchema>;
