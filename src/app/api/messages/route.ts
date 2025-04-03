import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Send a new message
export async function POST(req: Request) {
  const { text, senderId, receiverId } = await req.json();

  if (!text || !senderId || !receiverId) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const message = await prisma.message.create({
    data: {
      text,
      senderId,
      receiverId,
    },
    include: {
      sender: { select: { id: true, name: true } },  // Include sender data
      receiver: { select: { id: true, name: true } }, // Include receiver data
    },
  });

  return NextResponse.json(message);
}

// Fetch all messages
export async function GET() {
    const messages = await prisma.message.findMany({
      orderBy: { createdAt: "asc" },
      include: {
        sender: { select: { id: true, name: true } },
        receiver: { select: { id: true, name: true } },
      },
    });
    return NextResponse.json(messages);
  }
  