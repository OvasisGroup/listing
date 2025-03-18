
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import React from 'react'

export default function HomePageSearch() {
    return (
        <div className='w-full md:mt-6 mt-1'>
        <div className="flex flex-row justify-center items-center gap-2 bg-white p-2 rounded-lg mx-6 md:mx-0">
            <div className='flex w-full justify-center items-center gap-2'><SearchIcon className="text-muted-foreground" />
            <Input type="text" placeholder="Search By Category" className="w-full border-none shadow-none outline-none text-black-800 dark:text-black" /></div>
        </div>
        </div>
    )
}
