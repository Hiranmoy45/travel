import React from 'react';

const Card = ({ imageSrc, name, location, rating }) => {
  return (
    <div className="card">
    <img className="h-80 w-full rounded-lg object-cover" src={imageSrc} alt="image" />
    <div className="absolute inset-0 flex h-full w-full flex-col justify-between">
      <div className="flex justify-end p-3">
        <button className="flex items-center justify-center h-7 w-7 rounded-full bg-black/20 p-0 hover:bg-black/30 focus:bg-black/30">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
      <div className="rounded-lg bg-gradient-to-t from-[#19213299] via-[#19213266] to-transparent px-4 py-3 pt-14">
        <div>
          <a href="#" className="line-clamp-2 text-base font-semibold text-white">
          {name}
          </a>
        </div>
        <div className="mt-1 flex items-center space-x-3 text-slate-200">
          <p className="flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="line-clamp-1 text-xs+">{location}</span>
          </p>
          <p className="flex shrink-0 items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.948 4.29l1.643 3.169c.224.44.82.864 1.325.945l2.977.477c1.905.306 2.353 1.639.98 2.953l-2.314 2.233c-.392.378-.607 1.107-.486 1.63l.663 2.763c.523 2.188-.681 3.034-2.688 1.89l-2.791-1.593c-.504-.288-1.335-.288-1.848 0l-2.791 1.594c-1.997 1.143-3.21.288-2.688-1.89l.663-2.765c.12-.522-.094-1.251-.486-1.63l-2.315-2.232c-1.362-1.314-.924-2.647.98-2.953l2.978-.477c.495-.081 1.092-.504 1.316-.945l1.643-3.17c.896-1.719 2.352-1.719 3.239 0z" />
            </svg>
            <span className="text-xs+">5.0</span>
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

const TravelCards = () => {
  // Sample data for travel cards
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
      {travelData.map((destination, index) => (
        <Card key={index} {...destination} />
      ))}
    </>
  );
};

export default TravelCards;
