"use client";
import React, { useState, useEffect, useContext } from "react";
import "../index.css";
import Link from "next/link";

import { newtravelData } from "@/data/Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faHome,
  faPaintBrush,
  faMapMarkerAlt,
  faHeart,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import Slider from "./Slider";
import Form from "./components/Form";
import { AppContext } from "@/context/AppContext";


const Page = ({ params }) => {
  
  const [data, setData] = useState(null);
const {setShowModal1}=useContext(AppContext);
  // Simulate fetching the data based on the provided ID
  useEffect(() => {
    const item = newtravelData.find((item) => item.id == params?.id);
    setData(item);
  }, [params?.id]);

  if (!data) {
    return <div>Loading...</div>;
  }
 
  
  return (
    <>
      <div className="main-content w-full px-[var(--margin-x)] pb-8 overflow-hidden house-details">
        <div className="house-title ">
          <div className="flex items-center justify-between space-x-2 ">
          <h1 className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl ">
            {data.name}
          </h1>
          <div>
      <Link href={`/gallary/${params?.id}`} className="border-b border-dashed border-current pb-0.5 font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70">All Images</Link>
    </div>
    </div>

          <div className="row">
            <div>
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStarHalfAlt} className="icon" />
              <FontAwesomeIcon icon={farStar} className="icon" />

              <span className="font-medium text-slate-700 dark:text-navy-100">
                245 Reviews
              </span>
            </div>
            <div>
              <p className="font-medium text-slate-700 dark:text-navy-100 ">
                Location : Guwahati , India
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left Side (One Image) */}
          <div className="md:col-span-1 ">
            {/* <img src="/images/all/school.webp" alt="Left Image" className="w-full h-auto" />
             */}
            <Slider data={data} />
          </div>
          {/* Right Side (Four Images) */}
          <div className="md:col-span-2 grid grid-cols-2 gap-4 ">
            {data.imageSrc.slice(1, 5).map((data, index) => (
              <div className="col-span-1" key={index}>
                <img
                  src={`/images/${data}`}
                  alt="Right Image 1"
                  className="w-full h-52 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="small-details">
          <h2 className="text-xl text-slate-800 dark:text-navy-50">
            {data.name}
          </h2>
          
          <h4 className="text-2xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl ">
          <button onClick={()=>setShowModal1(true)} className="btn space-x-2 bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 cursor-pointer">book now</button>
          </h4>
        </div>

        <hr className="line" />
       <Form data={data}/>
        <ul className="details-list">
          {data.info.map((info, index) => {
            const parts = info.split(":");
            const ftag = parts[0];
            const ltag = parts[1];

            return (
              <>
                <li className="dark:text-white" key={index}>
                  <FontAwesomeIcon
                    icon={faArrowAltCircleRight}
                    className="fa dark:text-white"
                  />
                  <span className="absolute -right-px -top-px flex h-3 w-3 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-80" />
                    <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>

                  {ftag}
                  <span>{ltag}</span>
                </li>
              </>
            );
          })}
        </ul>
        <hr className="line" />
        <p className="home-desc dark:text-white">
         Saptak Exterio specializes in manufacturing a wide array of premium outdoor products,
including Awnings, Water Fountains, Playground Equipment, Swimming Pools, and Tensile
Structures. Our commitment to excellence and innovation shines through in each of these
offerings. From providing shade and style with our awnings to adding elegance and tranquility
with our water fountains, creating fun-filled spaces with our playground equipment, and crafting
relaxing retreats with swimming pools, our products are meticulously designed and crafted to
elevate the aesthetics and functionality of outdoor spaces. With Saptak Exterio, you can trust in
top-notch quality and superior craftsmanship for all your outdoor needs.
        </p>
        <hr className="line" />
        <div className="map">
          <h3 className="dark:text-white">Location on Map</h3>
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14323.215815970414!2d91.75542165!3d26.1705135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a597fdd3eab3b%3A0xf895e2e4e0dcd414!2sUlubari%2C%20Guwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1696266581527!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <b className=" dark:text-white">Guwahati , Assam , India</b>
          <p className=" dark:text-white">It is like a home away from home.</p>
        </div>
        <br className="line" />
        <div className="host">
          <img src="/images/saptak_logo.png" />
          <div>
            <h2 className=" dark:text-white">Saptak Exterio</h2>
            <p className=" dark:text-white">
              <span>
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStarHalfAlt} className="icon" />
                <FontAwesomeIcon icon={farStar} className="icon" />
              </span>
              Response rate 100%
            </p>
          </div>
        </div>
        <Link href="/contact" className="contact-host dark:text-white">
          Contact Now
        </Link>
      </div>
    </>
  );
};

export default Page;
