import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { prisma } from "../../../../prisma/prisma";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const title = formData.get("title") as string;
        const body = formData.get("body") as string | null;

        const imageFile = formData.get("image") as File | null;

        let imageUrl = null;

        // Save image locally
        if (imageFile) {
            const imageBuffer = Buffer.from(await imageFile.arrayBuffer());
            const imageFileName = `${uuidv4()}-${imageFile.name}`;
            const imagePath = path.join(process.cwd(), "public/uploads", imageFileName);

            await fs.mkdir(path.dirname(imagePath), { recursive: true });
            await fs.writeFile(imagePath, imageBuffer);

            imageUrl = `/uploads/${imageFileName}`;
        }


        // Create a new Category
        const whoweserve = await prisma.whoweserve.create({
            data: {
                image: imageUrl || "", // Provide a default empty string if imageUrl is undefined
                title: title,
                body: body || "",
            },
        });
        console.log("whoweserve created:", whoweserve);
        return NextResponse.json({ success: true, data: whoweserve }, { status: 201 });
   
    } catch (error) {
        console.error("Error creating whoweserve:", error);
        return NextResponse.json({ success: false, error: "Failed to whoweserve category" }, { status: 500 });
    }
}

export async function PATCH(req: Request) {
    try {
        const formData = await req.formData();
        const id = formData.get("id") as string; // Ensure id is retrieved
        const title = formData.get("title") as string;
        const body = formData.get("body") as string | null;

        if (!id) {
            return NextResponse.json({ success: false, error: "ID is required" }, { status: 400 });
        }

        const imageFile = formData.get("image") as File | null;
        let imageUrl = null;

        // Save new image locally if provided
        if (imageFile) {
            const imageBuffer = Buffer.from(await imageFile.arrayBuffer());
            const imageFileName = `${uuidv4()}-${imageFile.name}`;
            const imagePath = path.join(process.cwd(), "public/uploads", imageFileName);

            await fs.mkdir(path.dirname(imagePath), { recursive: true });
            await fs.writeFile(imagePath, imageBuffer);

            imageUrl = `/uploads/${imageFileName}`;
        }

        // Update the category
        const updatedwhoweserve = await prisma.whoweserve.update({
            where: { id }, // Ensure ID is passed correctly
            data: {
                image: imageUrl || undefined, // Don't overwrite image if not provided
                title: title,
                body: body || "",
            },
        });

        return NextResponse.json({ success: true, data: updatedwhoweserve }, { status: 200 });
    } catch (error) {
        console.error("Error updating category:", error);
        return NextResponse.json({ success: false, error: "Failed to update category" }, { status: 500 });
    }
}

// Get all About entries
export async function GET() {
  try {
    const aboutEntries = await prisma.whoweserve.findMany();
    return NextResponse.json(aboutEntries, { status: 200 });
  } catch (error) {
    console.error("GET /api/whoweserve error:", error);
    return NextResponse.json({ error: 'Failed to fetch About entries', details: (error instanceof Error ? error.message : 'Unknown error') }, { status: 500 });
  }
}