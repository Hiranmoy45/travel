import React from 'react'
import { FaHouseUser } from "react-icons/fa";
import Link from 'next/link';
const MobileNav = () => {
    const activeLink = "pricing";

    const setActiveLink=(head)=>{
    
    }
  return (
    <>
      {/* mobile navigation  */}
      <nav className="fixed header-container lg:hidden bottom-0 left-0 right-0 z-20  sm:px-8 shadow-t w-full ">
        <div className="bg-white dark:bg-navy-700  sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
          {[
      { tab: "/about", label: "About",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
      { tab: "/travel", label: "Products" , d:"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" },
      { tab: "/about", label: "Wishlists",  d:"M19.594 8.406a4.752 4.752 0 010 6.718L12 21l-7.594-5.876a4.752 4.752 0 010-6.718 4.752 4.752 0 016.718 0 4.752 4.752 0 016.876 0z" },
      { tab: "/contact", label: "Contact Us" , d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" }
    ].map((item) => (
<>
<Link
              activeClass="active"
              href={item.tab}    key={item.tab}
             
              duration={1000}              
           
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "about"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent")
              }
            >

              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={item.d}
                />
              </svg>
              {item.label}
            </Link>
</>
    ))}
     
          </ul>
           {/* <div className='pb-1 pt-1 flex items-center justify-center  '>
      <button type="submit" className="bg-red-500 border-0 outline-none text-white px-6 py-3 w-72 rounded-lg text-lg md:text-base md:mt-10 md:mb-15 md:rounded-md">Check Availability</button>
      </div> */}
        </div>
      </nav>
    </>
  )
}

export default MobileNav