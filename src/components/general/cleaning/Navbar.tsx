
import Link from 'next/link'
import React from 'react'

import Image from 'next/image'
import { NavigationMenuDemo } from '../NavMenu';
import { ThemeToggle } from '../ThemeToggle';
import MobileNav from '../MobileNav';
import { buttonVariants } from '@/components/ui/button';


export async function Navbar() {
   return (
        <div className='border-b-1'>
            <nav className='container mx-auto flex items-center justify-between py-5 px-4 md:px-6 lg:px-8' >
                <div className='flex items-center gap-2'>
                    <Link href={'/'}>
                        <Image src={'/images/mrkim-logo.svg'} alt={'Mr_Kim_Logo'} width={150} height={100} className='self-center' />
                    </Link>
                    <NavigationMenuDemo />
                </div>

                {/* Desktop Navigation */}
                <div className='hidden md:flex items-center gap-2'>
                    <ThemeToggle />
                    <Link href={'/cleaning/estimate'} className={buttonVariants({ size: "lg" })} ><p className='text-white'>Get An Estimate</p></Link>
                </div>
                <MobileNav />
            </nav>
        </div>
    )
}

