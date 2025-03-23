import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        if (!params || !params.id) {
            return NextResponse.json({ error: "Category ID is required" }, { status: 400 });
        }

        // Fetch the category by ID
        const category = await prisma.category.findUnique({
            where: { id: params.id },
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

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        if (!params || !params.id) {
            return NextResponse.json({ error: "Category ID is required" }, { status: 400 });
        }

        const body = await req.json();
        const { name, description } = body;

        // Update the category
        const updatedCategory = await prisma.category.update({
            where: { id: params.id },
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
