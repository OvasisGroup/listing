import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { ThemeToggle } from './ThemeToggle'
import { auth, signOut } from '@/lib/auth'

export async function Navbar() {
    const session = await auth();
    return (
        <nav className='flex items-center justify-between py-5' >
            <Link href={'/'}>
                MrKim
            </Link>
            <div className='flex items-center gap-2'>
                <ThemeToggle />
                {session?.user ? 
                <form 
                action={async () => {
                    "use server";
                    await signOut({
                        redirectTo: '/'
                    });
                }}>
                    <Button className='cursor-pointer cursor-pointer text-white px-4'>Logout</Button>
                </form> : <Link href={'/login'}><Button className='cursor-pointer text-white px-4'>Get Started</Button></Link>}
            </div>
        </nav>
    )
}
