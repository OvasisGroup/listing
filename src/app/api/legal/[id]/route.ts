import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "../../../../../prisma/prisma";

// Define a validation schema for updating legal documents
const legalDocumentSchema = z.object({
  title: z.string().min(1, "Title is required"),
  body: z.string().min(1, "Body is required"),
});

// ✅ GET: Fetch a specific legal document by ID
export async function GET(req: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params; // ✅ Await params before accessing

  if (!id || typeof id !== "string") {
    return NextResponse.json({ error: "Invalid document ID" }, { status: 400 });
  }

  try {
    const legalDocument = await prisma.legal.findUnique({ where: { id } });

    if (!legalDocument) {
      return NextResponse.json({ error: "Legal document not found" }, { status: 404 });
    }

    return NextResponse.json(legalDocument);
  } catch (error) {
    console.error("Error fetching legal document:", error);
    return NextResponse.json({ error: "Failed to fetch legal document" }, { status: 500 });
  }
}

// ✅ PUT: Update a specific legal document by ID
export async function PUT(req: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params; // ✅ Await params before accessing

  if (!id || typeof id !== "string") {
    return NextResponse.json({ error: "Invalid document ID" }, { status: 400 });
  }

  try {
    const jsonData = await req.json();
    const parsedData = legalDocumentSchema.safeParse(jsonData);

    if (!parsedData.success) {
      return NextResponse.json({ error: parsedData.error.flatten() }, { status: 400 });
    }

    const updatedLegalDocument = await prisma.legal.update({
      where: { id },
      data: parsedData.data,
    });

    return NextResponse.json(updatedLegalDocument);
  } catch (error) {
    console.error("Error updating legal document:", error);
    return NextResponse.json({ error: "Failed to update legal document" }, { status: 500 });
  }
}

// ✅ DELETE: Delete a specific legal document by ID
export async function DELETE(req: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params; // ✅ Await params before accessing

  if (!id || typeof id !== "string") {
    return NextResponse.json({ error: "Invalid document ID" }, { status: 400 });
  }

  try {
    await prisma.legal.delete({ where: { id } });
    return new Response(null, { status: 204 }); // ✅ Returns a No Content response
  } catch (error) {
    console.error("Error deleting legal document:", error);
    return NextResponse.json({ error: "Failed to delete legal document" }, { status: 500 });
  }
}
