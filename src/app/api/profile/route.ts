// src/app/api/profile/route.ts
import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma";
import { requireUser } from "@/utils/requireUser";

export async function GET() {
  const session = await requireUser();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.email!},
    select: { id: true, name: true, email: true, image: true, role: true },
  });

  return NextResponse.json(user);
}

export async function PUT(req: Request) {
    const session = await requireUser();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { name, image } = await req.json();
  const updatedUser = await prisma.user.update({
    where: { email: session.email! },
    data: { name, image },
  });

  return NextResponse.json(updatedUser);
}
