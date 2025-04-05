import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { auth } from '@/lib/auth';

const prisma = new PrismaClient();

// Create a new About entry
export async function POST(req: Request) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  try {
    const formData = await req.formData();
    const title = formData.get("title") as string;
    const body = formData.get("body") as string;
    const image = formData.get("image") as File;

    if (!title || !body || !image) {
      return NextResponse.json({ error: "Title and body are required" }, { status: 400 });
    }

    // TODO: handle the image (e.g., upload to cloud storage or save to disk)

    return NextResponse.json({ message: "How We Help created successfully!" });
  } catch (error) {
    console.error("Error creating How We Help:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// Get all About entries
export async function GET() {
  try {
    const aboutEntries = await prisma.about.findMany();
    return NextResponse.json(aboutEntries, { status: 200 });
  } catch (error) {
    console.error("GET /api/about error:", error);
    return NextResponse.json({ error: 'Failed to fetch About entries', details: (error instanceof Error ? error.message : 'Unknown error') }, { status: 500 });
  }
}

// Update an About entry
export async function PUT(req: Request) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id, title, body } = await req.json();

    if (!id || !title || !body) {
      return NextResponse.json({ error: 'ID, title, and body are required' }, { status: 400 });
    }

    const updatedAbout = await prisma.about.update({
      where: { id },
      data: { title, body },
    });

    return NextResponse.json(updatedAbout, { status: 200 });
  } catch (error) {
    console.error("PUT /api/about error:", error);
    return NextResponse.json({ error: 'Failed to update About entry', details: (error instanceof Error ? error.message : 'Unknown error') }, { status: 500 });
  }
}

// Delete an About entry
export async function DELETE(req: Request) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    await prisma.about.delete({ where: { id } });

    return NextResponse.json({ message: 'About entry deleted' }, { status: 200 });
  } catch (error) {
    console.error("DELETE /api/about error:", error);
    return NextResponse.json({ error: 'Failed to delete About entry', details: (error instanceof Error ? error.message : 'Unknown error') }, { status: 500 });
  }
}
