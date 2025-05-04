/* eslint-disable @typescript-eslint/no-explicit-any */
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

export async function PATCH(req: NextRequest, context: Context) {
    try {
        const { id } = await context.params; // ✅ Await `params`

        if (!id) {
            return NextResponse.json({ error: "Category ID is required" }, { status: 400 });
        }

        const body = await req.json();
        // Optional: Validate `body` fields here (e.g., title, content, categoryId, etc.)
        const { title, content, categoryId } = body;
  
      const updatedPost = await prisma.post.update({
        where: { id },
        data: {
          title,
          content,
          categoryId,
        },
      });

        return NextResponse.json({ success: true, data: updatedPost }, { status: 200 });
    } catch (error) {
        console.error("Error updating category:", error);
        return NextResponse.json({ error: "Failed to update category" }, { status: 500 });
    }
}




