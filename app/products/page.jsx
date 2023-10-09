import React from 'react';
import Link from 'next/link';
import Card from './components/Card';
import { newtravelData } from '@/data/Data';

const page = () => {
   
  return (
    
    <>
     <div className="main-content w-full px-[var(--margin-x)] pb-8 overflow-hidden">
   <div className="transition-all duration-[.25s] mt-5 lg:mt-6">
  <div className="rounded-lg bg-slate-150 dark:bg-navy-800">
    {/* Section title */}
    <div className="flex items-center justify-between space-x-2 py-5 pr-4">
    <h2 className="line-clamp-1 px-4 text-base font-medium tracking-wide text-slate-700 dark:text-navy-100 sm:px-5 lg:text-lg">
      Top Products
    </h2>
    <div>
      <Link href="/#home" className="border-b border-dashed border-current pb-0.5 font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70">Back to Home</Link>
    </div>
    </div>
    {/* Scrollable container */}
    <div className="scrollbar-sm mt-4 overflow-x-auto">
      {/* Grid layout with responsive card sizing */}
      <div className="grid gap-4 px-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-4">
        {/* Loop through the dataSet and render each card */}
        {newtravelData.map((hotel, index) => (
          <div key={index} className="flex justify-center">
            <Card dataSet={hotel} />
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


</div>
    </>
  )
}

export default page