import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma";

interface Context {
    params: Promise<{ id: string }>; // 👈 `params` must be awaited
}

export async function GET(req: NextRequest, context: Context) {
    try {
        // Await params since they are a Promise
        const { id } = await context.params; // Await the params here

        if (!id) {
            return NextResponse.json({ error: "Category ID is required" }, { status: 400 });
        }

        // Read pagination parameters from query string
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get("page") || "1", 10);
        const limit = parseInt(searchParams.get("limit") || "25", 10);  // Default limit is 20
        const skip = (page - 1) * limit;

        // Fetch subcategories with pagination
        const category = await prisma.category.findUnique({
            where: { id },
            include: {
                subCategories: {
                    skip,
                    take: limit,
                },
            },
        });

        if (!category) {
            return NextResponse.json({ error: "Category not found" }, { status: 404 });
        }

        // Get total count of subCategories for pagination metadata
        const totalSubCategories = await prisma.subCategory.count({
            where: { categoryId: id },
        });

        return NextResponse.json({
            success: true,
            data: category,
            pagination: {
                total: totalSubCategories,
                page,
                limit,
                totalPages: Math.ceil(totalSubCategories / limit),
            },
        }, { status: 200 });

    } catch (error) {
        console.error("Error fetching category:", error);
        return NextResponse.json({ error: "Failed to fetch category" }, { status: 500 });
    }
}



export async function PATCH(req: NextRequest, context: Context) {
    try {
        const { id } = await context.params; // ✅ Await `params`

        if (!id) {
            return NextResponse.json({ error: "Category ID is required" }, { status: 400 });
        }

        const body = await req.json();
        const { name, description } = body;

        // Update the category
        const updatedCategory = await prisma.category.update({
            where: { id },
            data: {
                name: name || undefined,
                description: description || undefined,
            },
        });

        return NextResponse.json({ success: true, data: updatedCategory }, { status: 200 });
    } catch (error) {
        console.error("Error updating category:", error);
        return NextResponse.json({ error: "Failed to update category" }, { status: 500 });
    }
}
