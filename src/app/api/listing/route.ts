/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/../../prisma/prisma';
import { requireUser } from '@/utils/requireUser';
import { initiateStkPush } from '@/lib/mpesa';

// Simple MPESA charge logic
function calculateMpesaCharge(budget: number): number {
  if (budget <= 1000) return 10;
  if (budget <= 3000) return 20;
  if (budget <= 5000) return 35;
  return 500;
}

// Kenyan phone number validation
function isValidKenyanPhone(phone: string): boolean {
  return /^(?:254|0)?7\d{8}$/.test(phone);
}

export async function POST(req: NextRequest) {
  const session = await requireUser();

  if (!session?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const {
    title,
    description,
    budget,
    subCategoryIds,
    location,
    estateName,
    apartmentNumber,
    startDate,
    endDate,
    phoneNumber,
  } = body;

  if (
    !title ||
    !description ||
    !budget ||
    !Array.isArray(subCategoryIds) ||
    !phoneNumber
  ) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  if (!isValidKenyanPhone(phoneNumber)) {
    return NextResponse.json({ error: 'Invalid phone number format' }, { status: 400 });
  }

  const numericBudget = Number(budget);
  if (isNaN(numericBudget) || numericBudget <= 0) {
    return NextResponse.json({ error: 'Invalid budget amount' }, { status: 400 });
  }

  const parsedStartDate = startDate ? new Date(startDate) : null;
  const parsedEndDate = endDate ? new Date(endDate) : null;

  if (
    (parsedStartDate && isNaN(parsedStartDate.getTime())) ||
    (parsedEndDate && isNaN(parsedEndDate.getTime()))
  ) {
    return NextResponse.json({ error: 'Invalid start or end date' }, { status: 400 });
  }

  const mpesaAmount = calculateMpesaCharge(numericBudget);

  try {
    const result = await prisma.$transaction(async (tx) => {
      const listing = await tx.listing.create({
        data: {
          title,
          description,
          budget: numericBudget,
          location: location || null,
          estateName: estateName || null,
          apartmentNumber: apartmentNumber || null,
          startDate: parsedStartDate,
          endDate: parsedEndDate,
          user: { connect: { id: session.id } },
          subCategories: {
            connect: subCategoryIds.map((id: string) => ({ id })),
          },
        },
      });

      const payment = await tx.payment.create({
        data: {
          amount: mpesaAmount,
          method: 'mpesa',
          status: 'pending', // initially pending
          userId: session.id,
          listingId: listing.id,
        },
      });

      return { listing, payment };
    });

    // Send STK Push
    const stkResponse = await initiateStkPush({
      amount: mpesaAmount,
      phoneNumber,
      accountReference: result.listing.id.toString(),
    });

    return NextResponse.json(
      {
        message: 'Listing created and STK push initiated',
        listing: result.listing,
        payment: result.payment,
        stkResponse,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error:', error.response?.data || error.message || error);
    return NextResponse.json(
      { error: 'Server error', details: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const listings = await prisma.listing.findMany({
      include: {
        user: true,
        subCategories: true,
        payment: true,
        favoritedBy: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json({ success: true, data: listings })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false, message: 'Failed to fetch listings' }, { status: 500 })
  }
}
