'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import('preline')
const ProductModal = () => {
    useEffect(() => {
        import('preline')
      }, [])
  return (
    <>
    <div className="hs-dropdown relative inline-flex [--placement:top-left]">
  <button id="hs-dropup" type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md  font-medium  text-gray-700 shadow-sm align-middle  focus:outline-none transition-all text-sm  dark:hover:bg-slate-800 dark:border-gray-700 dark:text-white dark:hover:text-white  cursor-pointer">
    Products
    <svg className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    </svg>
  </button>
  <div className="hs-dropdown-menu w-72 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700" aria-labelledby="hs-dropup">
    <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="/house/1">
    Awnings & Pergoluxe
    </Link>
    <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="/house/6">
    Water Fountain
    </Link>
    <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="/house/12">
    Playground Equipment
    </Link>
    <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="/house/10">
    Swimming Pool
    </Link>
    <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="/house/9">
    Tensile membrane structure
    </Link>
  </div>
</div>
    </>
  )
}

export default ProductModal