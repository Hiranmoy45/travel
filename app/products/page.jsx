import React from 'react';
import Link from 'next/link';
import Card from './components/Card'

const page = () => {
    const dataSet = [
        {
          badgeType: 'lux',
          bedCount: '2 beds',
          adults: '5 Adult',
          hotelName: 'Crowne Plaza.',
          price: '$80',
          rating: '4.8',
          imageUrl: 'https://lineone.piniastudio.com/images/travel/hotel-3.jpg'
        },
        {
          badgeType: 'Penthouse',
          bedCount: '3 beds',
          adults: '3 Adult',
          hotelName: 'Sunset Lodge.',
          price: '$100',
          rating: '4.9',
          imageUrl: 'https://lineone.piniastudio.com/images/travel/hotel-1.jpg'
        },
        {
          badgeType: 'plus',
          bedCount: '1 beds',
          adults: '2 Adult',
          hotelName: 'Hotel Elite.',
          price: '$120',
          rating: '4.9',
          imageUrl: 'https://lineone.piniastudio.com/images/travel/hotel-5.jpg', // Replace this with the actual image URL for each item
        },
        {
          badgeType: 'lux',
          bedCount: '2 beds',
          adults: '5 Adult',
          hotelName: 'Hotel Bliss.',
          price: '$90',
          rating: '4.5',
          imageUrl: 'https://lineone.piniastudio.com/images/travel/hotel-7.jpg', // Replace this with the actual image URL for each item
        },
        {
          badgeType: 'Penthouse',
          bedCount: '3 beds',
          adults: '3 Adult',
          hotelName: 'Emerald Bay Inn.',
          price: '$100',
          rating: '4.9',
          imageUrl: 'https://lineone.piniastudio.com/images/travel/hotel-8.jpg', // Replace this with the actual image URL for each item
        },
        {
          badgeType: 'Penthouse',
          bedCount: '3 beds',
          adults: '3 Adult',
          hotelName: 'Emerald Bay Inn.',
          price: '$100',
          rating: '4.9',
          imageUrl: 'https://lineone.piniastudio.com/images/travel/hotel-8.jpg', // Replace this with the actual image URL for each item
        },
        {
          badgeType: 'Penthouse',
          bedCount: '3 beds',
          adults: '3 Adult',
          hotelName: 'Emerald Bay Inn.',
          price: '$100',
          rating: '4.9',
          imageUrl: 'https://lineone.piniastudio.com/images/travel/hotel-8.jpg', // Replace this with the actual image URL for each item
        },
      
        // Add more items here...
      ];
  return (
    
    <>
     <div className="main-content w-full px-[var(--margin-x)] pb-8 overflow-hidden">
   <div className="transition-all duration-[.25s] mt-5 lg:mt-6">
  <div className="rounded-lg bg-slate-150 dark:bg-navy-800">
    {/* Section title */}
    <div className="flex items-center justify-between space-x-2 py-5 pr-4">
    <h2 className="line-clamp-1 px-4 text-base font-medium tracking-wide text-slate-700 dark:text-navy-100 sm:px-5 lg:text-lg">
      Top Hotels
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
        {dataSet.map((hotel, index) => (
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