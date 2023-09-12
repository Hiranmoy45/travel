"use client";
import React, { useEffect, useRef } from "react";
import Swiper from "swiper";

const Slider = ({data}) => {
  const swiperRef = useRef(null);
  useEffect(() => {
    swiperRef.current = new Swiper(".swiper", {
      // Your Swiper options here
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      lazy: true,
    });

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  const goNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };
  return (
    <>
      <div className=" overflow-auto">
        <div className="swiper rounded-lg ">
          <div className="swiper-wrapper">
          {data.imageSrc.map((data, index) => (
            <div className="swiper-slide" key={index}>
              <img
                className="h-full w-full object-cover ok"
                src={`/images/${data}`}
                                loading="lazy"
                alt="image"
              />
              <div className="swiper-lazy-preloader" />
            </div>
          ))}
           
          </div>
          <div className="swiper-pagination" />
          <div className="swiper-button-next" onClick={goNextSlide} />
          <div className="swiper-button-prev" onClick={goPrevSlide} />
        </div>
      </div>
    </>
  );
};

export default Slider;
