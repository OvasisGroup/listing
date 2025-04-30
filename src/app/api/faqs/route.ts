import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient()

const faqSchema = z.object({
  title: z.string().min(1),
  faqheaders: z.array(
    z.object({
      title: z.string().min(1),
      body: z.string().min(1),
    })
  ).min(1),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = faqSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: parsed.error.format() },
        { status: 400 }
      )
    }

    const { title, faqheaders } = parsed.data

    const post = await prisma.faqs.create({
      data: {
        title,
        faqheaders: {
          create: faqheaders.map((header) => ({
            title: header.title,
            body: header.body,
          })),
        },
      },
      include: {
        faqheaders: true,
      },
    })

    return NextResponse.json(post, { status: 201 })
  } catch (error) {
    console.error('[POST /api/faqs] Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
  