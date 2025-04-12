/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import twilio from "twilio";
import { prisma } from "../../../prisma/prisma";

const client = twilio(process.env.TWILIO_SID!, process.env.TWILIO_AUTH_TOKEN!);

export async function POST(req: Request) {
  try {
    const { phone } = await req.json();

    // Validate phone input
    if (!phone || typeof phone !== "string") {
      return NextResponse.json(
        { success: false, error: "Invalid phone number." },
        { status: 400 }
      );
    }

    // Check if there's already a valid OTP
    const existingOtp = await prisma.oTP.findFirst({
      where: {
        phone,
        expiresAt: {
          gt: new Date(), // Not expired
        },
      },
    });

    if (existingOtp) {
      return NextResponse.json(
        { success: false, error: "OTP already sent. Please wait before requesting another." },
        { status: 429 }
      );
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Save OTP to the database
    const otpData = {
      phone,
      code: otp,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes from now
    };

    await prisma.oTP.create({
      data: otpData as any, // Type assertion to bypass Prisma type issues
    });

    // Send SMS via Twilio
    await client.messages.create({
      body: `Your login code is: ${otp}`,
      from: process.env.TWILIO_PHONE!,
      to: phone,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error sending OTP:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send OTP. Please try again later." },
      { status: 500 }
    );
  }
}
