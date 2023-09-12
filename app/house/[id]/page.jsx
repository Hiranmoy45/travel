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
          <p className="text-slate-700 dark:text-navy-100">
            2 guest &nbsp; &nbsp; 2 beds &nbsp; &nbsp; 1 bathroom
          </p>
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
          Guests are welcome to join the NCSN on activities such as Birdwatching
          and Hiking at an additional charge (which can be availed of at the
          premises) and learn about nature and the need to preserve it Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          consequatur, harum dolorem autem blanditiis rerum. Consectetur nihil
          numquam natus quo similique alias pariatur quis autem. Magnam optio,
          libero impedit doloribus totam sapiente quibusdam animi dolores harum
          consequatur nostrum, veritatis fugit corrupti nemo. Ratione blanditiis
          id debitis dolores numquam ullam animi non ipsam expedita minus nam,
          sequi temporibus exercitationem consectetur aut! Iste dolorem
          provident repudiandae ut possimus natus molestiae quidem, inventore
          repellat rerum consequuntur quisquam est numquam sit reprehenderit eos
          laudantium, accusamus similique. Ratione, quidem repellat nihil quis
          dignissimos necessitatibus esse? Rem quaerat ex animi provident ipsa
          harum magnam dignissimos sit..
        </p>
        <hr className="line" />
        <div className="map">
          <h3 className="dark:text-white">Location on Map</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7160.636081482584!2d91.74045119170589!3d26.186330508349954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5a25e55856b1%3A0x5e71de52f9b47851!2sPan%20Bazaar%2C%20Guwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1689797582230!5m2!1sen!2sin"
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
        <Link href="#" className="contact-host dark:text-white">
          Contact Host
        </Link>
      </div>
    </>
  );
};

export default Page;
