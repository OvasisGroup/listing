import MainCategoriesSidebar from '@/components/general/MainCategoriesSidebar';
import { requireUser } from '@/utils/requireUser';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function UserProfile() {
  const session = await requireUser();
  if (!session || !session.id) {
    return redirect("/login");
  }
  return (

    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2 col-span-1 bg-grey">cxvsvv</div>
      <div className="rounded-2xl">
        <MainCategoriesSidebar />
      </div>
    </div>
  )
}
