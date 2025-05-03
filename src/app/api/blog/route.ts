import { NextResponse } from 'next/server'
import { mkdir, writeFile } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import { randomUUID } from 'crypto'
import { prisma } from '../../../../prisma/prisma'


export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    const title = formData.get('title') as string
    const content = formData.get('content') as string
    const categoryId = formData.get('categoryId') as string
    const image = formData.get('image') as File | null

    if (!title || !content || !categoryId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    let imageFilePath: string | undefined

    if (image) {
      if (!image.type.startsWith('image/')) {
        return NextResponse.json({ error: 'Invalid file type. Only images are allowed.' }, { status: 400 })
      }

      const MAX_SIZE = 10 * 1024 * 1024 // 10MB
      if (image.size > MAX_SIZE) {
        return NextResponse.json({ error: 'File size exceeds 10MB limit.' }, { status: 400 })
      }

      const uploadDir = path.join(process.cwd(), 'public/uploads')
      if (!existsSync(uploadDir)) {
        await mkdir(uploadDir, { recursive: true })
      }

      const sanitizedFileName = image.name.replace(/[^a-z0-9.-]/gi, '_').toLowerCase()
      const fileName = `${randomUUID()}_${sanitizedFileName}`
      const filePath = path.join(uploadDir, fileName)

      const buffer = Buffer.from(await image.arrayBuffer())
      await writeFile(filePath, buffer)

      imageFilePath = `/uploads/${fileName}`
    }

    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        categoryId,
        ...(imageFilePath && { image: imageFilePath }), // only include if exists
      },
    })

    return NextResponse.json({ message: 'Post created successfully', post: newPost }, { status: 201 })

  } catch (error) {
    console.error('Error in POST /api/blog:', error)
    return NextResponse.json(
      { error: 'Server error', message: (error as Error).message },
      { status: 500 })
  }
}

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        category: true, // adjust this based on your relation
      },
    })
    console.log('Posts fetched:', posts)
    return NextResponse.json({ posts }, { status: 200 })

  } catch (error) {
    console.error('Error in GET /api/blog:', error)
    return NextResponse.json(
      { error: 'Server error', message: (error as Error).message },
      { status: 500 }
    )
  }
}