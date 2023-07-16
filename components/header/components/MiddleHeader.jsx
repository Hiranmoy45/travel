'use client'
import React , {useState} from 'react';
import Ping from './Ping';
const MiddleHeader = () => {
    const [activeTab,setActiveTab]=useState("home");
  
    const handleTabClick = (tab) => {
        setActiveTab(tab);
      };
     
  return (
    <>
     
      <div className="flex items-center space-x-2 ">
      {[
      { tab: "home", label: "Home" },
      { tab: "products", label: "Our Products" },
      { tab: "about", label: "About Us" },
      { tab: "contact", label: "Contact Us" }
    ].map((item) => (
        <>
        <a href="#"    key={item.tab}
        className={`btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5 relative ${
          activeTab === item.tab
            ? "border-primary dark:border-accent text-primary dark:text-accent-light"
            : "border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
        }`}
        onClick={() => handleTabClick(item.tab)}>
            
            {item.label}
            { activeTab === item.tab && 
          <Ping/> }
          
        </a>
        </>
   ))}


        </div>
      
    </>
  )
}

export default MiddleHeader