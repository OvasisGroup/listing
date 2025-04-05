import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma";

// Define the type for context
interface Context {
    params: Promise<{ id: string }>; // 👈 `params` must be awaited
}

export async function GET(req: NextRequest, context: Context) {
    try {
        const { id } = await context.params; // ✅ Await `params`
        
        if (!id) {
            return NextResponse.json({ error: "Category ID is required" }, { status: 400 });
        }

        // Fetch the category by ID
        const legal = await prisma.legal.findUnique({
            where: { id },
        });

        if (!legal) {
            return NextResponse.json({ error: "Category not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: legal }, { status: 200 });
    } catch (error) {
        console.error("Error fetching category:", error);
        return NextResponse.json({ error: "Failed to fetch category" }, { status: 500 });
    }
}

export async function PATCH(req: NextRequest, context: Context) {
    try {
        const { id } = await context.params; // ✅ Await `params`

        if (!id) {
            return NextResponse.json({ error: "Legal ID is required" }, { status: 400 });
        }

        const requestBody = await req.json();
        const { title, body } = requestBody;

        // Update the category
        const updatedLegal = await prisma.legal.update({
            where: { id },
            data: {
                title: title || undefined,
                body: body || undefined,
            },
        });

        return NextResponse.json({ success: true, data: updatedLegal }, { status: 200 });
    } catch (error) {
        console.error("Error updating category:", error);
        return NextResponse.json({ error: "Failed to update category" }, { status: 500 });
    }
}
