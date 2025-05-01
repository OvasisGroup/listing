import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// POST: Create new Finance entry
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, content } = body;

    if (!title || !content) {
      return NextResponse.json({ error: "Title and content are required." }, { status: 400 });
    }

    const newEntry = await prisma.finance.create({
      data: {
        title,
        content,
      },
    });

    return NextResponse.json(newEntry, { status: 201 });
  } catch (error) {
    console.error("Error creating Finance entry:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// GET: Retrieve all Finance entries
export async function GET() {
  try {
    const entries = await prisma.finance.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(entries);
  } catch (error) {
    console.error("Error fetching Finance entries:", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}

// PATCH: Update a Finance entry
export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, title, content } = body;

    if (!id) {
      return NextResponse.json({ error: "ID is required." }, { status: 400 });
    }

    const updatedEntry = await prisma.finance.update({
      where: { id },
      data: {
        ...(title && { title }),
        ...(content && { content }),
      },
    });

    return NextResponse.json(updatedEntry);
  } catch (error) {
    console.error("Error updating Finance entry:", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}

// DELETE: Remove a Finance entry
export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ error: "ID is required." }, { status: 400 });
    }

    await prisma.finance.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Deleted successfully." }, { status: 200 });
  } catch (error) {
    console.error("Error deleting Finance entry:", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
