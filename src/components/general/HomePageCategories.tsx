import React  from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRightIcon } from 'lucide-react';

export default function HomePageCategories() {


    return (
        <>
            <motion.div className='mt-10 md:flex justify-between items-end w-full'>
                <div>
                    <h1 className='font-bold text-3xl'>Browse talent by category</h1>
                    <p className='text-xl'>
                        Looking for work? <span className='text-primary'><Link href={'/jobs'}>Browse Jobs</Link></span>
                    </p>
                </div>
                <Link href={'/allCategories'}>
                    <div className='mt-4 flex gap-2 items-center'>
                        <h1 className='text-primary font-bold md:text-2xl'>All Categories</h1>
                        <ArrowUpRightIcon />
                    </div>
                </Link>
            </motion.div>            
        </>
    );
}
