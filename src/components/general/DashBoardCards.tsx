import React from 'react'
import { Card } from '../ui/card'
import { ArrowUpRight } from 'lucide-react'

export default function DashBoardCards() {
    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
            <Card className='shadow-none border-none bg-gray-200 '>
                <div className='flex flex-col justify-between items-start h-full px-6'>
                    <div>
                    <h2 className='text-2xl font-bold text-primary'>Companies</h2>
                    <p className='text-gray-800'>Current Total Companies</p>
                    </div>
                    <div className='flex items-center gap-2 justify-between w-full'>
                        <h1 className='font-ligh text-4xl text-gray-800 mt-4'>1000</h1>
                        <ArrowUpRight className='text-primary'/>
                    </div>
                </div>
            </Card>
            <Card className='shadow-none border-none bg-gray-200 '>
                <div className='flex flex-col justify-between items-start h-full px-6'>
                    <div>
                    <h2 className='text-2xl font-bold text-primary'>Job Seekers</h2>
                    <p className='text-gray-800'>Current Total Job Seekers</p>
                    </div>
                    <div className='flex items-center gap-2 justify-between w-full'>
                        <h1 className='font-ligh text-4xl text-gray-800 mt-4'>1000</h1>
                        <ArrowUpRight className='text-primary'/>
                    </div>
                </div>
            </Card>
            <Card className='shadow-none border-none bg-gray-200 '>
                <div className='flex flex-col justify-between items-start h-full px-6'>
                    <div>
                    <h2 className='text-2xl font-bold text-primary'>Job</h2>
                    <p className='text-gray-800'>Current Total Jobs</p>
                    </div>
                    <div className='flex items-center gap-2 justify-between w-full'>
                        <h1 className='font-ligh text-4xl text-gray-800 mt-4'>1000</h1>
                        <ArrowUpRight className='text-primary'/>
                    </div>
                </div>
            </Card>
            <Card className='shadow-none border-none bg-gray-200 '>
                <div className='flex flex-col justify-between items-start h-full px-6'>
                    <div>
                    <h2 className='text-2xl font-bold text-primary'>Revenue</h2>
                    <p className='text-gray-800'>Current Total Revenue</p>
                    </div>
                    <div className='flex items-center gap-2 justify-between w-full'>
                        <h1 className='font-ligh text-4xl text-gray-800 mt-4'>1000</h1>
                        <ArrowUpRight className='text-primary'/>
                    </div>
                </div>
            </Card>
        </div>
    )
}
