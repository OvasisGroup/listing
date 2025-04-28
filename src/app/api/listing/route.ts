import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma";


// GET: Fetch all legal documents
export async function GET() {
  try {
    const legalDocuments = await prisma.listing.findMany();
    return NextResponse.json(legalDocuments);
  } catch (error) {
    console.error("Error fetching legal documents:", error);
    return NextResponse.json({ error: "Failed to fetch legal documents" }, { status: 500 });
  }
}