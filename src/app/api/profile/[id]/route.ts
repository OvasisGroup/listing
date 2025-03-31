import { NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    // Fetch the Profile and its related JobSeeker details
    const profile = await prisma.profile.findUnique({
      where: { id },
      include: {
        jobSeeker: true, // Include the related JobSeeker details
      },
    });

    if (!profile) {
      return NextResponse.json(
        { error: "Profile not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: profile });
  } catch (error) {
    console.error("Error fetching profile:", error);
    return NextResponse.json(
      { error: "Failed to fetch profile" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const body = await req.json();

    // Update the Profile
    const updatedProfile = await prisma.profile.update({
      where: { id },
      data: {
        title: body.title,
        name: body.name,
        image: body.image,
        location: body.location,
        about: body.about,
        telephone: body.telephone,
        jobSeeker: body.jobSeeker
          ? {
              update: {
                name: body.jobSeeker.name,
                location: body.jobSeeker.location,
                resume: body.jobSeeker.resume,
                about: body.jobSeeker.about,
              },
            }
          : undefined,
      },
      include: {
        jobSeeker: true, // Include the updated JobSeeker details
      },
    });

    return NextResponse.json({ success: true, data: updatedProfile });
  } catch (error) {
    console.error("Error updating profile:", error);
    return NextResponse.json(
      { error: "Failed to update profile" },
      { status: 500 }
    );
  }
}