import AboutPageDisplay from '@/components/general/about/DisplayAbout'
import HowWeHelp from '@/components/general/about/HowWeHelp'
import HowToDisplay from '@/components/general/howtohelp/DisplayHowto'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <div>
      <Image src={'/images/about-header.jpg'} alt={'Mr_Kim_Logo'} width={500} height={100} className='w-full rounded-lg mt-4' />
      <div className='flex md:flex-row flex-col md:justify-between md:items-center  p-4'>
        <div>
          <h1 className='text-4xl font-bold text-primary'>About Us</h1>
          <p>Looking for Professional Service Provider or <span><Link href={"/jobs"}>Open Job Opportunity?</Link></span></p>
        </div>
        <div className='mt-4'>
          <Link href={"/post-job"}><Button className='rounded-sm font-bold text-white'>Post A Service Request</Button></Link>
        </div>
      </div>

      <div className='border-t-1 border-gray-300 p-4 mt-4'>
        <AboutPageDisplay />
        <HowToDisplay />
        <HowWeHelp />
      </div>

    </div>
  )
}
