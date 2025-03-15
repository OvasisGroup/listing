import HomePageSearch from "@/components/forms/onboarding/HomePageSearch";
import Image from "next/image";


export default function Home() {
  return (
    <div className='bg-primary md:mt-10 md:rounded-3xl rounded-xl'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4 justify-center items-start md:p-20">
          <small className="text-yellow-300 text-sm font-bold bg-green-900 px-4 py-2 rounded-3xl self-center md:self-start mt-10 md:mt-0">Get the right local Pro</small>
          <h1 className="font-black md:text-5xl text-3xl text-white px-6 md:px-0 text-center md:text-left mb-6 md:mb-0">
            Get the right local Pro
            in your area for any project.
          </h1>
          <HomePageSearch/>
        </div>
        <div>
          <Image src={'/images/kimpeople.png'} alt={'Mr_Kim_Logo'} width={500} height={100} className='self-center -mt-15 hidden md:block' />
        </div>
      </div>
    </div>
  );
}
