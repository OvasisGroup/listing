import { NextResponse } from "next/server";
import { prisma } from "../../../prisma/prisma";

export async function POST(req: Request) {
  try {
    const { phone, code } = await req.json();

    if (!phone || !code) {
      return NextResponse.json({ error: "Phone and code are required" }, { status: 400 });
    }

    const otpEntry = await prisma.oTP.findFirst({
      where: {
        phone,
        code,
        expiresAt: {
          gt: new Date(),
        },
      },
    });

    if (!otpEntry) {
      return NextResponse.json({ error: "Invalid or expired OTP" }, { status: 401 });
    }

    let user = await prisma.user.findFirst({ where: { phone } });

    if (!user) {
      // Create the user if they don't exist
      user = await prisma.user.create({ data: { phone } });
    }

    return NextResponse.json({ user: { id: user.id, phone: user.phone } });

  } catch (error) {
    console.error("Error during OTP verification:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
