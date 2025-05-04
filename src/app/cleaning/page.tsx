import CleaningIntro from '@/components/cleaning/CleaningIntro'
import GuaranteePromise from '@/components/cleaning/GuaranteePromise'
import Promise from '@/components/cleaning/Promise'
import ServicesList from '@/components/cleaning/ServicesList'
import VideoBackground from '@/components/cleaning/VideoBackground'
import React from 'react'

export default function Cleaning() {
  return (
    <div>
      <VideoBackground />
      <CleaningIntro/>
      <GuaranteePromise/>
      <ServicesList/>
      <Promise/>
    </div>
  )
}
