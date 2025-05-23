
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '../ui/button'
import { ThemeToggle } from './ThemeToggle'
import { auth } from '@/lib/auth'
import Image from 'next/image'
import UserDropDown from './UserDropDown'
import { NavigationMenuDemo } from './NavMenu'
import MobileNav from './MobileNav'
import { CartDrawer } from './cart/cart-drawer'

export async function Navbar() {
    const session = await auth();

    return (
        <div className='border-b-1'>
            <nav className='container mx-auto flex items-center justify-between py-5 px-4 md:px-6 lg:px-8' >
                <div className='flex items-center gap-2'>
                    <Link href={'/'}>
                        <Image src={'/images/mrkim-logo.svg'} alt={'Mr_Kim_Logo'} width={150} height={120}  className='self-center' />
                    </Link>
                    <NavigationMenuDemo />
                </div>

                {/* Desktop Navigation */}
                <div className='hidden md:flex items-center gap-2'>
                    <ThemeToggle />
                    <div className="bg-transparent border-1 text-accent-foreground hover:bg-transparent cursor-pointer rounded-md"><CartDrawer /></div>
                    <Link href={'/post-job'} className={buttonVariants({ size: "lg" })} ><p className='text-white'>Post A Job</p></Link>
                    {session?.user ? (
                        <UserDropDown email={session.user.email as string} name={session.user.name as string} image={session.user.image as string} />
                    ) : (
                        <Link href={'/login'} className={buttonVariants({ size: "lg" })} ><p className='text-white'>Get Started</p></Link>
                    )}
                </div>
                <MobileNav />
            </nav>
        </div>
    )
}

