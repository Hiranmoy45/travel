'use client'
import React ,{useState , useEffect} from "react";
import "../index.css";
import Link from "next/link";

 import travelData from "@/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faHome,
  faPaintBrush,
  faMapMarkerAlt,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import Slider from "./Slider";
const Page = ({params}) => {
   
    console.log(params?.id);
    const [data, setData] = useState(null);

  

    // Simulate fetching the data based on the provided ID
    useEffect(() => {
      const item = travelData.find((item) => item.id == params?.id);
      setData(item);
    }, [params?.id]);
  
    if (!data) {
      return <div>Loading...</div>;
    }
    console.log(data);
  return (
    <>
      <div className="main-content w-full px-[var(--margin-x)] pb-8 overflow-hidden house-details">

        <div className="house-title ">
          <h1 className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl ">
            Wenge House
          </h1>
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
        <div class="gallery">
          <div className="gallery-img-1 card "> 
            
          <Slider data={data}/>
        
          </div>
          <div>
            <img src={data.imageSrc} alt="gallery" />
          </div>
          <div>
            <img src={data.imageSrc} alt="gallery" />
          </div>
          <div>
            <img src={data.imageSrc} alt="gallery" />
          </div>
          <div>
            <img src={data.imageSrc} alt="gallery" />
          </div>
        </div>
        <div className="small-details">
          <h2 className="text-xl text-slate-800 dark:text-navy-50">Entire rental unit hosted by Brandon</h2>
          <p className="text-slate-700 dark:text-navy-100">2 guest &nbsp; &nbsp; 2 beds &nbsp; &nbsp; 1 bathroom</p>
          <h4 className="text-2xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl ">$ 100/day</h4>
        </div>
        <hr className="line" />
        <form className="check-form dark:bg-navy-700 dark:text-white">
          <div>
            <label>Check-in</label>
            <input type="text" placeholder="Add Date" />
          </div>
          <div>
            <label>Check-out</label>
            <input type="text" placeholder="Add Date" />
          </div>
          <div className="guest-field">
            <label>Guest</label>
            <input type="text" placeholder="2 guest" />
          </div>
          <button type="submit">Check Availability</button>
        </form>
        <ul className="details-list">
          <li>
            <FontAwesomeIcon icon={faHome} className="fa" />
            Entire Home
            <span>You will have the entire flat for you.</span>
          </li>

          <li>
            <FontAwesomeIcon icon={faPaintBrush} className="fa" />
            Enhanced Clean
            <span>This host has committed to staybnb's cleaning process.</span>
          </li>

          <li>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="fa" />
            Great Location
            <span>90% of recent guests gave the location a 5 star rating.</span>
          </li>

          <li>
            <FontAwesomeIcon icon={faHeart} className="fa" />
            Great Check-in Experience
            <span>
              100% of recent guests gave the check-in process a 5 star rating.
            </span>
          </li>
        </ul>
        <hr className="line" />
        <p className="home-desc">
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
          <h3>Location on Map</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7160.636081482584!2d91.74045119170589!3d26.186330508349954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5a25e55856b1%3A0x5e71de52f9b47851!2sPan%20Bazaar%2C%20Guwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1689797582230!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <b>Guwahati , Assam , India</b>
          <p>It's like a home away from home.</p>
        </div>
        <br className="line" />
        <div className="host">
          <img src="images/100x100.png" />
          <div>
            <h2>Hosteďby Brandon</h2>
            <p>
              <span>
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStarHalfAlt} className="icon" />
                <FontAwesomeIcon icon={farStar} className="icon" />
              </span>{" "}
              &nbsp; &nbsp; 245 reviews &nbsp; &nbsp; Response rate 100% &nbsp;
              & nbsp; Response time : 60 min
            </p>
          </div>
        </div>
        <Link href="#" className="contact-host">
          Contact Host
        </Link>
      </div>

    </>
  );
};

export default Page;
