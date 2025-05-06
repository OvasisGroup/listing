// app/payments/page.tsx
'use client'

import { PaymentsTable } from '@/components/general/payments/PaymentsTable'
import React, { useEffect, useState } from 'react'


export default function PaymentsPage() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/payment') // Replace with your actual API endpoint
      const json = await res.json()
      setData(json.payments)
    }

    fetchData()
  }, [])

  

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Payments Table</h1>
      <PaymentsTable data={data} />
    </div>
  )
}
