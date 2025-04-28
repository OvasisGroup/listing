import CreateJobForm from '@/components/forms/CreateJobForm'
import CreateListingForm from '@/components/general/listings/Listings'
import React from 'react'

export default function PostJob() {
  return (
    <div>
        <CreateJobForm/>
        <CreateListingForm/>
    </div>
  )
}
