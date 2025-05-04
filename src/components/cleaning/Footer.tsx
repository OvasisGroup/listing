
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div className='bg-zinc-800 w-full py-10'>
            <div className='container mx-auto px-4 md:px-6 lg:px-8'>
                <div className='grid md:grid-cols-4 gap-8'>
                    <div>
                        <ul>
                            <li className='text-white border-b-1 border-zinc-600 py-2 text-sm '><Link href='/about'>About Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='text-white border-b-1 border-zinc-600 py-2 text-sm '><Link href='/cleaning/estimate'>Get An Estimate </Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='text-white border-b-1 border-zinc-600 py-2 text-sm '><Link href='/financing'>Cleaning Services</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='text-white border-b-1 border-zinc-600 py-2 text-sm'><Link href='/help'>Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
