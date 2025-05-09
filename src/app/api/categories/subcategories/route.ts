import { NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma";


export async function POST(req: Request) {
    try {
        const body = await req.json();

        if (!Array.isArray(body) || body.length === 0) {
            return NextResponse.json({ success: false, error: "Request body must be a non-empty array" }, { status: 400 });
        }

        const data = body.map(item => {
            if (!item.name || !item.slug || !item.categoryId) {
                throw new Error("Each item must have 'name', 'slug', and 'categoryId'");
            }
            return {
                name: item.name,
                slug: item.slug,
                isActive: Boolean(item.isActive),
                categoryId: item.categoryId,
            };
        });

        const subCategories = await prisma.subCategory.createMany({
            data,
            skipDuplicates: true,
        });

        return NextResponse.json({ success: true, count: subCategories.count }, { status: 201 });
    } catch (error) {
        console.error("Error creating subcategories:", error);
        return NextResponse.json({ success: false, error: error instanceof Error ? error.message : "Failed to create subcategories" }, { status: 500 });
    }
}



export async function GET() {
    
    try {
        // Fetch all SubCategories
        const subCategories = await prisma.subCategory.findMany({
            include: {
                category: true, // Include related Category data
            }
        });

        return NextResponse.json({ success: true, data: subCategories }, { status: 200 });
    } catch (error) {
        console.error("Error fetching subcategories:", error);
        return NextResponse.json({ success: false, error: "Failed to fetch subcategories" }, { status: 500 });
    }
}