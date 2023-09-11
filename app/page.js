'use client'
import Hotel from "@/components/home/Hotel"
import Travel from "./travel/page.jsx"
import Company from "@/components/home/Company.jsx"
import Main from './example/page.jsx'
import Contact from "./contact/Cont.jsx"
import AboutUs from "./about/components/Aboutus.jsx"
import Testimonial from "@/components/testimonial/Testimonial.js"
import Bookingmodel from "@/components/Modal/Bookingmodel.jsx"
import { useContext } from "react"
import { AppContext } from "@/context/AppContext.js"


export default function Page() {
const {showModal1}=useContext(AppContext);
  return (
   <>
  
    <div className="main-content w-full px-[var(--margin-x)] pb-8 overflow-hidden">
    <Main/>

 <Hotel/>
 <AboutUs/>
 <Travel/>
 <Contact/>
 
 <Company/>
 <Testimonial/>
 {showModal1 && (
       <Bookingmodel/>
        )}
 
 </div>
   </>
  )
}
