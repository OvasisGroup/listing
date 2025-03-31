"use server"

import { requireUser } from "./requireUser"
import { z } from "zod"
import { companySchema, jobseekerSchema } from "./zodSchemas";
import { prisma } from "../../prisma/prisma";
import { redirect } from "next/navigation";


export async function createCompany(data: z.infer<typeof companySchema>) {
    const session = await requireUser();

    const validateData = companySchema.parse(data);

    await prisma.user.update({
        where: {
            id: session.id,
        },
        data: {
            onboardingCompleted: true,
            userType: "COMPANY",
            Company: {
                create: {
                    name: validateData.name,
                    email: validateData.email,
                    about: validateData.about,
                    location: validateData.location,
                    website: validateData.website,
                    logo: validateData.logo,
                },
            }
        }
    });

    // Create a profile for the user
  await prisma.profile.create({
    data: {
      userId: session.id,
      name: validateData.name,
      location: validateData.location,
      about: validateData.about,
      title: "Default Title", // Replace "Default Title" with an appropriate value
    },
  });

    return redirect('/');
}


export async function createJobSeeker(data: z.infer<typeof jobseekerSchema>) {
    const user = await requireUser();

    const validateData = jobseekerSchema.parse(data);

    await prisma.user.update({
        where: {
            id: user.id as string,
        },
        data: {
            onboardingCompleted: true,
            userType: "JOB_SEEKER",
            JobSeeker: {
                create: {
                    name: validateData.name,
                    about: validateData.about,
                    location: validateData.location,
                    resume: validateData.resume,
                },
            }
        }
    });

    // Create a profile for the user
  await prisma.profile.create({
    data: {
      userId: user.id as string,
      name: validateData.name,
      location: validateData.location,
      about: validateData.about,
      title: "Default Title", // Replace "Default Title" with an appropriate value
    },
  });

    return redirect ('/')
}