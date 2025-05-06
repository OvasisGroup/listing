/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/../../prisma/prisma';
import { PaymentStatus } from '@prisma/client';
import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

async function generateReceiptPDF({
  amount,
  phoneNumber,
  transactionId,
  listingId,
}: {
  amount: number;
  phoneNumber: string;
  transactionId: string;
  listingId: string;
}): Promise<string> {
  const doc = new PDFDocument();
  const filename = `receipt-${transactionId}.pdf`;
  const filePath = path.join(process.cwd(), 'public', 'receipts', filename);

  // Ensure the directory exists
  fs.mkdirSync(path.dirname(filePath), { recursive: true });

  const writeStream = fs.createWriteStream(filePath);
  doc.pipe(writeStream);

  doc.fontSize(20).text('MPESA Payment Receipt', { align: 'center' });
  doc.moveDown();
  doc.fontSize(14).text(`Transaction ID: ${transactionId}`);
  doc.text(`Amount: KES ${amount}`);
  doc.text(`Phone Number: ${phoneNumber}`);
  doc.text(`Listing ID: ${listingId}`);
  doc.text(`Date: ${new Date().toLocaleString()}`);
  doc.end();

  await new Promise<void>((resolve) => writeStream.on('finish', () => resolve()));

  // Return relative path for frontend use
  return `/receipts/${filename}`;
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  console.log('MPESA Callback received:', JSON.stringify(body, null, 2));

  const callback = body.Body?.stkCallback;
  const resultCode = callback?.ResultCode;
  const metadata = callback?.CallbackMetadata;

  const mpesaReceipt = metadata?.Item?.find(
    (item: any) => item.Name === 'MpesaReceiptNumber'
  )?.Value;

  const amount = metadata?.Item?.find((item: any) => item.Name === 'Amount')?.Value;
  const phone = metadata?.Item?.find((item: any) => item.Name === 'PhoneNumber')?.Value;
  const accountReference = callback?.CheckoutRequestID || callback?.AccountReference;

  if (!callback || !mpesaReceipt || !amount || !accountReference) {
    console.warn('Invalid callback data');
    return NextResponse.json({ status: 'ignored' }, { status: 400 });
  }

  try {
    // Find the latest pending payment with matching listing/accountReference
    const payment = await prisma.payment.findFirst({
      where: {
        status: 'pending',
        amount: Number(amount),
        listing: {
          id: accountReference,
        },
      },
      include: {
        listing: true,
      },
    });

    if (!payment) {
      console.warn('No matching pending payment found');
      return NextResponse.json({ status: 'not found' }, { status: 404 });
    }

    // Generate receipt PDF
    const receiptUrl = await generateReceiptPDF({
      amount: Number(amount),
      phoneNumber: String(phone),
      transactionId: mpesaReceipt,
      listingId: payment.listingId,
    });

    // Update payment status and store receipt URL
    await prisma.payment.update({
      where: { id: payment.id },
      data: {
        status: resultCode === 0 ? PaymentStatus.successful : PaymentStatus.failed,
        transactionId: mpesaReceipt,
        phoneNumber: phone?.toString(),
        receiptUrl,
      },
    });

    return NextResponse.json({ status: 'success', receiptUrl }, { status: 200 });
  } catch (error) {
    console.error('Error handling MPESA callback:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
