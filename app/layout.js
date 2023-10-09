// 'use client'
import './globals.css';

// import 'swiper/css';
import ClientOnly from "./Clientonly";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AppContextProvider from '@/context/AppContext';

import Header from '@/components/header/Header';
import Bookingmodel from "@/components/Modal/Bookingmodel.jsx"
import { Inter } from 'next/font/google';
import MobileNav from '@/components/header/MobileNav';
import Footer from '@/components/footer/Footer';

import GoogleAnalytics from './GoogleAnalytics';
// import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Saptak Exterio ',
  description: 'Saptak Exterio, one of Northeast’s leading most company deals in manufacturer of playground equipment, tensile structure, swimming pool, fountain, Awning, repairing pools, fountain, etc. We Manufacture high quality kids play equipments and gym equipment’s coated with PU and Synthetic Paint. Our Awning are most preferred and prominent awnings. These are designed and manufactured as per latest trends using quality tested raw materials.Our company is engage in designing and fabrication of tensile fabric structure for car parking, walkaway, stadium, swimming pool, badminton court etc, With fabric like Serge Ferrari. Saptak Exterio fountain rejuvenates and brings a touch of elegance to your interior as well as exterior as we have gain expertise in manufacturing both outdoor and indoor fountains. Saptak Exterio is also known for its innovative design and latest technology.',
};

export default function RootLayout({ children }) {


  return (
    <>
      <html lang="en" className=''>
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/10.0.4/swiper-bundle.css" />
      <GoogleAnalytics GA_TRACKING_ID="G-J5Y5DFD9PL" />
      
      </head>
        <body className={inter.className}>
          {/* enable for min side bar has-min-sidebar ,for sidebar open add is-sidebar-open*/}<ClientOnly>
            <AppContextProvider>
          <div className="is-header-blur">
            <div
              id="root"
              className="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900"
            >
              {/* All Sidebar */}
              {/* <Sidebar /> */}

              {/* App Header Wrapper */}
              <nav className="header before:bg-white dark:before:bg-navy-750 print:hidden">
                <Header />
              </nav>
                
              {/* <!-- Mobile Searchbar --> */}
              {/* <MobileSearchBar /> */}
              {/* This is Main Page */}
              {children}
              <MobileNav/>
              <MobileNav/>
              <Bookingmodel/>
              <ToastContainer />
            </div>
          </div>
        <Footer/>
          </AppContextProvider>
          </ClientOnly>
          {/* <script src="./node_modules/preline/dist/preline.js"></script> */}

        </body>
      </html>
    </>
  );
}
