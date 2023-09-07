
import Hotel from "@/components/home/Hotel"
import Travel from "./travel/page.jsx"
import Company from "@/components/home/Company.jsx"
import Main from './example/page.jsx'
import Contact from "./contact/Cont.jsx"
import AboutUs from "./about/components/Aboutus.jsx"
import Testimonial from "@/components/testimonial/Testimonial.js"


export default function page() {
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

 
 </div>
   </>
  )
}
