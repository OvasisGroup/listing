import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma";


export async function GET(req: NextRequest, context: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await context.params; // ✅ Await params before using

        if (!id) {
            return NextResponse.json({ error: "Category ID is required" }, { status: 400 });
        }

        const category = await prisma.category.findUnique({
            where: { id },
            include: {
                subCategories: true,
            },
        });

        if (!category) {
            return NextResponse.json({ error: "Category not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: category }, { status: 200 });
    } catch (error) {
        console.error("Error fetching category:", (error as Error).message);
        return NextResponse.json({ error: "Failed to fetch category" }, { status: 500 });
    }
}
