import { NextResponse, NextRequest } from "next/server";
// import { promises as fs } from "fs";
// import path from "path";
// import { v4 as uuidv4 } from "uuid";
import { prisma } from "../../../../prisma/prisma";


export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const title = formData.get("title")?.toString();
    const body = formData.get("body")?.toString();
    const image = formData.get("image"); // This will be a File object

    if (!title || !body) {
      return NextResponse.json({ error: "Title and body are required." }, { status: 400 });
    }

    // You can now process the data
    console.log("Title:", title);
    console.log("Body:", body);
    console.log("Image:", image);

    // Example: Save to DB or external storage here

    return NextResponse.json({ message: "Finance entry created successfully." }, { status: 200 });
  } catch (error) {
    console.error("Error creating Finance entry:", error);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}

export async function GET() {
  try {
    const projects = await prisma.projects.findMany(); // 'project' not 'projects'
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error("GET /api/financeproject error:", error);
    return NextResponse.json(
      {
        error: 'Failed to fetch project entries',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
