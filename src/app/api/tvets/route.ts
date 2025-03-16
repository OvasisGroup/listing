import { requireUser } from "@/utils/requireUser";
import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma";

export async function POST(req: Request) {
    try {
        const session = await requireUser();
        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await req.json();

        // Ensure required fields are present
        if (!body.name || !body.location) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const newTvet = await prisma.tvets.create({
            data: {
                name: body.name,
            },
        });

        return NextResponse.json(newTvet, { status: 201 });

    } catch (error) {
        console.error("Error creating TVET:", error);
        return NextResponse.json({ error: "Failed to create TVET" }, { status: 500 });
    }
}

export async function GET() {
    const session = await requireUser();

    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const tvets = await prisma.tvets.findMany();
        return NextResponse.json(tvets, { status: 200 });
    } catch (error) {
        console.log("error", error);
        return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
    }
}
