import { NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;

        // Fetch the category by ID, including its subcategories
        const category = await prisma.category.findUnique({
            where: { id },
            include: {
                subCategories: true, // Include related subcategories
            },
        });

        if (!category) {
            return NextResponse.json({ error: "Category not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: category }, { status: 200 });
    } catch (error) {
        console.error("Error fetching category:", error);
        return NextResponse.json({ error: "Failed to fetch category" }, { status: 500 });
    }
}