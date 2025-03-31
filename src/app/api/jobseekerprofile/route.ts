import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma";
import { requireUser } from "@/utils/requireUser";

export async function GET() {
    try {
        // Get the authenticated user's session
        const session = await requireUser();
        if (!session || !session.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const userId = session.id;

        // Fetch the user's profile
        const profile = await prisma.jobSeeker.findUnique({
            where: { userId },
        });

        if (!profile) {
            return NextResponse.json({ error: "Job Seeker not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: profile }, { status: 200 });
    } catch (error) {
        console.error("Error fetching profile:", error);
        return NextResponse.json({ error: "Failed to fetch profile" }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    try {
        // Get the authenticated user's session
        const session = await requireUser();
        if (!session || !session.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const userId = session.id;

        // Parse the request body
        const body = await req.json();
        const { title, name, image, location, about, telephone, subCategories } = body;

        // Update the user's profile
        const updatedProfile = await prisma.profile.update({
            where: { userId },
            data: {
                title,
                name,
                image,
                location,
                about,
                telephone,
                subCategories
            },
        });

        return NextResponse.json({ success: true, data: updatedProfile }, { status: 200 });
    } catch (error) {
        console.error("Error updating profile:", error);

        // Handle cases where the profile does not exist
        if ((error as { code?: string }).code === "P2025") {
          
            return NextResponse.json({ error: "Profile not found" }, { status: 404 });
        }

        return NextResponse.json({ error: "Failed to update profile" }, { status: 500 });
    }
}