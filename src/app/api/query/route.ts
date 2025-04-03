import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma";


export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json({ error: "Query parameter is required" }, { status: 400 });
  }

  try {
    // Example: Searching job posts
    const results = await prisma.legal.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: "insensitive" } },
          { body: { contains: query, mode: "insensitive" } },
        ],
      },
      take: 5,
    });

    return NextResponse.json({ results });
  } catch {
    return NextResponse.json({ error: "Database query failed" }, { status: 500 });
  }
}
