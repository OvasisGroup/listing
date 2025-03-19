

import { requireUser } from '@/utils/requireUser';
import React from 'react'

export default async function MainSidebarFooter() {
    const session  = await requireUser();

    if (!session?.name) {
        return <h1>You are not logged in</h1>;
    }
  return (
    <div>
        <p>
            {session.name}
        </p>
    </div>
  )
}
