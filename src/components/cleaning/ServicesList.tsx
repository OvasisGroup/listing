import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ServicesList() {
  return (
    <div className='container mx-auto grid md:grid-cols-2 gap-6 grid-cols-2 my-10'>
        <Link href={'/cleaning/commercial-cleaning'}>
        <div className='border p-6 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer'>
            <Image src={'/images/4x/commercials@4x.png'} alt={'Cleaning'} width={70} height={70} />
            <h1 className='text-primary font-bold md:text-xl py-4'>Commercial Cleaning</h1>
            <ArrowUpRight/>
        </div>
        </Link>
        <Link href={'/cleaning/residential-cleaning'}>
        <div className='border p-6 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer'>
            <Image src={'/images/4x/redients@4x.png'} alt={'Cleaning'} width={70} height={70} />
            <h1 className='text-primary font-bold md:text-xl py-4'>Residential Cleaning</h1>
            <ArrowUpRight/>
        </div>
        </Link>
    </div>
  )
}
