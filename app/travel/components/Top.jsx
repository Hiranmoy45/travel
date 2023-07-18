import React from 'react'
import TravelCard from './TravelCard';
const Top = () => {
  const travelData = [
    {
      imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2022/8/NJ/LL/BV/127954530/commercial-fountain-construction-service-500x500.JPG',
      name: 'Commercial Fountain Construction Service',
      location: 'Guwahati',
      rating: '4.5',
    },
    {
      imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2022/8/GY/OP/XG/127954530/outdoor-playground-construction-services-500x500.jpg',
      name: 'Playground',
      location: 'PAN India',
      rating: '4.2',
    },
    {
      imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2022/8/RT/EV/ZZ/127954530/swimming-pool-water-treatment-500x500.jpeg',
      name: ' Structure	Light Gauge Steel Construction',
      location: '	PAN India',
      rating: '4.8',
    },
    {
      imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2023/4/298917939/ND/BN/SC/127954530/prefabricated-frp-swimming-pool-500x500.jpeg',
      name: 'Destination 4',
      location: 'Location 4',
      rating: '4.0',
    },
    {
      imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2022/8/PS/TQ/KL/127954530/commercial-fountain-construction-service-500x500.png',
      name: 'Destination 5',
      location: 'Location 5',
      rating: '4.6',
    },
    {
      imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2022/8/HA/TK/YS/127954530/water-fountain-500x500.png',
      name: 'Destination 6',
      location: 'Location 6',
      rating: '4.7',
    },
    {
      imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2022/8/LZ/TN/JF/127954530/water-fountain-500x500.jpg',
      name: 'Destination 7',
      location: 'Location 7',
      rating: '4.3',
    },
    {
      imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2022/8/VX/FR/IE/127954530/commercial-tensile-structure-construction-service-500x500.jpg',
      name: ' Structure	Light Gauge Steel Construction',
      location: 'PAN India',
      rating: '4.8',
    },
    {
      imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2022/8/VC/KG/NW/127954530/swimming-pool-water-treatment-500x500.jpeg',
      name: 'Destination 9',
      location: 'Location 9',
      rating: '3.9',
    },
    {
      imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2022/8/RY/ZJ/SP/127954530/swimming-pool-water-treatment-500x500.jpeg',
      name: 'Destination 7',
      location: 'Location 7',
      rating: '4.3',
    },
    {
      imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2022/8/OR/PT/BF/127954530/swimming-pool-water-treatment-500x500.JPG',
      name: 'Destination 8',
      location: 'Location 8',
      rating: '4.9',
    },
    {
      imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2022/8/RY/ZJ/SP/127954530/swimming-pool-water-treatment-500x500.jpeg',
      name: 'Destination 9',
      location: 'Location 9',
      rating: '3.9',
    },
  ];
  return (
    <>
          <div className="card px-4 pb-5 sm:px-5 mt-4">
        <div className="flex items-center justify-between py-3">
          <h2 className="text-sm+ font-medium tracking-wide text-slate-700 dark:text-navy-100">
            Top Hotels
          </h2>
                  
        </div>
        <div className="space-y-4">
        {travelData.slice(0, 6).map((destination, index) => (
        <TravelCard key={index} destination={destination} />
      ))}
        </div>
      </div>
          </>
  )
}

export default Top