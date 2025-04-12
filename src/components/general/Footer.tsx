import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div className='bg-zinc-800 w-full py-10'>
            <div className='container mx-auto px-4 md:px-6 lg:px-8'>
                <div className='grid md:grid-cols-4 gap-8'>
                    <div>
                        <p className='text-primary font-black'>Mr.KIM ... You Name It! We Do It!</p>
                        <ul>
                            <li className='text-white border-b-1 border-zinc-600 py-2 text-sm '><Link href='/about'>About Us</Link></li>
                            <li className='text-white border-b-1 border-zinc-600 py-2 text-sm'><Link href='/whoweare'>Who We Are</Link></li>
                            <li className='text-white border-b-1 border-zinc-600 py-2 text-sm'><Link href='/corevalues'>Core Values</Link></li>
                            <li className='text-white border-b-1 border-zinc-600 py-2 text-sm'><Link href='/corporate_responsibility'>Corporate Responsibility</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p className='text-primary font-black'>Customers</p>
                        <ul>
                            <li className='text-white border-b-1 border-zinc-600 py-2 text-sm '><Link href='#'>How it Works</Link></li>
                            <li className='text-white border-b-1 border-zinc-600 py-2 text-sm'><Link href='#'>Get the App</Link></li>
                            <li className='text-white border-b-1 border-zinc-600 py-2 text-sm'><Link href='#'>Why choose Mr. Kim</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p className='text-primary font-black'>Resources</p>
                        <ul>
                            <li className='text-white border-b-1 border-zinc-600 py-2 text-sm '><Link href='#'>Finance My Project</Link></li>
                            <li className='text-white border-b-1 border-zinc-600 py-2 text-sm'><Link href='#'>Solutions Center & Expert Tips</Link></li>
                            <li className='text-white border-b-1 border-zinc-600 py-2 text-sm'><Link href='#'>Sign up as a Pro</Link></li>
                            <li className='text-white border-b-1 border-zinc-600 py-2 text-sm'><Link href='/legal'>Legal</Link></li>
                            <li className='text-white border-b-1 border-zinc-600 py-2 text-sm'><Link href='#'>Safety</Link></li>
                            <li className='text-white border-b-1 border-zinc-600 py-2 text-sm'><Link href='#'>FAQs</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p className='text-primary font-black'>Support</p>
                        <ul>
                            <li className='text-white border-b-1 border-zinc-600 py-2 text-sm'><Link href='#'>Help</Link></li>
                            <li className='text-white border-b-1 border-zinc-600 py-2 text-sm'><Link href='#'>Contact Us</Link></li>
                        </ul>
                        <Image src={'/images/apple-store.png'} width={150} height={100} alt={'apple'}  className='py-4'/>
                        <Image src={'/images/google-store.png'} width={150} height={100} alt={'apple'} />
                    </div>
                </div>
            </div>

        </div>
    )
}
