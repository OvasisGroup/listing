import { Star } from 'lucide-react'
import React from 'react'

export default function GuaranteePromise() {
  return (
    <div className="py-10">
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='grid md:grid-cols-2 gap-4 bg-primary'>
          <div className="bg-[url('/images/apartment.png')] bg-cover bg-center h-100 w-full"></div>
          <div className='flex flex-col justify-center items-center p-8'>
            <Star className='text-secondary mb-6 w-10 h-10' />
            <p className='text-white text-xl font-light text-center'>
            Our referral and reviews by our loyal, recurring customers reflect our unwavering commitment to your complete satisfaction. Your time is precious—why spend it scrubbing showers? Start living more and cleaning less by contacting your local Mr.KIM cleaning team today!
            </p>
            
          </div>
        </div>
        <div className="bg-[url('/images/nyumba.jpg')] bg-cover bg-center h-100 w-full">
        </div>
      </div>
    </div>
  )
}
