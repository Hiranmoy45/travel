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
        <div className="swiper rounded-lg">
          <div className="swiper-wrapper">
            <div className="swiper-slide h-full">
              <img
                className="h-full w-full object-cover ok"
                src={data.imageSrc}
                loading="lazy"
                alt="image"
              />
              <div className="swiper-lazy-preloader" />
            </div>
            <div className="swiper-slide h-full">
              <img
                className="h-full w-full object-cover"
                src={data.imageSrc}
                alt="image"
                loading="lazy"
              />
              <div className="swiper-lazy-preloader" />
            </div>
            <div className="swiper-slide h-full">
              <img
                className="h-full w-full object-cover"
                src={data.imageSrc}
                alt="image"
                loading="lazy"
              />
              <div className="swiper-lazy-preloader" />
            </div>
            <div className="swiper-slide h-full">
              <img
                className="h-full w-full object-cover"
                src={data.imageSrc}
                alt="image"
                loading="lazy"
              />
              <div className="swiper-lazy-preloader" />
            </div>
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
