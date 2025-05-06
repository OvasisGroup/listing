/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useEffect, useState } from 'react'

const PaymentsList = () => {
  const [totalAmount, setTotalAmount] = useState<number | null>(null)
  const [payments, setPayments] = useState<any[]>([])

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await fetch('/api/payment')
        const data = await response.json()
        console.log('Payments data:', data)
        setTotalAmount(data.totalAmount)
        setPayments(data.payments) // Set the list of transactions (payments)
      } catch (error) {
        console.error('Error fetching payments:', error)
      }
    }

    fetchPayments()
  }, [])

  return (
    <div>
      <h1>Total Payment Amount</h1>
      {totalAmount !== null ? (
        <p>{`Total Amount: KES ${totalAmount.toFixed(2)}`}</p>
      ) : (
        <p>Loading...</p>
      )}

      <h2>Payments List</h2>
      <ul>
        {payments.map((payment) => (
          <li key={payment.id}>
            <strong>Amount:</strong> KES {payment.amount.toFixed(2)} <br />
            <strong>Status:</strong> {payment.status} <br />
            <strong>Method:</strong> {payment.method} <br />
            <strong>Listing ID:</strong> {payment.listingId} <br />
            <strong>User ID:</strong> {payment.userId} <br />
            <strong>Transaction ID:</strong> {payment.transactionId} <br />
            <strong>Phone Number:</strong> {payment.phoneNumber} <br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PaymentsList
