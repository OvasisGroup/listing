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

 