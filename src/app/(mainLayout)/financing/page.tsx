

import ShowFinance from '@/components/admin/finance/ShowFinance'
import ShowMyFinance from '@/components/admin/finance/ShowMyFinance'
import Image from 'next/image'
import React from 'react'

export default function FinanceMyProject() {
    return (
        <>
            <div>
                <Image src={'/images/finance.jpg'} alt={'Mr_Kim_Logo'} width={500} height={100} quality={100}  className='w-full rounded-lg mt-4' />
                <div className='py-10'>
                    <ShowFinance/>
                </div>
                <ShowMyFinance/>
            </div>
        </>
    )
}
