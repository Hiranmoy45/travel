"use client";
import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Ping from "./Ping";
import { AppContext } from "@/context/AppContext";

const MiddleHeader = () => {
  const [activeTab, setActiveTab] = useState("/");
  const {showModal2, setShowModal2}=useContext(AppContext)
  useEffect(() => {
    const pathName = location.pathname;
    setActiveTab(pathName);
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="flex items-center space-x-2 ">
        {[
          { tab: "/", label: "Home" },
          { tab: "/travel", label: "Our Products" },
          { tab: "/about", label: "About Us" },
          { tab: "/contact", label: "Contact Us" },
          // { tab: "/history", label: "History" },
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
     <button
              
              className={`btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5 relative ${
                showModal2
                  ? "border-primary dark:border-accent text-primary dark:text-accent-light"
                  : "border-transparent block  text-gray-800 dark:text-white hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
              }`}
              onClick={() => setShowModal2(true)}
              passHref
            >
              History
              {showModal2 && <Ping />}
            </button>
      </div>
    </>
  );
};

export default MiddleHeader;
