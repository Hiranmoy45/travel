'use client'
import React , {useState,useEffect, useContext} from "react";

import Rightheaderbutton from "./components/Rightheaderbutton";
import MiddleHeader from "./components/MiddleHeader";
import { AppContext } from "@/context/AppContext";
import Link from "next/link";


const Header = () => {
  const {darkMode}=useContext(AppContext);
  const [isScreenSizeLessThan800, setScreenSizeLessThan800] = useState(false);
  const [isScreenSizeLessThan650, setScreenSizeLessThan650] = useState(false);

  useEffect(() => {
    // Function to check the screen size and update the variable
    function checkScreenSize() {
      setScreenSizeLessThan800(window.innerWidth < 800);
      setScreenSizeLessThan650(window.innerWidth < 650);
    }

    // Call the function to set the initial value
    checkScreenSize();

    // Add event listener to update screen size on window resize
    window.addEventListener("resize", checkScreenSize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []); // Empty dependency array ensures this effect runs only on mount and unmount
  const handleMailClick = () => {
    // Replace 'recipient@example.com' with the email address you want to send the email to
    window.location.href = 'mailto:saptakexterio@gmail.com';
  };
  return (
    <>

      <div className="header-container relative flex w-full bg-white dark:bg-navy-700 print:hidden">
        {/* Header Items */}
        <div className="flex w-full items-center justify-between">
          {/* Left: Sidebar Toggle Button */}
          <div className="h-7">
            <Link href="/">
            <button className="menu-toggle ml-0.5 flex h-7  flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80">
            <img className="h-14 w-20" src={`${darkMode?'images/saptakdark-logo.png':'images/saptak_logo.png'}`} alt=""/>
            </button>
            </Link>
          </div>
          {!isScreenSizeLessThan800 && <MiddleHeader/>}
          
          {/* Right: Header buttons */}
          <Rightheaderbutton/>

          {!isScreenSizeLessThan650 && (<button
    class="btn space-x-2 bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90" onClick={handleMailClick}
  >
   <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
    <span>Send Email</span>
         </button>)}
        </div>
      </div>
    </>
  );
};

export default Header;
