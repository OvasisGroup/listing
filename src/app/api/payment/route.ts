import { NextResponse } from 'next/server'
import { prisma } from '../../../../prisma/prisma'


export async function GET() {
  try {
    const totalAmount = await prisma.payment.aggregate({
      _sum: {
        amount: true,
      },
    })

    const payments = await prisma.payment.findMany({
      include: {
        listing: true,
        user: true,
      },
    })

    return NextResponse.json({
      totalAmount: totalAmount._sum.amount || 0,
      payments,
    })
  } catch (error) {
    console.error('Error fetching payments:', error)
    return NextResponse.json({ message: 'Server Error' }, { status: 500 })
  }
}
