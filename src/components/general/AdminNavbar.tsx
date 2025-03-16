import React from 'react'
import UserDropDown from './UserDropDown'
import { ThemeToggle } from './ThemeToggle'
import Link from 'next/link'
import { auth } from '@/lib/auth';
import { buttonVariants } from '../ui/button';
import { BellIcon, MailIcon } from 'lucide-react';

export default async function AdminNavbar() {
   const session = await auth();
  return (
    <div className="flex flex-row gap-2">
        <div className='hidden md:flex items-center gap-4'>
                <ThemeToggle/>
                <MailIcon className="h-6 w-6"/>
                <BellIcon className="h-6 w-6"/>
                {session?.user ? (
                    <UserDropDown email={session.user.email as string} name={session.user.name as string} image={session.user.image as string}/>
                ) : (
                    <Link href={'/login'} className={buttonVariants({ size: "lg"})} ><p className='text-white'>Get Started</p></Link>
                )}
            </div>
    </div>
  )
}
