import Hero from "@/components/home/Hero"
import Hotel from "@/components/home/Hotel"

export default function Home() {
  return (
   <>
    <div className="main-content w-full px-[var(--margin-x)] pb-8 overflow-hidden">
 <Hero/>
 <Hotel/>
 </div>
   </>
  )
}
