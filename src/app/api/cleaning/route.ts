// app/api/cleaning-form/route.ts
import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      aptSuite,
      bedroooms,
      bathrooms,
      cleaningType,
      description,
      contactType,
      date,
      time,
    } = data;

    const form = await prisma.cleaningForm.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        address,
        aptSuite,
        bedroooms,
        bathrooms,
        cleaningType,
        description,
        contactType,
        date: date ? new Date(date) : undefined,
        time,
      },
    });

    return NextResponse.json({ success: true, form });
  } catch (error) {
    console.error("POST /api/cleaning-form error:", error);
    return NextResponse.json(
      { error: "Server error", message: (error as Error).message },
      { status: 500 }
    );
  }
}
