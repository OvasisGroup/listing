import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function WhoWeAre() {
  return (
    <div>
      <Image src={'/images/about-header.jpg'} alt={'Mr_Kim_Logo'} width={500} height={100} className='w-full rounded-lg mt-4'/>
        <div className='flex justify-between items-center p-4'>
          <div>
            <h1 className='text-4xl font-bold text-primary'>Who We Are</h1>
            <p>Looking for Open Job Opportunities? Find Jobs</p>
            </div>
            <div>
              <Button className='rounded-sm font-bold text-white'>Post A Job</Button>
            </div>
        </div>

        <div className='border-t-1 border-gray-300 p-4 mt-4'>
        <div className='grid md:grid-cols-2 gap-12 my-10 border-b-1 pb-10'>
          <div>
            <p className='text-primary font-bold'>Welcome to Mr.KIM, your trusted One-Stop-Shop companion platform linking professional service providers such as plumbers, electrician, housekeepers, painter, mechanics etc with service seekers. Further, the platform links repair part sales vendors and/or suppliers with the professional service providers. We are not just an app we are your go-to partner for finding skilled professional service providers who can turn your dream project either big or small into a reality.</p>
          </div>
          <div>
            <h1 className='text-3xl font-bold text-primary'>Our Mission</h1>
            <p>At Mr.KIM, our mission is to connect you with experienced, reliable, trustworthy, and well vetted professional service provider who are ready to transform your ideas into a reality. We believe that every project big or small deserves attention, care, and the touch of a skilled professional hands. Our services are designed to bridge the gap between your visions and the expertise of our most experienced and talented professional service providers.</p>
          </div>
        </div>

        <div className=''>
          <h1 className='font-bold text-3xl text-primary'>What Sets Us Apart</h1>
        </div>
        <div className='grid md:grid-cols-3 gap-12 my-10 bg-green-50 p-10 rounded-2xl'>
          <div>
            <Image src={'/images/experience.png'} alt={'Mr_Kim_Logo'} width={80} height={80} className='pb-2'/>
            <h1 className='font-bold text-primary text-2xl pb-2'>Expertise</h1>
            <p className='text-black'>Our network of professional service providers comprises experienced professionals who are skilled in a wide range of services</p>
          </div>

          <div>
            <Image src={'/images/thumb-ups.png'} alt={'Mr_Kim_Logo'} width={80} height={80} className='pb-2'/>
            <h1 className='font-bold text-primary text-2xl pb-2'>Convenience</h1>
            <p className='text-black'>With just a few taps, you can book services and schedule appointments with one of our outstanding and experienced professional service providers of your chose</p>
          </div>

          <div>
            <Image src={'/images/transparency.png'} alt={'Mr_Kim_Logo'} width={80} height={80} className='pb-2'/>
            <h1 className='font-bold text-primary text-2xl pb-2'>Transparency </h1>
            <p className='text-black'>We believe in clear communication and fair pricing. No hidden costs or surprises.</p>
          </div>

          <div>
            <Image src={'/images/quality-service.png'} alt={'Mr_Kim_Logo'} width={80} height={80} className='pb-2'/>
            <h1 className='font-bold text-primary text-2xl pb-2'>Quality</h1>
            <p className='text-black'>We are committed to delivering top-notch service. Our professional service providers take pride in their work and pay attention to every detail</p>
          </div>

          <div>
            <Image src={'/images/quality.png'} alt={'Mr_Kim_Logo'} width={80} height={80} className='pb-2'/>
            <h1 className='font-bold text-primary text-2xl pb-2'>Reliability</h1>
            <p className='text-black'>Count on us to match you with reliable professional service provider who will show up on time and complete the job to your satisfaction
            </p>
          </div>


         
        </div>
        </div>
        
    </div>
  )
}
