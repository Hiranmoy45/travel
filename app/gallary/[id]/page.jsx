'use client'
import React,{useState , useEffect, useContext} from 'react'
import TravelCard from '../TravelCard';
import { newtravelData } from '@/data/Data';
import Link from 'next/link';


const Page = ({params}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  // Simulate fetching the data based on the provided ID
  useEffect(() => {
    const item = newtravelData.find((item) => item.id == params?.id);
    setData(item);
  }, [params?.id]);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
  <>
      <div className="main-content w-full px-[var(--margin-x)] pb-8 overflow-hidden">
  <div className="flex items-center justify-between space-x-2 py-5">
    <h3 className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">
      Gallary
    </h3> 
    <div>
      <Link href="/" className="border-b border-dashed border-current pb-0.5 font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70">Back to Home</Link>
    </div>
  </div>
  <div className="grid gap-4 sm:gap-5 lg:gap-6">
    <div className="col-span-12 lg:col-span-8">
 
      <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:grid-cols-2 sm:gap-5 lg:mt-6 lg:gap-6  md:grid-cols-3 xl:grid-cols-4">
      {data.imageSrc.map((image, index) => (
          <TravelCard travelData={image} key={index}/>
        ))}
        
       
      </div>
    </div>
 
  </div>

</div>
  </>
  )
}

export default Page