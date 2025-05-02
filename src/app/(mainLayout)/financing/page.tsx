

import ShowFinance from '@/components/admin/finance/ShowFinance'
import Image from 'next/image'
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'


const Finance = [
    {
        title: 'Quick & Easy',
        description: 'Making Our World-class of Service Delivery Easier Than Ever Before! Discover Our high-quality services at Mr.KIM APP and Website, then use one of our financing partners to pay for your project(s) over time. Get a real-time decision Today!',
        image: '/images/4x/quick@4x.png',
    },
    {
        title: 'Upfront Pricing',
        description: 'See if you qualify on the Mr. KIM APP and Website now. If approved, you will be notified immediately and you can request your service right away. It is as simple as that! You will see your price and choose the payment plan that works for you.',
        image: '/images/4x/upfront-pricing@4x.png',
    },
    {
        title: 'No Hidden Fees',
        description: 'What you see is what you pay. No late fees or penalties.',
        image: '/images/4x/no-fee@4x.png',
    },
]

const Faqs = [
    {
        title: 'What is pay-over-time financing with our financial partners?',
        description: 'Pay-over-time financing lets you pay for services booked directly on Mr.KIM app with low monthly payments. Financing gives you the ability to tackle those necessary services with financial flexibility. You get to choose your payment schedule, and you’ll never pay more than what you agree to upfront. There are no hidden fees.',
    },
    {
        title: 'What types of projects and services can I finance?',
        description: 'Financing is a great option for routine home and backyard maintenance, interior cleanings, vehicle, Boda Boda and Tuk Tuk maintenance, and more when you book a service through Mr. KIM App! When you select financing on available services, you’ll have the opportunity to apply and qualify for different financing options through our financing partners.',
    },
    {
        title: 'How does prequalification work?',
        description: 'When you select financing, you’ll complete a short application with one of our financing partners and you’ll know immediately whether you’re approved or not.',
    },
    {
        title: 'How do I get started?',
        description: 'Download the Mr. KIM app today to start your next project.',
    }
]

export default function FinanceMyProject() {
    return (
        <>
            <div>
                <Image src={'/images/finance.jpg'} alt={'Mr_Kim_Logo'} width={500} height={100} quality={100} className='w-full rounded-lg mt-4' />
                <div className='py-10'>
                    <ShowFinance />
                </div>

                <div className='grid md:grid-cols-3 gap-6 grid-cols-1 mb-10'>
                    {Finance.map((entry) => (
                        <div key={entry.title} className='p-8 border rounded-2xl hover:border-green-600'>
                            <Image src={entry.image} alt={entry.title} width={60} height={60} className='mt-4 pb-4' />
                            <h3 className="text-lg font-bold">{entry.title}</h3>
                            <p>{entry.description}</p>
                        </div>
                    ))}
                </div>

                <div className='pb-10'>
                    <h1 className='text-primary font-bold text-3xl'>Frequently Asked Questions</h1>
                    <Accordion type="multiple">
                        {Faqs.map((entry, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className='font-bold cursor-pointer'>{entry.title}</AccordionTrigger>
                                <AccordionContent>{entry.description}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </>
    )
}
