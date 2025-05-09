import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CleaningIntro() {
  return (
    <div className='bg-primary md:mt-10 md:rounded-3xl rounded-xl md:h-[55vh] mb-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:h-[40]'>
            <div className='bg-[url(/images/greenperson1.png)] bg-no-repeat bg-cover bg-center md:rounded-3xl rounded-xl sm:h-[40vh] md:h-full'></div>
            <div className='p-8 flex flex-col gap-4 justify-center items-start md:p-20'>
                <Image src={'/images/cleaningicon.png'} alt="" width={40} height={40}  />
                <h1 className='md:text-4xl text-2xl font-bold text-white'>Looking for reliable, professional, and friendly cleaning services?</h1>
                <p className='text-white font-light'>Let Mr Kim Cleaning Services transform your space — Just like we did for countless happy clients!</p>
                <Link href={''}><Button className='border border-white text-white hover:bg-green-800 hover:cursor-pointer'>Get Started <ArrowRightIcon/></Button></Link>
            </div>
        </div>   
    </div>
  )
}
