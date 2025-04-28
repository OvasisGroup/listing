import { NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma';
import { z } from 'zod';
import axios from 'axios';
import { ListingStatus } from '@prisma/client';

// MPESA Credentials and endpoint
const MPESA_API_KEY = process.env.MPESA_API_KEY;
const MPESA_API_SECRET = process.env.MPESA_API_SECRET;
const MPESA_PAYMENT_URL = "https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest"; // MPESA payment URL
// const MPESA_SHORTCODE = process.env.MPESA_SHORTCODE;
const MPESA_LIPA_NA_MPESA_SHORTCODE = process.env.MPESA_LIPA_NA_MPESA_SHORTCODE;
const MPESA_LIPA_NA_MPESA_SHORTCODE_LIPA_SECRET = process.env.MPESA_LIPA_NA_MPESA_SHORTCODE_LIPA_SECRET;

// Define MPESA charge based on budget
const getMPESACharge = (budget: number) => {
  if (budget >= 1 && budget <= 500) {
    return 50; // Charge for budgets between 1 and 500 KES
  } else if (budget >= 501 && budget <= 1000) {
    return 100; // Charge for budgets between 501 and 1000 KES
  } else if (budget >= 1001 && budget <= 5000) {
    return 150; // Charge for budgets between 1001 and 5000 KES
  } else if (budget > 5000) {
    return 200; // Charge for budgets greater than 5000 KES
  }
  return 0; // Default charge if no range matches
};

// MPESA Payment request function
const initiateMPESAPayment = async (amount: number, phoneNumber: string, userId: string) => {
  try {
    const mpesaCharge = getMPESACharge(amount); // Calculate charge
    const totalAmount = amount + mpesaCharge; // Total amount to be charged

    // Get the access token from MPESA API
    const auth = Buffer.from(`${MPESA_API_KEY}:${MPESA_API_SECRET}`).toString('base64');
    const authHeaders = {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/json',
    };

    const tokenResponse = await axios.post(
      'https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
      {},
      { headers: authHeaders }
    );

    const accessToken = tokenResponse.data.access_token;

    // Initiate the payment
    const paymentHeaders = {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    };

    const paymentData = {
      BusinessShortcode: MPESA_LIPA_NA_MPESA_SHORTCODE,
      LipaNaMpesaOnlineShortcode: MPESA_LIPA_NA_MPESA_SHORTCODE_LIPA_SECRET,
      Amount: totalAmount, // Total amount including MPESA charge
      PhoneNumber: phoneNumber,
      UserId: userId,
      // Include other required fields for MPESA payment
    };

    const paymentResponse = await axios.post(MPESA_PAYMENT_URL, paymentData, {
      headers: paymentHeaders,
    });

    return paymentResponse.data; // Return the payment response data
  } catch (error) {
    console.error("MPESA Payment Error:", error);
    throw new Error('Failed to initiate MPESA payment');
  }
};

// Define the input validation schema
const createListingSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  budget: z.number().min(0),
  userId: z.string(),
  subCategories: z.array(z.string()), // Assuming subCategories are IDs of SubCategory
  location: z.string().optional(),
  googlePlaceId: z.string().optional(),
  status: z.nativeEnum(ListingStatus).optional(), // Use nativeEnum for ListingStatus
  isFeatured: z.boolean().default(false),
  isPremium: z.boolean().default(false),
  startDate: z.string().optional(), // Validate date string format
  endDate: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate and save the listing
    const validatedData = createListingSchema.parse(body);

    const newListing = await prisma.listing.create({
      data: {
        title: validatedData.title,
        description: validatedData.description,
        budget: validatedData.budget,
        userId: validatedData.userId,
        subCategories: {
          connect: validatedData.subCategories.map((id) => ({ id })),
        },
        location: validatedData.location,
        googlePlaceId: validatedData.googlePlaceId,
        status: validatedData.status ?? ListingStatus.active,
        isFeatured: validatedData.isFeatured,
        isPremium: validatedData.isPremium,
        startDate: validatedData.startDate ? new Date(validatedData.startDate) : null,
        endDate: validatedData.endDate ? new Date(validatedData.endDate) : null,
      },
    });

    // Initiate the MPESA payment with the charge
    const paymentResponse = await initiateMPESAPayment(validatedData.budget, body.phoneNumber, validatedData.userId);

    return NextResponse.json({ newListing, paymentResponse }, { status: 201 });
  } catch (error) {
    console.error('Error creating listing or initiating MPESA payment:', error);
    return NextResponse.json({ error: 'Failed to create listing or initiate MPESA payment' }, { status: 500 });
  }
}

// GET: Fetch all legal documents
export async function GET() {
  try {
    const legalDocuments = await prisma.listing.findMany();
    return NextResponse.json(legalDocuments);
  } catch (error) {
    console.error("Error fetching listings documents:", error);
    return NextResponse.json({ error: "Failed to fetch listings documents" }, { status: 500 });
  }
}
