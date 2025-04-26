import AboutAdmin from '@/components/admin/about/AboutPage'
import HowToDisplay from '@/components/admin/about/HowToHelp'
import WhoWeServe from '@/components/admin/about/WhoWeServe'
import React from 'react'

export default function page() {
  return (
    <div>
        <AboutAdmin/>
        <HowToDisplay/>
        <WhoWeServe/>
    </div>
  )
}
