import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Handle POST requests
export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!Array.isArray(data)) {
      return NextResponse.json({ message: 'Expected a JSON array.' }, { status: 400 });
    }

    const created = await prisma.tvets.createMany({
      data: data.map((item: { name: string }) => ({
        name: item.name,
      })),
      skipDuplicates: true,
    });

    return NextResponse.json({
      message: 'Users saved successfully.',
      count: created.count,
    });
  } catch (error) {
    console.error('Error saving data:', error);
    return NextResponse.json({ message: 'Server error.', error }, { status: 500 });
  }
}

// Handle GET requests
export async function GET() {
  try {
    const users = await prisma.tvets.findMany();
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ message: 'Server error.', error }, { status: 500 });
  }
}
