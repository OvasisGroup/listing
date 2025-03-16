import { OnboardingForm } from '@/components/forms/onboarding/OnboardingForm'
import React from 'react'
import { prisma } from '../../../prisma/prisma'
import { redirect } from 'next/navigation';
import { requireUser } from '@/utils/requireUser';

async function checkIfUserHasFinishedOnboarding(userId: string) {
   const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      onboardingCompleted: true,
    },
   });

   if (user?.onboardingCompleted === true) {
    return redirect('/admin');
   }

   return user; 
}

export default async function OnBoardingPage() {
    const session = await requireUser();
    await checkIfUserHasFinishedOnboarding(session.id as string);
  return (
    <div className='min-h-screen w-screen flex flex-col items-center justify-center'>
        <OnboardingForm/>
    </div>
  )
}
