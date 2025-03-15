import { Button } from '@/components/ui/button'
import { Building2, UserRoundIcon } from 'lucide-react'
import React from 'react'

type UserSelectionType = "company" | "jobseeker";

interface UserTypeSelectionProps {
    onSelect: (type: UserSelectionType) => void;
}

export function UserTypeSelection({ onSelect }: UserTypeSelectionProps) {
    return (
        <div className='space-y-8'>
            <div className='text-center space-y-2'>
                <h2 className='font-bold text-xl'>Welcome! Lets get Started</h2>
                <p className='text-muted-foreground'>Please select your user type</p>
            </div>
            <div className='grid gap-4'>
                <Button
                    onClick={() => onSelect("company")}
                    variant={'outline'}
                    className='w-full h-auto p-6 items-center gap-4 border-2 transition-all duration-200 hover:border-primary hover:bg-primary/5 cursor-pointer'>
                    <div className='size-12 rounded-full bg-primary/10 flex items-center justify-center'>
                        <Building2 className='size-6 text-primary' />
                    </div>
                    <div className='text-left'>
                        <h3 className='font-bold text-lg'>Company/Organization</h3>
                        <p className='text-muted-foreground'>Post Jobs and Find Great Talent</p>
                    </div>
                </Button>
                <Button
                    onClick={() => onSelect("jobseeker")}
                    variant={'outline'}
                    className='w-full h-auto p-6 items-center gap-4 border-2 transition-all duration-200 hover:border-primary hover:bg-primary/5 cursor-pointer'>
                    <div className='size-12 rounded-full bg-primary/10 flex items-center justify-center'>
                        <UserRoundIcon className='size-6 text-primary' />
                    </div>
                    <div className='text-left'>
                        <h3 className='font-bold text-lg'>Job Seeker</h3>
                        <p className='text-muted-foreground'>Find your dream Job Opportunities</p>
                    </div>
                </Button>
            </div>
        </div>
    )
}
