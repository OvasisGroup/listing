/* eslint-disable @typescript-eslint/no-unused-vars */
// app/api/faqs/route.ts
import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '../../../../prisma/prisma';


export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
      const faq = await prisma.faq.findUnique({
        where: { id: Number(id) },
        include: { section: true },
      });
      if (!faq) {
        return NextResponse.json({ error: 'FAQ not found' }, { status: 404 });
      }
      return NextResponse.json(faq);
    }

    const faqs = await prisma.faq.findMany({
      include: { section: true },
    });
    return NextResponse.json(faqs);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch FAQs' }, { status: 500 });
  }
}

// POST a new FAQ
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description, sectionId } = body;

    if (!title || !description || !sectionId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newFaq = await prisma.faq.create({
      data: {
        title,
        description,
        sectionId,
      },
    });

    return NextResponse.json(newFaq, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create FAQ' }, { status: 500 });
  }
}

// PATCH an existing FAQ
export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, title, description, sectionId } = body;

    if (!id) {
      return NextResponse.json({ error: 'FAQ ID is required' }, { status: 400 });
    }

    const updatedFaq = await prisma.faq.update({
      where: { id: Number(id) },
      data: {
        ...(title && { title }),
        ...(description && { description }),
        ...(sectionId && { sectionId }),
      },
    });

    return NextResponse.json(updatedFaq);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update FAQ' }, { status: 500 });
  }
}