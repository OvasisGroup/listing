import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma";


export async function POST(req: Request) {
  const data = await req.json();

  try {
    const newListing = await prisma.listing.create({
      data: {
        title: data.title,
        description: data.description,
        budget: parseFloat(data.budget),
        location: data.location,
        userId: "user-id-from-session", // Replace this with your logic
        categoryId: "category-id",
        subCategoryId: "subcategory-id"
      }
    });

    console.log("listings",newListing);
    return NextResponse.json({ success: true, newListing });
    
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error creating listing" }, { status: 500 });
  }
}
