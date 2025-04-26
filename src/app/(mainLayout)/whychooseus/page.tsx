
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function whychooseuspage() {
    return (
        <>
            <div>
                <Image src={'/images/howitworks.jpg'} alt={'Mr_Kim_Logo'} width={500} height={100} className='w-full rounded-lg mt-4' />
                <div className='flex md:flex-row flex-col md:justify-between md:items-center  py-6 border-b-1 border-primary'>
                    <div>
                        <h1 className='text-4xl font-bold text-primary'>Why Choose Mr. Kim</h1>
                        <p>Looking for Professional Service Provider or <span><Link href={"/jobs"}>Open Job Opportunity?</Link></span></p>
                    </div>
                    <div className='mt-4'>
                        <Link href={"/post-job"}><Button className='rounded-sm font-bold text-white'>Post A Service Request</Button></Link>
                    </div>
                </div>
                <div className='py-10'>


                </div>
            </div>
        </>
    )
}
