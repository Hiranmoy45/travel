'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './index.css';
import Link from 'next/link';

function Page() {
 
  const slides = [
    {
      id: 1,
      image: '/images/slide3.JPG',
      title: 'Saptak Playground Equipment',
    },
    {
      id: 2,
      image: '/images/slide1.png',
      title: 'Water Fountain',

    },  
    {
      id: 3,
      image: '/images/pexels-photo-261410.jpeg',
      title: 'Saptak Swimming Pool',
    },
  
    {
      id: 4,
      image: '/images/slide4.JPG',
      title: 'Saptak Awnings & Pergoluxe',
    },
  ];


  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = currentSlide === slides.length ? 1 : currentSlide + 1;
      setCurrentSlide(nextSlide);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide ,slides.length]);
const prev=()=>{
    const nextSlide = currentSlide == 0  ? slides.length-1 : currentSlide - 1;
      setCurrentSlide(nextSlide);
   
}
const next=()=>{
    const nextSlide = currentSlide === slides.length ? 1 : currentSlide + 1;
      setCurrentSlide(nextSlide);
     
}
  return (
    <>
    <div className="carousel relative container mx-auto max-w-2xl" style={{ maxWidth: "1600px" }}>
      <div className="carousel-inner relative overflow-hidden w-full">
        {slides.map((slide) => (
          <React.Fragment key={slide.id}>
            <input
              className="carousel-open"
              type="radio"
              id={`carousel-${slide.id}`}
              name="carousel"
              aria-hidden="true"
              hidden
              checked={currentSlide === slide.id}
            />
            <div
              className={`carousel-item absolute opacity-0 ${currentSlide === slide.id ? 'opacity-100' : ''}`}
              style={{ height: "50vh" }}
            >
              <div className="h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right">
             <Image
        src={slide.image}
        alt={slide.title}
        width={1920}
        height={768}
      />
              
                 <div className="banner-content">

<p className="banner-subtitle text-primary">Trending item</p>

<h2 className="banner-title font-bold">{slide.title}</h2>


<p className="banner-text">
  Get Started
</p>

<Link href="/travel" className="btn space-x-2 bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 cursor-pointer">book now</Link>

</div>
              </div>
            </div>
          </React.Fragment>
        ))}

        {slides.map((slide, index) => (
          <React.Fragment key={slide.id}>
            <label htmlFor={`carousel-${index === 0 ? slides.length : index}`} className={`prev control-${index + 1} w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto`}  onClick={prev}>‹</label>
            <label htmlFor={`carousel-${index === slides.length - 1 ? 1 : index + 2}`} className={`next control-${index + 1} w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto`} onClick={next}>›</label>
          </React.Fragment>
        ))}

        {/* Add additional indicators for each slide */}
        <ol className="carousel-indicators">
          {slides.map((slide, index) => (
            <li key={slide.id} className="inline-block mr-3">
              <label htmlFor={`carousel-${index + 1}`} className={`carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900 ${currentSlide === slide.id ? 'text-black' : ''}`}>•</label>
            </li>
          ))}
        </ol>
      </div>
    </div>
  
    </>
  );
};

export default Page;
