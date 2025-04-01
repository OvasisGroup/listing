import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma";


// GET: Fetch all legal documents
export async function GET() {
  try {
    const legalDocuments = await prisma.legal.findMany();
    return NextResponse.json(legalDocuments);
  } catch (error) {
    console.error("Error fetching legal documents:", error);
    return NextResponse.json({ error: "Failed to fetch legal documents" }, { status: 500 });
  }
}

// POST: Create a new legal document
export async function POST(req: Request) {
  try {
    const { title, body } = await req.json();

    if (!title || !body) {
      return NextResponse.json({ error: "Title and body are required" }, { status: 400 });
    }

    const newLegalDocument = await prisma.legal.create({
      data: {
        title,
        body,
      },
    });

    return NextResponse.json(newLegalDocument, { status: 201 });
  } catch (error) {
    console.error("Error creating legal document:", error);
    return NextResponse.json({ error: "Failed to create legal document" }, { status: 500 });
  }
}

// PUT: Update an existing legal document
export async function PUT(req: Request) {
  try {
    const { id, title, body } = await req.json();

    if (!id || !title || !body) {
      return NextResponse.json({ error: "ID, title, and body are required" }, { status: 400 });
    }

    const updatedLegalDocument = await prisma.legal.update({
      where: { id },
      data: {
        title,
        body,
      },
    });

    return NextResponse.json(updatedLegalDocument);
  } catch (error) {
    console.error("Error updating legal document:", error);
    return NextResponse.json({ error: "Failed to update legal document" }, { status: 500 });
  }
}

// DELETE: Delete a legal document
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    await prisma.legal.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Legal document deleted successfully" });
  } catch (error) {
    console.error("Error deleting legal document:", error);
    return NextResponse.json({ error: "Failed to delete legal document" }, { status: 500 });
  }
}