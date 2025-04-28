
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, body: content } = body;

    if (!title || !content) {
      return NextResponse.json({ error: "Title and body are required." }, { status: 400 });
    }

    const newEntry = await prisma.whatitmeans.create({
      data: {
        title,
        body: content,
      },
    });

    return NextResponse.json(newEntry, { status: 201 });
  } catch (error) {
    console.error("Error creating Whatitmeans:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


// GET all Whychooseus
export async function GET() {
  try {
    const entries = await prisma.whatitmeans.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(entries);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}

// PATCH to update a Whatitmeans entry
export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, title, body: content } = body;

    if (!id) {
      return NextResponse.json({ error: "ID is required." }, { status: 400 });
    }

    const updatedEntry = await prisma.whatitmeans.update({
      where: { id },
      data: {
        ...(title && { title }),
        ...(content && { body: content }),
      },
    });

    return NextResponse.json(updatedEntry);
  } catch (error) {
    console.error("Error updating Whatitmeans:", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}

// DELETE a Whatitmeans entry
export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ error: "ID is required." }, { status: 400 });
    }

    await prisma.whatitmeans.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Deleted successfully." }, { status: 200 });
  } catch (error) {
    console.error("Error deleting Whatitmeans:", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}


