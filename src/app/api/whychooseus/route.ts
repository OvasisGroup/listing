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
        const whychooseus = await prisma.whychooseus.create({
            data: {
                image: imageUrl || "", // Provide a default empty string if imageUrl is undefined
                title: title,
                body: body || "",
            },
        });
        console.log("whychooseus created:", whychooseus);
        return NextResponse.json({ success: true, data: whychooseus }, { status: 201 });
   
    } catch (error) {
        console.error("Error creating whychooseus:", error);
        return NextResponse.json({ success: false, error: "Failed to whychooseus category" }, { status: 500 });
    }
}


// Get all About entries
export async function GET() {
  try {
    const whychooseusEntries = await prisma.whychooseus.findMany();
    return NextResponse.json(whychooseusEntries, { status: 200 });
  } catch (error) {
    console.error("GET /api/whychooseus error:", error);
    return NextResponse.json({ error: 'Failed to fetch whychooseus entries', details: (error instanceof Error ? error.message : 'Unknown error') }, { status: 500 });
  }
}