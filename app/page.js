import Hero from "@/components/home/Hero"
import Hotel from "@/components/home/Hotel"
import Travel from "./travel/page.jsx"
import Footer from "@/components/footer/Footer.jsx"
import Company from "@/components/home/Company.jsx"
import Main from './example/page.jsx'

export default function Home() {
  return (
   <>
    <div className="main-content w-full px-[var(--margin-x)] pb-8 overflow-hidden">
  <Main/>
 {/* <Hero/> */}
 <Hotel/>
 <Travel/>
 <Company/>
 <Footer/>
 </div>
   </>
  )
}
