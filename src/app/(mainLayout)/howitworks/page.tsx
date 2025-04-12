import Image from 'next/image'
import React from 'react'

export default function howitworks() {
  return (
    <div>
      <Image src={'/images/howitworks.jpg'} alt={'Mr_Kim_Logo'} width={500} height={100} className='w-full rounded-lg mt-4'/>
        <div className='flex justify-center items-center p-4'>
          <div>
            <h1 className='text-4xl font-bold text-primary'>How Does It Work</h1>
            </div>
        </div>

        <div className='border-t-1 border-gray-300 p-4 mt-4'>

        <div className=''>
            <p className='text-center max-w-[80%] mx-auto'>Automobile, Tuk Tuk, Boda Boda and properties both residential, commercial, and governmental systems will breakdown, but they do not have to break your budget or bank. Mr.KIM professional service providers got you covered when such breakdown unexpectedly bringing your life to a Screeching halt. With Mr.KIM APP, you know exactly what to do when things go wrong. It’s as simple as:</p>
        </div>
        
        <div className='grid md:grid-cols-3 gap-12 my-20 justify-start'>
            <div className='flex flex-col items-center'>
            <Image src={'/images/project.svg'} alt={'Mr_Kim_Logo'} width={80} height={80} className='pb-4'/>
            <h1 className='font-bold text-primary text-2xl pb-2'>Telling US About Your Project</h1>
            <p className='text-center'>Select a project category that matches your needs. We will ask for project description to better match your needs.</p>
            </div>
            <div className='flex flex-col items-center'>
            <Image src={'/images/technician.svg'} alt={'Mr_Kim_Logo'} width={80} height={80} className='pb-4'/>
            <h1 className='font-bold text-primary text-2xl pb-2'>Getting Matched</h1>
            <p className='text-center'>Getting Matched with a Professional Service Provider in Your Area</p>
            </div>
            <div className='flex flex-col items-center'>
            <Image src={'/images/techtu.svg'} alt={'Mr_Kim_Logo'} width={80} height={80} className='pb-4'/>
            <h1 className='font-bold text-primary text-2xl pb-2'>Getting Connected</h1>
            <p className='text-center'>Getting Connected with best professional service provider in your Area for your project</p>
            </div>
        </div>

        </div>
        
    </div>
  )
}
