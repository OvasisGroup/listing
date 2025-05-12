import { CalendarCheck2Icon, HandCoinsIcon } from 'lucide-react'
import React from 'react'
import { IoDocumentsOutline } from 'react-icons/io5'

export default function Steps() {
  return (
    <div className='bg-[url(/images/pila.png)] bg-no-repeat bg-cover bg-center md:h-[60vh] md:rounded-2xl rounded-xl p-8 items-center'>
        <h1 className='text-white font-light md:text-4xl text-center mt-20'>Need a Pro? Or are you a Pro looking for work?</h1>
        <p className='text-yellow-400 text-center text-2xl'>Plumbing, Handyman, Cleaning, and more…  </p>
        <div className='grid md:grid-cols-3 gap-4 md:gap-10 p-8'>
            <div className='bg-primary text-white p-6 flex flex-col justify-center items-center text-center rounded-md'><IoDocumentsOutline className='font-bold w-10 h-10'/> <p className='font-ligh text-xl mt-6'>Get a Quote</p></div>
            <div className='bg-primary text-white p-6 flex flex-col justify-center items-center text-center rounded-md'><CalendarCheck2Icon className='font-bold w-10 h-10'/> <p className='font-ligh text-xl mt-6'>Book Now</p></div>
            <div className='bg-primary text-white p-6 flex flex-col justify-center items-center text-center rounded-md'><HandCoinsIcon className='font-bold w-10 h-10'/> <p className='font-ligh text-xl mt-6'>Get Paid</p></div>
        </div>
    </div>
  )
}
