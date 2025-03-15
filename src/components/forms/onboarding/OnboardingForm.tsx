"use client"
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import React, { useState } from 'react'
import { UserTypeSelection } from './UserTypeFolder';
import CompanyForm from './CompanyForm';
import JobSeekerForm from './JobSeekerForm';

type UserSelectionType = "company" | "jobseeker" | null;

export function OnboardingForm() {
    const [step, setStep] = useState(1);
    const [userType, setUserType] = useState<UserSelectionType>(null);

    function handleUserTypeSelection(type: UserSelectionType) {
        setUserType(type);
        setStep(2);
    }

    function renderStep() {
        switch (step) {
            case 1:
                return <UserTypeSelection onSelect={handleUserTypeSelection} />

            case 2: return userType === "company" ? <CompanyForm/> : <JobSeekerForm/>

            default:
                return null;
        }
    }

    return (
        <>
            <div className='flex items-center gap-2 mb-10'>
                <Image src={'/images/mrkim-logo.svg'} alt={'Mr_Kim_Logo'} width={180} height={100} className='self-center' />
            </div>
            <Card className='max-w-lg w-full'>
                <CardContent className='p-6'>
                    {renderStep()}
                </CardContent>
            </Card>
        </>
    )
}
