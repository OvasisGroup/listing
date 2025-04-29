import WhyChooseUsForm from '@/components/admin/whychoose/AddwhyChoose'
import WhyChooseUsListEdit from '@/components/admin/whychoose/EditContent'
import WhatdoesitMeanAdmin from '@/components/admin/whychoose/EditWhatitmeans'
import React from 'react'

export default function page() {
  return (
    <div>
      <div className='grid md:grid-cols-2 gap-4'>
        <WhatdoesitMeanAdmin/>
        <div className='border-2 border-primary rounded-lg p-4'>
        <WhyChooseUsForm/>
        </div>
        </div>
        <WhyChooseUsListEdit/>
    </div>
  )
}
