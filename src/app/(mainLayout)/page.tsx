"use client"
import HomePageSearch from "@/components/forms/onboarding/HomePageSearch";
// import Image from "next/image";
import { motion } from "framer-motion";
import HomePageCategories from "@/components/general/HomePageCategories";
import AdvertSection from "@/components/general/AdvertSection";
import LocationFetcher from "@/components/general/Location";
import CleaningIntro from "@/components/general/cleaning/CleaningIntro";
import ImageCarousel from "@/components/general/ImageCarousel";
import FourGridCarousel from "@/components/general/Carousel";

export default function Home() {
  return (
    <>
      <div className='bg-primary md:mt-10 md:rounded-3xl rounded-xl'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex flex-col gap-4 justify-center items-start md:p-20">
            <small className="text-yellow-300 text-sm font-bold bg-green-900 px-4 py-2 rounded-3xl self-center md:self-start mt-10 md:mt-0"><LocationFetcher /></small>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="font-black md:text-5xl text-3xl text-white px-6 md:px-0 text-center md:text-left mb-6 md:mb-0"
            >
              Get the right local Pro in your area for any project.
            </motion.h1>
            <HomePageSearch />
          </div>
          <div className="md:pr-6 p-6">
            <ImageCarousel/>
            {/* <Image src={'/images/kimpeople.png'} alt={'Mr_Kim_Logo'} width={500} height={100} className='self-center -mt-15 hidden md:block' /> */}
          </div>
        </div>
      </div>
      <div className="mb-10">
      
        <HomePageCategories />
        <FourGridCarousel/>
      </div>
      <CleaningIntro/>
      <div className="mb-10">
        <AdvertSection />
      </div>

    </>
  );
}
