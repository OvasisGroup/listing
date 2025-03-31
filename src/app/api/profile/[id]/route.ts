import { NextResponse } from "next/server";
import { requireUser } from "@/utils/requireUser";
import { prisma } from "../../../../../prisma/prisma";


export async function PUT(req: Request) {
  const session = await requireUser();
  if (!session.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { name, resumeUrl, companyName } = await req.json();

  try {
    await prisma.user.update({
      where: { id: session.id },
      data: {
        name,
        JobSeeker: resumeUrl ? { update: { resume: resumeUrl } } : undefined,
        Company: companyName ? { update: { name: companyName } } : undefined,
      },
    });

    return NextResponse.json({ message: "Profile updated" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
