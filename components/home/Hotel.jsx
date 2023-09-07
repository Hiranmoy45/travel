import React from 'react'
import Link from 'next/link';
import Hotelcard from './HotelCard';
import { newtravelData } from '@/data/Data';

const Hotel = () => {
   
  return (
    
    <>
    <div className="transition-all duration-[.25s] sm:mt-5 lg:mt-6" id='home'>
  <div className="rounded-l-lg bg-slate-150 pb-1 pt-4 dark:bg-navy-800">
  <div className="flex items-center justify-between space-x-2 py-5 pr-4">
    <h2 className="line-clamp-1 px-4 text-base font-medium tracking-wide text-slate-700 dark:text-navy-100 sm:px-5 lg:text-lg">
      Top Products
    </h2>
    <div>
      <Link href="products" className="border-b border-dashed border-current pb-0.5 font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70">view all</Link>
    </div>
    </div>
    <div className="scrollbar-sm mt-4 flex space-x-4 overflow-x-auto px-4 pb-4 sm:px-5">
   
      {newtravelData.map((hotel, index) => <Hotelcard dataSet={hotel} key={index}  />)}
   
     

    </div>
  </div>
</div>
    </>
  )
}

export default Hotel