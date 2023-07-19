import './globals.css';
import ClientOnly from "./Clientonly";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AppContextProvider from '@/context/AppContext';

import Header from '@/components/header/Header';

import { Inter } from 'next/font/google';
import MobileNav from '@/components/header/MobileNav';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Travel ',
  description: 'This is Travel',
};

export default function RootLayout({ children }) {


  return (
    <>
      <html lang="en" className=''>

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
              
              <ToastContainer />
            </div>
          </div>
        
          </AppContextProvider>
          </ClientOnly>
        </body>
      </html>
    </>
  );
}
