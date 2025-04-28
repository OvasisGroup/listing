// /app/api/whychooseus/route.ts

import { NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma';


// CREATE a Whychooseus
export async function POST(req: Request) {
  try {
    const { image, title, body } = await req.json();

    if (!image || !title || !body) {
      return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
    }

    const newEntry = await prisma.whychooseus.create({
      data: {
        image,
        title,
        body,
      },
    });

    return NextResponse.json(newEntry, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}

// GET all Whychooseus
export async function GET() {
  try {
    const entries = await prisma.whychooseus.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(entries);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}
