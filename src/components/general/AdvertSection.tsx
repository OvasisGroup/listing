
import React from 'react'
import { HandCoinsIcon, ShoppingBasketIcon, UserRoundIcon } from 'lucide-react';

export default function AdvertSection() {
  return (
    <div className='bg-primary md:mt-10 md:rounded-3xl rounded-xl'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[url('/images/plumber.png')] bg-cover bg-center rounded-l-2xl hidden md:block">
            </div>
            <div className='md:p-15 p-4 flex flex-col justify-center md:items-start items-center text-center md:text-left'>
                <h3 className='font-black md:text-4xl max-w-md text-white'>Are you Looking for Priced Services Near You?</h3>
                <small className='font-bold text-yellow-400 font-xl'>Plumbing, Handyman, House Cleaning, and more...</small>
                <div className='text-white flex flex-col gap-4 items-start mt-6'>
                    <div className='flex items-center gap-2'><UserRoundIcon/><span className='font-bold'>Request a Quote</span></div>
                    <div className='flex items-center gap-2'><ShoppingBasketIcon/><span className='font-bold'>Buy Now</span></div>
                    <div className='flex items-center gap-2'><HandCoinsIcon/><span className='font-bold'>Get Paid</span></div>  
                </div>
            </div>
        </div>
    </div>
  )
}
