import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { prisma } from "../../../../prisma/prisma";

// Helper: Save uploaded file locally and return its public URL
async function saveUploadedFile(file: File): Promise<string> {
    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = `${uuidv4()}-${sanitizeFilename(file.name)}`;
    const filePath = path.join(process.cwd(), "public/uploads", fileName);

    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, buffer);

    return `/uploads/${fileName}`;
}

// Helper: Sanitize file names
function sanitizeFilename(fileName: string): string {
    return fileName.replace(/[^a-z0-9.\-_]/gi, "_").toLowerCase();
}

// POST: Create a new premium
export async function POST(req: Request) {
    try {
        if (!req.headers.get("content-type")?.includes("multipart/form-data")) {
            return NextResponse.json({ error: "Invalid content type" }, { status: 400 });
        }

        const formData = await req.formData();
        const name = formData.get("name") as string;
        const description = formData.get("description") as string | null;

        const imageFile = formData.get("image") as File | null;
        const iconFile = formData.get("icon") as File | null;

        const imageUrl = imageFile ? await saveUploadedFile(imageFile) : null;
        const iconUrl = iconFile ? await saveUploadedFile(iconFile) : null;

        const premium = await prisma.premium.create({
            
            data: {
                name,
                description: description || null,
                image: imageUrl,
                icon: iconUrl,
            },
        });
        console.log(prisma.premium); // should NOT be undefined

        return NextResponse.json({ success: true, data: premium }, { status: 201 });
    } catch (error) {
        console.error("Error creating premium:", error);
        return NextResponse.json({ success: false, error: "Failed to create premium" }, { status: 500 });
    }
}

// GET: Fetch all premium items
export async function GET() {
    try {
        const premiums = await prisma.premium.findMany();
        return NextResponse.json(premiums, { status: 200 });
    } catch (error) {
        console.error("Error fetching premiums:", error);
        return NextResponse.json({ error: "Failed to fetch premiums" }, { status: 500 });
    }
}

// PATCH: Update an existing premium
export async function PATCH(req: Request) {
    try {
        if (!req.headers.get("content-type")?.includes("multipart/form-data")) {
            return NextResponse.json({ error: "Invalid content type" }, { status: 400 });
        }

        const formData = await req.formData();
        const id = formData.get("id") as string;
        const name = formData.get("name") as string | null;
        const description = formData.get("description") as string | null;

        const imageFile = formData.get("image") as File | null;
        const iconFile = formData.get("icon") as File | null;

        const imageUrl = imageFile ? await saveUploadedFile(imageFile) : undefined;
        const iconUrl = iconFile ? await saveUploadedFile(iconFile) : undefined;

        const updatedPremium = await prisma.premium.update({
            where: { id },
            data: {
                name: name || undefined,
                description: description || undefined,
                image: imageUrl,
                icon: iconUrl,
            },
        });

        console.log("updatedPremium", updatedPremium);
        return NextResponse.json({ success: true, data: updatedPremium }, { status: 200 });
    } catch (error) {
        console.error("Error updating premium:", error);
        return NextResponse.json({ success: false, error: "Failed to update premium" }, { status: 500 });
    }
}
