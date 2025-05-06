import { z } from "zod"

export const companySchema = z.object({
    name: z.string().min(3,"Company must be atleast 3 chacracters"),
    email: z.string().email("Please provide a valid Email"),
    about: z.string().min(10,"Company about must be atleast 10 chacracters"),
    location: z.string().min(3, "Company location must be defined"),
    website: z.string().url("Please provide a valid URL"),
    logo: z.string().min(3, "Please Upload a logo"),
})

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


export const listingSchema = z.object({
  title: z.string(),
  description: z.string(),
  budget: z.number(),
  subCategoryIds: z.array(z.string()),
  location: z.string().optional(),
  googlePlaceId: z.string().optional(),
  estateName: z.string().optional(),
  apartmentNumber: z.string().optional(),
  startDate: z.string().nullable().optional(),
  endDate: z.string().nullable().optional(),
  isFeatured: z.boolean().optional(),
  isPremium: z.boolean().optional(),
});


export const jobseekerSchema = z.object({
    name: z.string().min(3,"User must be atleast 3 chacracters"),
    about: z.string().min(10,"User about must be atleast 10 chacracters"),
    location: z.string().min(3, "User location must be defined"),
    resume: z.string().min(1, "Please Upload a Resume"),
})

export const premiumSchema = z.object({
    name: z.string().min(3,"User must be atleast 3 chacracters"),
    description: z.string().min(10,"User about must be atleast 10 chacracters"),
    image: z.string().min(3, "Please Upload a header image"),
    icon: z.string().min(3, "Please Upload an icon"),
})

export const categorySchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  image: z
    .any()
    .refine((file) => file?.length > 0, "Image is required"),
  icon: z
    .any()
    .refine((file) => file?.length > 0, "Icon is required"),
});

export const stepOneSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  budget: z.number().min(1, 'Budget must be greater than 0'),
});

export const stepTwoSchema = z.object({
  subCategoryIds: z.array(z.string()).nonempty('At least one subcategory is required'),
  location: z.string().optional(),
  googlePlaceId: z.string().optional(),
});

export const stepThreeSchema = z.object({
  estateName: z.string().optional(),
  apartmentNumber: z.string().optional(),
  startDate: z.string().nullable().optional(),
  endDate: z.string().nullable().optional(),
  isFeatured: z.boolean().optional(),
  isPremium: z.boolean().optional(),
});

export type CategorySchema = z.infer<typeof categorySchema>;


 