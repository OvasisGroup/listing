import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
// import Image from 'next/image'
import { motion } from 'framer-motion';
import { ArrowUpRightIcon, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";

const Categories = [
    {
        id: "1",
        icon: "/images/SVG/automotive.png",
        name: "Automotive Services",
        description: "Automobile has working systems, moving and workings parts that are susceptible to tear and wear and will fail over time. The question is not whether or not a breakdown of such systems and parts will happen. No matter how diligent you are when it come to maintenance, the fact is, it is not a matter of how, it is a matter of when will breakdown of such systems and parts will occur. When breakdown of such systems and parts happen, they do not have to break your budget or bank. Mr.KIM professional service providers got you covered when breakdown of such systems and parts brings your life to a screeching halt.",
        skills: "600"
    },
    {
        id: "2",
        icon: "/images/SVG/residential.png",
        name: "Residential Services",
        description: "Residential properties have working systems, moving and workings parts that are susceptible to tear and wear and will fail over time. The question is not whether or not a breakdown of such systems and parts will happen. No matter how diligent you are when it come to maintenance, the fact is, it is not a matter of how, it is a matter of when will breakdown of such systems and parts will occur. When breakdown of such systems and parts happen, they do not have to break your budget or bank. Mr.KIM professional service providers got you covered when breakdown of such systems and parts brings your life to a screeching halt.",
        skills: "300"
    },
    {
        id: "3",
        icon: "/images/SVG/commercial.png",
        name: "Commercial Services",
        description: "Commercial properties have working systems, moving and workings parts that are susceptible to tear and wear and will fail over time. The question is not whether or not a breakdown of such systems and parts will happen. No matter how diligent you are when it come to maintenance, the fact is, it is not a matter of how, it is a matter of when will breakdown of such systems and parts will occur. When breakdown of such systems and parts happen, they do not have to break your budget or bank. Mr.KIM professional service providers got you covered when breakdown of such systems and parts brings your life to a screeching halt. ",
        skills: "100"
    },
    {
        id: "4",
        icon: "/images/SVG/bodaboda.png",
        name: "Boda Boda Services",
        description: "Boda Boda has working systems, moving and workings parts that are susceptible to tear and wear and will fail over time. The question is not whether or not a breakdown of such systems and parts will happen. No matter how diligent you are when it come to maintenance, the fact is, it is not a matter of how, it is a matter of when will breakdown of such systems and parts will occur. When breakdown of such systems and parts happen, they do not have to break your budget or bank. Mr.KIM professional service providers got you covered when breakdown of such systems and parts brings your life to a screeching halt. ",
        skills: "400"
    },
    {
        id: "5",
        icon: "/images/SVG/handyman.png",
        name: "Handyman Services",
        description: "Residential and Commercial properties have working systems, moving and workings parts that are susceptible to tear and wear and will fail over time. The question is not whether or not a breakdown of such systems and parts will happen. No matter how diligent you are when it come to maintenance, the fact is, it is not a matter of how, it is a matter of when will breakdown of such systems and parts will occur. When breakdown of such systems and parts happen, they do not have to break your budget or bank. Mr.KIM professional service providers got you covered when breakdown of such systems and parts brings your life to a screeching halt.",
        skills: "500"
    },
    {
        id: "6",
        icon: "/images/SVG/tuktuk.png",
        name: "TukTuk Services",
        description: "Tuk Tuk has working systems, moving and workings parts that are susceptible to tear and wear and will fail over time. The question is not whether or not a breakdown of such systems and parts will happen. No matter how diligent you are when it come to maintenance, the fact is, it is not a matter of how, it is a matter of when will breakdown of such systems and parts will occur. When breakdown of such systems and parts happen, they do not have to break your budget or bank. Mr.KIM professional service providers got you covered when breakdown of such systems and parts brings your life to a screeching halt. ",
        skills: "300"
    },
    {
        id: "7",
        icon: "/images/SVG/digital.png",
        name: "Digital Services",
        description: "If you are looking for the best professional event planner, lawyer, DJ, pet services, lessons, and many more, in your area, look no further than Mr.KIM. Mr.KIM platform offer expert professional services for those who need that critical eye. From ensuring that the services requested is delivered on time by our experienced, skilled, and reliable professional service providers to your satisfaction guaranteed, we will match you with a service professional provider that ticks all the boxes. Looking for professional service providers should be hustle free and you do not have to break your budget or bank. Mr.KIM professional service providers got you covered for all your professional service needs. Your life should not come to a screeching halt while searching for professional service providers.",
        skills: "200"
    },
    {
        id: "8",
        icon: "/images/SVG/other.png",
        name: "Other Services",
        description: "If you are looking for the best professional event planner, lawyer, DJ, pet services, lessons, and many more, in your area, look no further than Mr.KIM. Mr.KIM platform offer expert professional services for those who need that critical eye. From ensuring that the services requested is delivered on time by our experienced, skilled, and reliable professional service providers to your satisfaction guaranteed, we will match you with a service professional provider that ticks all the boxes. Looking for professional service providers should be hustle free and you do not have to break your budget or bank. Mr.KIM professional service providers got you covered for all your professional service needs. Your life should not come to a screeching halt while searching for professional service providers.",
        skills: "500"
    }
]

export default function HomePageCategories() {
    return (
        <>
            <motion.div className='mt-10'
            >
                <h1 className='font-bold text-3xl'>Browse talent by category</h1>
                <p className='text-xl'>Looking for work? <span className='text-primary'><Link href={'/jobs'}>Browse Jobs</Link></span></p>
            </motion.div>
            <motion.div className="grid md:grid-cols-4 gap-6 mt-10"
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.5 }}
            >
            {Categories.map((category) => (
                <Link key={category.id} href={`/jobs/${category.id}`}>
                <Card key={category.id} className="shadow-none hover:bg-gray-800 hover:text-white">
                    <CardHeader>
                        <Image src={category.icon} alt={category.name} width={40} height={40} />
                    </CardHeader>
                    <CardContent className=' first:text-white'>
                        <p className='font-bold text-xl '>{category.name}</p>
                    </CardContent>
                    <CardFooter className='flex items-center justify-between'>
                    <div className='flex items-center'>
                      <Star className='text-primary w-5 h-5 mr-2'/> <span className='font-bold'>{category.skills} skills</span>  
                      </div>
                      <div>
                      <ArrowUpRightIcon/>
                      </div>
                    </CardFooter>
                </Card>
                </Link>
            ))}
            </motion.div>
        </>
    )
}
