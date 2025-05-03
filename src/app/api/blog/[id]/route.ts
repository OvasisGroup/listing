import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../prisma/prisma';


interface Context {
    params: Promise<{ id: string }>;
}

export async function GET(req: NextRequest, context: Context) {
  try {
    // Await params since they are a Promise
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json({ error: "Category ID is required" }, { status: 400 });
    }

    const post = await prisma.post.findUnique({
      where: { id },
      include: { category: true },
    });

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json({ post });

  } catch (error) {
    console.error('Error fetching post:', error);

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
