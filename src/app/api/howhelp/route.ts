import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { auth } from '@/lib/auth';

const prisma = new PrismaClient();

// Create a new Help entry
export async function POST(req: Request) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  try {
    const { title, body } = await req.json();

    if (!title || !body) {
      return NextResponse.json({ error: 'Title and body are required' }, { status: 400 });
    }

    const help = await prisma.help.create({
      data: { title, body },
    });

    return NextResponse.json(help, { status: 201 });
  } catch (error) {
    console.error("POST /api/howhelp error:", error);
    return NextResponse.json({ error: 'Failed to create Mr. Kim Help entry', details: (error instanceof Error ? error.message : 'Unknown error') }, { status: 500 });
  }
}

// Get all how to help entries
export async function GET() {
  try {
    const howhelpEntries = await prisma.help.findMany();
    return NextResponse.json(howhelpEntries, { status: 200 });
  } catch (error) {
    console.error("GET /api/howhelp error:", error);
    return NextResponse.json({ error: 'Failed to fetch Mr. Kim Help entries', details: (error instanceof Error ? error.message : 'Unknown error') }, { status: 500 });
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

    const updatedHelp = await prisma.help.update({
      where: { id },
      data: { title, body },
    });

    return NextResponse.json(updatedHelp, { status: 200 });
  } catch (error) {
    console.error("PUT /api/howhelp error:", error);
    return NextResponse.json({ error: 'Failed to update Help entry', details: (error instanceof Error ? error.message : 'Unknown error') }, { status: 500 });
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

    await prisma.help.delete({ where: { id } });

    return NextResponse.json({ message: 'Help entry deleted' }, { status: 200 });
  } catch (error) {
    console.error("DELETE /api/howhelp error:", error);
    return NextResponse.json({ error: 'Failed to delete Help entry', details: (error instanceof Error ? error.message : 'Unknown error') }, { status: 500 });
  }
}
