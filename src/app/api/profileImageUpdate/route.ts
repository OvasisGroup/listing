import { NextRequest, NextResponse } from "next/server";
import { requireUser } from "@/utils/requireUser";
import { prisma } from "../../../../prisma/prisma";

export async function PUT(req: NextRequest) {
  const session = await requireUser();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { imageUrl } = await req.json();

  try {
    const updatedUser = await prisma.user.update({
      where: { id: session.id},
      data: { image: imageUrl },
    });

    return NextResponse.json({ message: "Profile image updated", user: updatedUser }, { status: 200 });
  } catch (error) {
    console.error("Error updating user image:", error);
    return NextResponse.json({ error: "Database update failed" }, { status: 500 });
  }
}
