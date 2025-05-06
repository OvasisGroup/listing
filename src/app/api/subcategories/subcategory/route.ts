import { NextResponse } from 'next/server';
import { prisma } from '@/../../prisma/prisma'; // adjust path as needed

export async function GET() {
  try {
    const subcategories = await prisma.subCategory.findMany({
      where: { isActive: true },
      select: {
        id: true,
        name: true,
      },
      orderBy: {
        name: 'asc',
      },
    });

    console.log('Subcategories:', subcategories);
    return NextResponse.json(subcategories);
    
  } catch (error) {
    console.error('Error fetching subcategories:', error);
    return NextResponse.json({ error: 'Failed to load subcategories' }, { status: 500 });
  }
}
