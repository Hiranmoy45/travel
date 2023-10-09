import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (

<footer className="bg-white dark:bg-navy-900">
  <div className="mx-auto w-full max-w-screen-xl">
    <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
      <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Saptak Exterio</h2>
        <ul className="text-gray-500 dark:text-gray-400 font-medium">
          <li className="mb-4">
            <Link href="/about" className=" hover:underline">About</Link>
          </li>
          <li className="mb-4">
            <Link href="/travel" className="hover:underline">Our Products</Link>
          </li>
          <li className="mb-4">
            <Link href="/fabourite" className="hover:underline">favorites</Link>
          </li>
          <li className="mb-4">
            <Link href="/contact" className="hover:underline">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
        <ul className="text-gray-500 dark:text-gray-400 font-medium">
          <li className="mb-4">
            <Link href="https://www.facebook.com/profile.php?id=100094084502904" target="_blank" className="hover:underline">Facebook</Link>
          </li>
          <li className="mb-4">
            <Link href="https://www.instagram.com/saptakexterio/" target="_blank" className="hover:underline">Instagram</Link>
          </li>
          <li className="mb-4">
            <Link href="mailto:saptakexterio@gmail.com" className="hover:underline">Email</Link>
          </li>
          <li className="mb-4">
            <Link href="tel:7896501172 " className="hover:underline">Call Now</Link>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
        <ul className="text-gray-500 dark:text-gray-400 font-medium">
          <li className="mb-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
          </li>
         
          <li className="mb-4">
            <a href="#" className="hover:underline">Terms &amp; Conditions</a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
        <ul className="text-gray-500 dark:text-gray-400 font-medium">
          <li className="mb-4">
            <Link href="https://drive.google.com/file/d/19NmS2RDb1Vxg0YnErzQoISSp2u06LjKq/view?usp=sharing" target="_blank" className="hover:underline">Brochure</Link>
          </li>
          <li className="mb-4">
            <Link href="https://drive.google.com/file/d/1e_toWUx2LTXMA4aDd7bEsV0XlJ959uB9/view?usp=sharing" target="_blank" className="hover:underline">Playground</Link>
          </li>
          <li className="mb-4">
            <Link href="https://drive.google.com/file/d/1AvReX0cRxOJgF0N5ANX2-tTjTW5CCa03/view?usp=sharing" target="_blank" className="hover:underline">swimming pools</Link>
          </li>
         
        </ul>
      </div>
    </div>
    <div className="px-4 py-6 bg-gray-100 dark:bg-navy-900 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a href="https://flowbite.com/">Saptakexterio</a>. All Rights Reserved.
      </span>
      <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
        <Link href="https://www.facebook.com/profile.php?id=100094084502904" target="_blank" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
            <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
          </svg>
          <span className="sr-only">Facebook page</span>
        </Link>
       
      
        <Link href="https://www.instagram.com/saptakexterio/" target="_blank" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
        <svg fill="#000000" className='w-4 h-4' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"/></svg>
          <span className="sr-only">Instagram</span>
        </Link>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer