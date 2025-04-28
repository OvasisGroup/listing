
import WhatdoesitMean from '@/components/general/WhatdoesitMean'
import Image from 'next/image'
import React from 'react'

export default function whychooseuspage() {
    return (
        <>
            <div>
                <Image src={'/images/howitworks.jpg'} alt={'Mr_Kim_Logo'} width={500} height={100} className='w-full rounded-lg mt-4' />
                <div className='py-10'>

              <WhatdoesitMean/>

                </div>
            </div>
        </>
    )
}
