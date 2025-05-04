import CleaningIntro from '@/components/cleaning/CleaningIntro'
import GuaranteePromise from '@/components/cleaning/GuaranteePromise'
import VideoBackground from '@/components/cleaning/VideoBackground'
import React from 'react'

export default function Cleaning() {
  return (
    <div>
      <VideoBackground />
      <CleaningIntro/>
      <GuaranteePromise/>
    </div>
  )
}
