import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma";

interface Context {
    params: Promise<{ id: string }>; // 👈 `params` must be awaited
}


export async function PATCH(req: NextRequest, context: Context) {
    try {
        const { id } = await context.params; // ✅ Await `params`

        if (!id) {
            return NextResponse.json({ error: "How to help ID is required" }, { status: 400 });
        }

        const bodyContent = await req.json();
        const { title, body } = bodyContent;

        // Update the category
        const updatedCategory = await prisma.help.update({
            where: { id },
            data: {
                title: title || undefined,
                body: body || undefined,
            },
        });

        return NextResponse.json({ success: true, data: updatedCategory }, { status: 200 });
    } catch (error) {
        console.error("Error updating how to help:", error);
        return NextResponse.json({ error: "Failed to update How to help" }, { status: 500 });
    }
}
