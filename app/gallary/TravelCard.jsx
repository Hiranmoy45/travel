'use client'
import React, { useState , useEffect, useContext} from 'react';
import Link from 'next/link';
import Image from 'next/image';



const TravelCards = ({travelData}) => {
  // Sample data for travel cards
 console.log(travelData);
  

  return (
    <>
     <div className="card">
     <Image
  className="h-80 w-full rounded-lg object-cover"
  src={`/images/ProductPhotos/${travelData}`}
  width={800}
  height={600}
  alt="image"
/>
    <div className="absolute inset-0 flex h-full w-full flex-col justify-between">
     
      {/* <div className="rounded-lg bg-gradient-to-t from-[#19213299] via-[#19213266] to-transparent px-4 py-3 pt-14">
      </div> */}
    </div>
  </div>
    </>
  );
};

export default TravelCards;
