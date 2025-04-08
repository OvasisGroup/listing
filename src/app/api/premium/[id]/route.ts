import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;

    try {
        const premium = await prisma.premium.findUnique({
            where: { id },
        });

        if (!premium) {
            return NextResponse.json({ error: "Premium not found" }, { status: 404 });
        }

        return NextResponse.json({ data: premium }, { status: 200 });
    } catch (error) {
        console.error("Error fetching premium:", error);
        return NextResponse.json({ error: "Failed to fetch premium" }, { status: 500 });
    }
}
