import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const queries = searchParams.getAll("q"); // Supports multiple `q=...`

  const categories = await prisma.subCategory.findMany({
    where: {
      OR: queries.map((q) => ({
        name: {
          contains: q,
          mode: "insensitive",
        },
      })),
    },
  });

  return NextResponse.json(categories);
}
