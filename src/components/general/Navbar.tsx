import Link from 'next/link'
import React from 'react'
import {buttonVariants } from '../ui/button'
import { ThemeToggle } from './ThemeToggle'
import { auth } from '@/lib/auth'
import Image from 'next/image'
import UserDropDown from './UserDropDown'
import { NavigationMenuDemo } from './NavMenu'

export async function Navbar() {
    const session = await auth();
    return (
        <nav className='flex items-center justify-between py-5' >
            <div className='flex items-center gap-2'>
            <Link href={'/'}>
               <Image src={'/images/mrkim-logo.svg'} alt={'Mr_Kim_Logo'} width={150} height={100} className='self-center' />
            </Link>
            <NavigationMenuDemo/>
            </div>
            
            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center gap-2'>
                <ThemeToggle/>
                <Link href={'/post-job'} className={buttonVariants({ size: "lg"})} ><p className='text-white'>Post A Job</p></Link>
                {session?.user ? (
                    <UserDropDown email={session.user.email as string} name={session.user.name as string} image={session.user.image as string}/>
                ) : (
                    <Link href={'/login'} className={buttonVariants({ size: "lg"})} ><p className='text-white'>Get Started</p></Link>
                )}
            </div>
        </nav>
    )
}

