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
            return NextResponse.json({ error: "Premium ID is required" }, { status: 400 });
        }

        // Fetch the category by ID
        const legal = await prisma.premium.findUnique({
            where: { id },
        });

        if (!legal) {
            return NextResponse.json({ error: "Premium not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: legal }, { status: 200 });
    } catch (error) {
        console.error("Error fetching category:", error);
        return NextResponse.json({ error: "Failed to fetch category" }, { status: 500 });
    }
}