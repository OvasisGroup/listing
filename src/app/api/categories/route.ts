import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { requireUser } from "@/utils/requireUser";
import { prisma } from "../../../../prisma/prisma";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const name = formData.get("name") as string;
        const slug = formData.get("slug") as string;
        const description = formData.get("description") as string | null;
        const isActive = formData.get("isActive") === "true";

        const imageFile = formData.get("image") as File | null;
        const iconFile = formData.get("icon") as File | null;

        let imageUrl = null;
        let iconUrl = null;

        // Save image locally
        if (imageFile) {
            const imageBuffer = Buffer.from(await imageFile.arrayBuffer());
            const imageFileName = `${uuidv4()}-${imageFile.name}`;
            const imagePath = path.join(process.cwd(), "public/uploads", imageFileName);

            await fs.mkdir(path.dirname(imagePath), { recursive: true });
            await fs.writeFile(imagePath, imageBuffer);

            imageUrl = `/uploads/${imageFileName}`;
        }

        // Save icon locally
        if (iconFile) {
            const iconBuffer = Buffer.from(await iconFile.arrayBuffer());
            const iconFileName = `${uuidv4()}-${iconFile.name}`;
            const iconPath = path.join(process.cwd(), "public/uploads", iconFileName);

            await fs.mkdir(path.dirname(iconPath), { recursive: true });
            await fs.writeFile(iconPath, iconBuffer);

            iconUrl = `/uploads/${iconFileName}`;
        }

        // Create a new Category
        const category = await prisma.category.create({
            data: {
                name,
                slug,
                description: description || null,
                image: imageUrl,
                icon: iconUrl,
                isActive: isActive !== undefined ? isActive : true,
            },
        });

        return NextResponse.json({ success: true, data: category }, { status: 201 });
    } catch (error) {
        console.error("Error creating category:", error);
        return NextResponse.json({ success: false, error: "Failed to create category" }, { status: 500 });
    }
}

export async function GET() {
    const session = await requireUser();

    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const company = await prisma.category.findMany();
        return NextResponse.json(company, { status: 200 });
    } catch (error) {
        console.log("error", error);
        return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
    }
}

// PATCH: Update an existing category
export async function PATCH(req: Request) {
    try {
        const formData = await req.formData();
        const id = formData.get("id") as string;
        const name = formData.get("name") as string | null;
        const slug = formData.get("slug") as string | null;
        const description = formData.get("description") as string | null;
        const isActive = formData.get("isActive") === "true";

        const imageFile = formData.get("image") as File | null;
        const iconFile = formData.get("icon") as File | null;

        let imageUrl = null;
        let iconUrl = null;

        // Save new image locally if provided
        if (imageFile) {
            const imageBuffer = Buffer.from(await imageFile.arrayBuffer());
            const imageFileName = `${uuidv4()}-${imageFile.name}`;
            const imagePath = path.join(process.cwd(), "public/uploads", imageFileName);

            await fs.mkdir(path.dirname(imagePath), { recursive: true });
            await fs.writeFile(imagePath, imageBuffer);

            imageUrl = `/uploads/${imageFileName}`;
        }

        // Save new icon locally if provided
        if (iconFile) {
            const iconBuffer = Buffer.from(await iconFile.arrayBuffer());
            const iconFileName = `${uuidv4()}-${iconFile.name}`;
            const iconPath = path.join(process.cwd(), "public/uploads", iconFileName);

            await fs.mkdir(path.dirname(iconPath), { recursive: true });
            await fs.writeFile(iconPath, iconBuffer);

            iconUrl = `/uploads/${iconFileName}`;
        }

        // Update the category
        const updatedCategory = await prisma.category.update({
            where: { id },
            data: {
                name: name || undefined,
                slug: slug || undefined,
                description: description || undefined,
                image: imageUrl || undefined,
                icon: iconUrl || undefined,
                isActive: isActive !== undefined ? isActive : undefined,
            },
        });

        return NextResponse.json({ success: true, data: updatedCategory }, { status: 200 });
        console.log("updatedCategory", updatedCategory);
    } catch (error) {
        console.error("Error updating category:", error);
        return NextResponse.json({ success: false, error: "Failed to update category" }, { status: 500 });
    }
}