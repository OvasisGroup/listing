import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma";
import { requireUser } from "@/utils/requireUser";


export async function PUT(req: Request) {
  const session = await requireUser();
  if (!session.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { name, image, about, location } = await req.json();

  try {
    await prisma.user.update({
      where: { id: session.id },
      data: {
        name,
        image,
        profile: {
          update: {
            name,
            image,
            about,
            location
          },
        },
      },
    });

    return NextResponse.json({ message: "Profile updated" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
