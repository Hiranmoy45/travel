"use client";
import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Ping from "./Ping";
import { AppContext } from "@/context/AppContext";
import Notificmodel from "./Notificmodel";
import ProductModal from "./ProductModal";
import('preline')
const MiddleHeader = () => {
  const [activeTab, setActiveTab] = useState("/");
  const {showModal2, setShowModal2}=useContext(AppContext)
  useEffect(() => {
    const pathName = location.pathname;
    setActiveTab(pathName);
    import('preline')
  }, []);
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="flex items-center space-x-2 ">
      <Link
              href='/'
              
              className={`btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5 relative ${
                activeTab === '/home'
                  ? "border-primary dark:border-accent text-primary dark:text-accent-light"
                  : "border-transparent block  text-gray-800 dark:text-white hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
              }`}
              onClick={() => handleTabClick('/home')}
              passHref
            >
              Home
              {activeTab === '/home' && <Ping />}
            </Link>
         <ProductModal/>
        {[
          { tab: "/about", label: "About Us" },
          { tab: "/contact", label: "Contact Us" },
          { tab: "/history", label: "Our Works" },
        ].map((item, index) => (
          <>
            <Link
              href={item.tab}
              key={index}
              className={`btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5 relative ${
                activeTab === item.tab
                  ? "border-primary dark:border-accent text-primary dark:text-accent-light"
                  : "border-transparent block  text-gray-800 dark:text-white hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
              }`}
              onClick={() => handleTabClick(item.tab)}
              passHref
            >
              {item.label}
              {activeTab === item.tab && <Ping />}
            </Link>
          </>
        ))}
    
      </div>
    </>
  );
};

export default MiddleHeader;
