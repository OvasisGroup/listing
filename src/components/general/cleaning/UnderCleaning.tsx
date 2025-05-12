import React from 'react'

export default function UnderCleaning() {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
        <h1 className='font-bold md:text-3xl text-primary mb-10'>Trusted By <span className='text-black'>Job Seekers</span> and <span className='text-black'>Employers</span></h1>
        <div className='grid md:grid-cols-3 mb-10 w-full gap-8'>
            <div className='w-full bg-gray-50 rounded-xl p-4 md:p-10 flex flex-col gap-4 items-center justify-center'>
                <h1 className='text-2xl font-bold text-primary'>600+</h1>
                <p>Happy Customers</p>
            </div>
            <div className='w-full bg-gray-50 rounded-xl p-4 md:p-10 flex flex-col gap-4 items-center justify-center'>
                <h1 className='text-2xl font-bold text-primary'>9+</h1>
                <p>Years of Experience</p>
            </div>
            <div className='w-full bg-gray-50 rounded-xl p-4 md:p-10 flex flex-col gap-4 items-center justify-center'>
                <h1 className='text-2xl font-bold text-primary'>200+</h1>
                <p>completed Projects</p>
            </div>
        </div>
    </div>
  )
}
