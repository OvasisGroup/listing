import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function Corevalues() {
  return (
    <div>
      <Image src={'/images/about-header.jpg'} alt={'Mr_Kim_Logo'} width={500} height={100} className='w-full rounded-lg mt-4'/>
        <div className='flex justify-between items-center p-4'>
          <div>
            <h1 className='text-4xl font-bold text-primary'>Core Values</h1>
            <p>Looking for Open Job Opportunities? Find Jobs</p>
            </div>
            <div>
              <Button className='rounded-sm font-bold text-white'>Post A Job</Button>
            </div>
        </div>

        <div className='border-t-1 border-gray-300 p-4 mt-4'>

        <div className=''>
        </div>
        <div className='grid md:grid-cols-3 gap-12 my-10 bg-green-50 p-10 rounded-2xl'>
          <div>
            <Image src={'/images/experience.png'} alt={'Mr_Kim_Logo'} width={80} height={80} className='pb-2'/>
            <h1 className='font-bold text-primary text-2xl pb-2'>Reliability</h1>
            <p className='text-black'>Punctuality and consistency in delivering services are crucial to our company. Our clients should be able to depend on our professional service providers to show up on time and complete the work as promised.</p>
          </div>

          <div>
            <Image src={'/images/thumb-ups.png'} alt={'Mr_Kim_Logo'} width={80} height={80} className='pb-2'/>
            <h1 className='font-bold text-primary text-2xl pb-2'>Integrity</h1>
            <p className='text-black'>Mr.KIM team always does the right thing. You name it and we will do it right!</p>
          </div>

          <div>
            <Image src={'/images/transparency.png'} alt={'Mr_Kim_Logo'} width={80} height={80} className='pb-2'/>
            <h1 className='font-bold text-primary text-2xl pb-2'>Relationships</h1>
            <p className='text-black'>We believe professionalism helps build trust with customers. Additionally, we believe openness and honesty make the best relationships in business and in life. Therefore, strong, and positive relationships are a big part of what make Mr.KIM different from our competitors.</p>
          </div>

          <div>
            <Image src={'/images/quality-service.png'} alt={'Mr_Kim_Logo'} width={80} height={80} className='pb-2'/>
            <h1 className='font-bold text-primary text-2xl pb-2'>Quality Workmanship </h1>
            <p className='text-black'>Providing high-quality craftsmanship is essential for our customer satisfaction. The work is done according to industry standards and meet or exceed our customer’s expectations. We believe quality work builds trust and fosters repeat business and referrals.            </p>
          </div>

          <div>
            <Image src={'/images/quality.png'} alt={'Mr_Kim_Logo'} width={80} height={80} className='pb-2'/>
            <h1 className='font-bold text-primary text-2xl pb-2'>Customer Centric Professionalism:</h1>
            <p className='text-black'>Mr. KIM team will always maintain a high level of professionalism in all interactions with our diverse customers. This includes clear communication, a well-presented appearance, and a courteous attitude.
            </p>
          </div>

          <div>
            <Image src={'/images/quality.png'} alt={'Mr_Kim_Logo'} width={80} height={80} className='pb-2'/>
            <h1 className='font-bold text-primary text-2xl pb-2'>
            Attention to Detail:</h1>
            <p className='text-black'>Providing services with meticulous attention to detail is essential to all our clients and we pledge to do just that. Putting our customers needs first is paramount to us-Plain and simple, we are here for YOU, the customer. Whether it is a small repair or a larger project, no job too big or too small, Mr. KIM professional service providers will ensure that the work is completed to a high standard, leaving no room for errors or oversights.
            </p>
          </div>


         
        </div>
        </div>
        
    </div>
  )
}
