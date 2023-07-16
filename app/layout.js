'use client'
import { useEffect } from 'react';
import './globals.css';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import Header from '@/components/header/Header';
// import Sidebar from '@/components/sidebar/Sidebar';
// import MobileSearchBar from '@/components/MobileSearchBar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Dashboard',
  description: 'This is Dashboard',
};

export default function RootLayout({ children }) {
  
 
  useEffect(() => {
  
      toast.success('Logout Successful!', {
        theme: "dark",
      });

  }, []);

  return (
    <>
      <html lang="en" className='dark'>

<body className={inter.className}>
      {/* enable for min side bar has-min-sidebar ,for sidebar open add is-sidebar-open*/}
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
          <ToastContainer />
        </div>
      </div>
      </body>
    </html>
    </>
  );
}
