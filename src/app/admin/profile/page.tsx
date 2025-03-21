import UserProfilesPage from '@/components/forms/UserProfilePage';
import UserProfilePage from '@/components/general/UserProfilePage'
import { requireUser } from '@/utils/requireUser';
import React from 'react'

export default async function UserProfile() {
  const session = await requireUser();
  return (
    <div>
      <UserProfilesPage/>
        <UserProfilePage email={session.email as string} image={session.image as string} name={session.name as string}/>
    </div>
  )
}
