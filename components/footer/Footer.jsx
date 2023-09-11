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
            <Link href="#" className="hover:underline">Twitter</Link>
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
            <a href="#" className="hover:underline">Licensing</a>
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
            <Link href="https://drive.google.com/file/d/19NmS2RDb1Vxg0YnErzQoISSp2u06LjKq/view?usp=sharing" target="_blank" className="hover:underline">saptak Brochure</Link>
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
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clipRule="evenodd" />
          </svg>
          <span className="sr-only">Instagram</span>
        </Link>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer