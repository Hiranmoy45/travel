'use client'
import React, { useState, useEffect } from 'react';
import './index.css';

const page = () => {
  
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1534009502677-4e5080efa8c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3dpbWluZyUyMHBvb2x8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Retractable Awning Construction Services',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM0MTM2fQ&auto=format&fit=crop&w=1600&q=80',
      title: 'Real Bamboo Wall Clock',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1519327232521-1ea2c736d34d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
      title: 'Brown and blue hardbound book',
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/14024958/pexels-photo-14024958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Brown and blue hardbound book',
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/261410/pexels-photo-261410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Swimming Pool Water Treatment Construction Services',
    },
  ];


  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = currentSlide === slides.length ? 1 : currentSlide + 1;
      setCurrentSlide(nextSlide);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);
const prev=()=>{
    const nextSlide = currentSlide == 0  ? slides.length-1 : currentSlide - 1;
      setCurrentSlide(nextSlide);
   
}
const next=()=>{
    const nextSlide = currentSlide === slides.length ? 1 : currentSlide + 1;
      setCurrentSlide(nextSlide);
     
}
  return (
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
              <div
                className="h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
                style={{ backgroundImage: `url('${slide.image}')` }}
              >
                {/* <div className="container mx-auto">
                  <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                    <p className="text-black text-2xl my-4">{slide.title}</p>
                    <a className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="#">view product</a>
                  </div>
                </div> */}
                 <div className="banner-content">

<p className="banner-subtitle text-primary">Trending item</p>

<h2 className="banner-title font-bold">{slide.title}</h2>


<p className="banner-text">
  starting at &#x20b9;<b>500</b>.00
</p>

<a href="#" className="btn space-x-2 bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90">book now</a>

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
  );
};

export default page;
