'use client'
import React , {useContext, useState} from 'react'
import { FaHouseUser } from "react-icons/fa";
import Link from 'next/link';
import { AppContext } from '@/context/AppContext';
import ProductModal from './components/ProductModal';
const MobileNav = () => {
    const [activeLink,setActiveLink]=useState('')
    
  return (
    <>
     
      <nav className="fixed header-container lg:hidden bottom-0 left-0 right-0 z-20  sm:px-8 shadow-t w-full ">
        <div className="bg-white dark:bg-navy-700  sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
          <Link
              activeClass="active"
              href='/about'    
             
              duration={1000}              
           
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "about"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent")
              }
              onClick={()=>setActiveLink('about')}
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
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              About
            </Link>
            <ProductModal/>
          {[
      { tab: "/contact", label: "Contact Us" , d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
      { tab: "/history", label: "History" , d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" }
    ].map((item) => (
<>
<Link
              activeClass="active"
              href={item.tab}    key={item.tab}
             
              duration={1000}              
           
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === item.tab
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent")
              }
              onClick={()=>setActiveLink(item.tab)}
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
          
        </div>
      </nav>
    </>
  )
}

export default MobileNav