import { requireUser } from "@/utils/requireUser";
import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma";


export async function GET() {
    const session = await requireUser();

    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const users = await prisma.user.findMany();
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        console.log("error", error);
        return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
    }
}
