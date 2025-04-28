import { z } from "zod"

export const companySchema = z.object({
    name: z.string().min(3,"Company must be atleast 3 chacracters"),
    email: z.string().email("Please provide a valid Email"),
    about: z.string().min(10,"Company about must be atleast 10 chacracters"),
    location: z.string().min(3, "Company location must be defined"),
    website: z.string().url("Please provide a valid URL"),
    logo: z.string().min(3, "Please Upload a logo"),
})

export const jobseekerSchema = z.object({
    name: z.string().min(3,"User must be atleast 3 chacracters"),
    about: z.string().min(10,"User about must be atleast 10 chacracters"),
    location: z.string().min(3, "User location must be defined"),
    resume: z.string().min(1, "Please Upload a Resume"),
})

export const listingSchema = z.object({
    title: z.string().min(3, "Title is too short"),
    description: z.string().min(10, "Description is too short"),
    budget: z.number().positive("Budget must be positive"),
    userId: z.string().min(1, "User ID is required"),
    subCategories: z.string().min(1, "SubCategory ID is required"),
    location: z.string().min(1, "Location is required"),
    googlePlaceId: z.string().min(1, "Google Place ID is required"),
    status: z.string().optional(),
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

export type CategorySchema = z.infer<typeof categorySchema>;


 