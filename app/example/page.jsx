'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './index.css';
import Link from 'next/link';

function Page() {
  const slides = [
    
    {
      id: 1,
      image: '/images/1.png',
      title: 'Swimming Pool',
    },
    {
      id: 2,
      image: '/images/slide1.png',
      title: 'Water Fountain',
    },
    {
      id: 3,
      image: '/images/2.png',
      title: 'Tensile membrane structure',
    },
    {
      id: 4,
      image: '/images/slide4.JPG',
      title: 'Awnings & Pergoluxe',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % slides.length;
      setCurrentSlide(nextSlide);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  const prev = () => {
    const nextSlide = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(nextSlide);
  };

  const next = () => {
    const nextSlide = (currentSlide + 1) % slides.length;
    setCurrentSlide(nextSlide);
  };

  return (
    <>
      <div className="carousel relative container mx-auto max-w-2xl" style={{ maxWidth: "1600px" }}>
    
        <div className="carousel-inner relative overflow-hidden w-full">
          <Link href='/travel'>
          {slides.map((slide) => (
            
            <React.Fragment key={slide.id}>

              <input
                className="carousel-open"
                type="radio"
                id={`carousel-${slide.id}`}
                name="carousel"
                aria-hidden="true"
                hidden
                checked={currentSlide === slide.id - 1}
              />
              <div
                className={`carousel-item absolute opacity-0 ${currentSlide === slide.id - 1 ? 'opacity-100' : ''}`}
                style={{ height: "50vh" }}
              >
                <div className="h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={1920}
                    height={768}
                  />
                  <Link href='/travel'>
                    <div className="banner-content">
                      <p className="banner-subtitle text-primary">Trending item</p>
                      <h2 className="banner-title font-bold">{slide.title}</h2>
                      <p className="banner-text">Get Started</p>
                      <button className="btn space-x-2 bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 cursor-pointer">Send Enquiry</button>
                    </div>
                  </Link>
                </div>
              </div>
            </React.Fragment>
          ))}
          </Link>

          <label className="prev control w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto" onClick={prev}>‹</label>
          <label className="next control w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto" onClick={next}>›</label>

       


        </div>
      </div>
    </>
  );
}

export default Page;