import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const count = await prisma.jobSeeker.count(); // Change 'user' to your table
    return NextResponse.json({ count });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch count" }, { status: 500 });
  }
}
