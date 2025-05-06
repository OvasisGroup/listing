import CreateListingForm from '@/components/general/listings/CreateListings'
import PaymentsList from '@/components/general/listings/Payments'
import React from 'react'

export default function PostJob() {
  return (
    <div>
      <CreateListingForm/>
      <PaymentsList/>
    </div>
  )
}
