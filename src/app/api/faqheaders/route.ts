/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GET all FaqHeaders
export async function GET() {
  try {
    const faqHeaders = await prisma.faqHeaders.findMany({
      include: {
        faqs: true, // include related Faq
      },
    })
    return NextResponse.json(faqHeaders)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching FAQ headers' }, { status: 500 })
  }
}

// POST a new FaqHeader
export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { title, body: faqBody, faqId } = body

    const newHeader = await prisma.faqHeaders.create({
      data: {
        title,
        body: faqBody,
        faqId,
      },
    })

    return NextResponse.json(newHeader, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Error creating FAQ header' }, { status: 500 })
  }
}
