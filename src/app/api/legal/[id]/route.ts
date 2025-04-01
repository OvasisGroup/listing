import { NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma";

// GET: Fetch a specific legal document by ID
export async function GET(req: Request, context: { params: { id: string } }) {
  const { id } = context.params; // Access params from the context object

  try {
    const legalDocument = await prisma.legal.findUnique({
      where: { id },
    });

    if (!legalDocument) {
      return NextResponse.json({ error: "Legal document not found" }, { status: 404 });
    }

    return NextResponse.json(legalDocument);
  } catch (error) {
    console.error("Error fetching legal document:", error);
    return NextResponse.json({ error: "Failed to fetch legal document" }, { status: 500 });
  }
}

// PUT: Update a specific legal document by ID
export async function PUT(req: Request, context: { params: { id: string } }) {
  const { id } = context.params; // Access params from the context object

  try {
    const { title, body } = await req.json();

    if (!title || !body) {
      return NextResponse.json({ error: "Title and body are required" }, { status: 400 });
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

// DELETE: Delete a specific legal document by ID
export async function DELETE(req: Request, context: { params: { id: string } }) {
  const { id } = context.params; // Access params from the context object

  try {
    await prisma.legal.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Legal document deleted successfully" });
  } catch (error) {
    console.error("Error deleting legal document:", error);
    return NextResponse.json({ error: "Failed to delete legal document" }, { status: 500 });
  }
}