import { NextResponse } from 'next/server';
import { prisma } from '../../../../../prisma/prisma';

export async function GET() {
  try {
    const count = await prisma.listing.count();
    console.log('Total listings count:', count);
    return NextResponse.json({ count });
  } catch (error) {
    console.error('Error counting listings:', error);
    return NextResponse.json({ error: 'Failed to count listings' }, { status: 500 });
  }
}
