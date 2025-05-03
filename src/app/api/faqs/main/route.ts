/* eslint-disable @typescript-eslint/no-unused-vars */
// app/api/sections/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '../../../../../prisma/prisma';


// POST: Create a new Section
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { maintitle } = body;

    if (!maintitle) {
      return NextResponse.json({ error: 'maintitle is required' }, { status: 400 });
    }

    const section = await prisma.section.create({
      data: { maintitle },
    });

    return NextResponse.json(section, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create section' }, { status: 500 });
  }
}
