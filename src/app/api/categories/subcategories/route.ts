import { NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma";


export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, slug, isActive, categoryId } = body;

        // Validate required fields
        if (!name || !slug || !categoryId) {
            return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
        }

        // Create a new SubCategory
        const subCategory = await prisma.subCategory.create({
            data: {
                name,
                slug,
                isActive: isActive !== undefined ? isActive : true,
                categoryId,
            },
        });

        return NextResponse.json({ success: true, data: subCategory }, { status: 201 });
    } catch (error) {
        console.error("Error creating subcategory:", error);
        return NextResponse.json({ success: false, error: "Failed to create subcategory" }, { status: 500 });
    }
}

export async function GET() {
    try {
        // Fetch all SubCategories
        const subCategories = await prisma.subCategory.findMany({
            include: {
                category: true, // Include related Category data
            },
        });

        return NextResponse.json({ success: true, data: subCategories }, { status: 200 });
    } catch (error) {
        console.error("Error fetching subcategories:", error);
        return NextResponse.json({ success: false, error: "Failed to fetch subcategories" }, { status: 500 });
    }
}