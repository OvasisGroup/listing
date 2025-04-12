import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const corpr = [
    {
        image: '/images/hand.png',
        title: 'Affordability:',
        description: 'Offering fair and competitive pricing to make services accessible to a wide range of community members, regardless of their income.',
    },
    {
        image: '/images/helmet.png',
        title: 'Safety:',
        description: 'Safety is paramount to our company, therefore ensuring the safety of both our customers and employees by following safety regulations, maintaining proper insurance coverage, and providing a secure working environment.',
    },
    {
        image: '/images/save-the-planet.png',
        title: 'Environmental Responsibility:',
        description: 'Implementing eco-friendly practices, such as using sustainable materials, recycling, reducing waste, and minimizing energy consumption in a way that benefits the environment and the local community. Encourage or require the use of eco-friendly materials and equipment.',
    },
    {
        image: '/images/choose.png',
        title: 'Local Hiring:',
        description: 'Whenever possible, Mr.KIM will hire employees from within the local community to support economic development in the area and provide job opportunities to residents. Promote diversity and inclusion within the company. Ensure that all individuals are treated fairly and with respect, regardless of their background.',
    },
    {
        image: '/images/network.png',
        title: 'Community Engagement:',
        description: 'Actively engaging with the local community through participation in community events, support for local initiatives, and by being a positive and visible presence in the neighborhood',
    },
    {
        image: '/images/disability.png',
        title: 'Accessibility:',
        description: 'Make Mr.KIM Mobile app, website, and service accessible to people with disabilities. thereby increasing accessibility for all community members. Ensure that the platform complies with accessibility standards to serve a diverse range of users.',
    },
    {
        image: '/images/presentation.png',
        title: 'Education and Outreach:',
        description: 'Offering educational resources or workshops related to home, automobile, Boda Boda and Tuk Tuk maintenance and repairs, which can empower community members with useful knowledge and skills.',
    },
    {
        image: '/images/transparency2.png',
        title: 'Transparency:',
        description: 'Maintaining transparent and honest business practices, including clearly communicating terms, conditions, and pricing to build trust with our customers. Customers should have a clear understanding of what they are paying for, including any additional charges or fees.',
    },
    {
        image: '/images/charity.png',
        title: 'Support for Charitable Causes:',
        description: 'Mr.KIM will support charitable causes or local nonprofit organizations through donations, services, or other means to benefit those in need within the community.',
    },
    {
        image: '/images/supply-chain.png',
        title: 'Local Sourcing:',
        description: 'Whenever feasible, Mr.KIM will source materials and supplies locally to support local suppliers and contribute to the local economy where we serve.',
    },
    {
        image: '/images/ethics.png',
        title: 'Ethical Practices:',
        description: 'Mr.KIM will uphold ethical business practices by treating both customers and employees with fairness, respect, and avoiding any discriminatory or exploitative behavior.',
    },
    {
        image: '/images/collaboration.png',
        title: 'Community Partnerships:',
        description: 'Partnering with local businesses or organizations to create mutually beneficial relationships and support initiatives that benefit the community.',
    },
    {
        image: '/images/write-review.png',
        title: 'Feedback and Improvement:',
        description: 'Listening to feedback from the community and continuously striving to improve services based on the communitys and customers needs and preferences. We will invest in technology and keep up with industry best practices to provide an ever improving service.',
    },
    {
        image: '/images/balance.png',
        title: 'Legal Compliance:',
        description: 'Adhere to all relevant laws and regulations, including those related to employment, taxes, and licensing. Ensure our talented professional service providers are properly, vetted, licensed, and insured.',
    },
    {
        image: '/images/bribe.png',
        title: 'Anti-corruptions:',
        description: 'Mr.KIM seeks to conducts our business in accordance with all anti-corruption laws. We prohibit all forms of corruption and bribery.',
    },

]

export default function Corevalues() {
  return (
    <div>
      <Image src={'/images/csr.jpg'} alt={'Mr_Kim_Logo'} width={500} height={100} className='w-full rounded-lg mt-4'/>
        <div className='flex justify-between items-center p-4'>
          <div>
            <h1 className='text-4xl font-bold text-primary'>Our Corporate Responsibility</h1>
            <p>Looking for Open Job Opportunities? Find Jobs</p>
            </div>
            <div>
              <Button className='rounded-sm font-bold text-white'>Post A Job</Button>
            </div>
        </div>

        <div className='border-t-1 border-gray-300 p-4 mt-4'>

        <div className=''>
            <p className='text-2xl font-light mb-10'>Mr.KIM corporate responsibility to the community encompasses a commitment to ethical, social, and environmental practices that positively impact the local community that we serve. Here are some key elements of Mr.KIM corporate responsibility attributes:</p>
        </div>
        <div className='grid md:grid-cols-4 gap-12 my-10 bg-green-50 p-10 rounded-2xl'>

            {corpr.map((item, index) => (
                <div key={index}>
                    <Image src={item.image} alt={'Mr_Kim_Logo'} width={80} height={80} className='pb-2'/>
                    <h1 className='font-bold text-primary text-2xl pb-2'>{item.title}</h1>
                    <p className='text-black'>{item.description}</p>
                </div>
            ))}
        </div>
        </div>
        
    </div>
  )
}
