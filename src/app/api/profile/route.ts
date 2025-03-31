import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma";


export async function PUT(req: Request) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { name, resumeUrl, companyName } = await req.json();

  try {
    await prisma.user.update({
      where: { id: session.user.id },
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
