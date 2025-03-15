import { LoginForm } from '@/components/forms/LoginForm'
import Image from 'next/image'
import React from 'react'

export default function Login() {
  return (
    <div className='min-h-screen w-screen flex items-center justify-center'>
        <div className='flex w-full max-w-sm flex-col gap-6'>
        <Image src={'/images/mrkim-logo.svg'} alt={'Mr_Kim_Logo'} width={180} height={100} className='self-center'/>
        <LoginForm/>
        </div>
    </div>
  )
}
