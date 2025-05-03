import { NextResponse } from 'next/server';
import { prisma } from '../../../../../prisma/prisma';


export async function POST(req: Request) {
  try {
    const { name } = await req.json();

    if (!name) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    const category = await prisma.categories.create({
      data: { name },
    });

    return NextResponse.json(category, { status: 201 });
  } catch (error) {
    console.error('Error creating category:', error);
    return NextResponse.json(
      { error: 'Server error', message: (error as Error).message },
      { status: 500 }
    );
  }
}

// GET: Fetch all categories
export async function GET() {
    try {
      const categories = await prisma.categories.findMany();
      return NextResponse.json(categories); // Return the categories in JSON format
    } catch (error) {
      console.error('Error fetching categories:', error);
      return NextResponse.json(
        { error: 'Failed to fetch categories', message: (error as Error).message },
        { status: 500 }
      );
    }
  }
