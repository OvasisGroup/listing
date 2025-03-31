import { NextResponse } from "next/server";
import { requireUser } from "@/utils/requireUser";
import { prisma } from "../../../../prisma/prisma";

export async function GET() {
  const session = await requireUser();
  if (!session || !session.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const availability = await prisma.availability.findUnique({
    where: { userId: session.id },
  });

  return NextResponse.json(availability);
}

export async function POST(req: Request) {
    const session = await requireUser();
  if (!session || !session.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { isAvailable, startDate, endDate, startTime, endTime } = await req.json();

  if (isAvailable && (!startDate || !endDate || !startTime || !endTime)) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  const updatedAvailability = await prisma.availability.upsert({
    where: { userId: session.id },
    update: { isAvailable, startDate: new Date(startDate), endDate: new Date(endDate), startTime, endTime },
    create: { userId: session.id, isAvailable, startDate: new Date(startDate), endDate: new Date(endDate), startTime, endTime },
  });

  return NextResponse.json(updatedAvailability);
}
