
import Image from 'next/image'
import React from 'react'

export default function whychooseuspage() {
    return (
        <>
            <div>
                <Image src={'/images/getapp.jpg'} alt={'Get App'} width={500} height={100} className='w-full rounded-lg mt-4' />
                <div className='flex justify-center items-center'>
                <Image src={'/images/mrkim-logo-three.png'} alt={'Get App'} width={150} height={150} className='rounded-full -mt-16' />
                </div>
                <div className='py-10'>
                    <div className='grid md:grid-cols-2 gap-8 mt-10'>
                        <div className='border border-primary rounded-lg p-8'>
                        <Image src={'/images/4x/plumbers.png'} alt={'Get App'} width={80} height={80} className='mb-8' />
                            <h1 className='text-primary font-bold text-2xl'>Find a local Professional Service Provider in Your Area</h1>
                            <ul>
                                <li className='border-l-4 border-primary pl-2 my-2 border-b pb-2'>Have a quick and convenient access to any service needs for your project.</li>
                                <li className='border-l-4 border-primary pl-2 my-2 border-b pb-2'>Be confident in Mr. KIM network of professional service providers.</li>
                                <li className='border-l-4 border-primary pl-2 my-2 border-b pb-2'>No job too small or too big. You Name it! We do it!</li>
                            </ul>
                        </div>
                        <div className='border border-primary rounded-lg p-8'>
                        <Image src={'/images/4x/calndar.png'} alt={'Get App'} width={80} height={80} className='mb-8' />
                        <h1 className='text-primary font-bold text-2xl'>Schedule & Save</h1>
                            <ul>
                                <li className='border-l-4 border-primary pl-2 my-2 border-b pb-2'>Schedule an appointment</li>
                                <li className='border-l-4 border-primary pl-2 my-2 border-b pb-2'>Track Job progress ( Not available in all areas)</li>
                                <li className='border-l-4 border-primary pl-2 my-2 border-b pb-2'>Professional service provider assigned.</li>
                                <li className='border-l-4 border-primary pl-2 my-2 border-b pb-2'>Professional Service provider has arrived.</li>
                                <li className='border-l-4 border-primary pl-2 my-2 border-b pb-2'>Job completed.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
