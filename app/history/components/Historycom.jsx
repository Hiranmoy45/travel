import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHistory} from '@fortawesome/free-solid-svg-icons';
const Historycom = ({sectionsData ,current}) => {
   

  return (

    <>
    <div className="main-content w-full px-[var(--margin-x)] pb-8 overflow-hidden">
    <div className="flex items-center space-x-4 py-5 lg:py-6">
  <h2 className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">
    Menu
  </h2>
  <div className="h-full py-1 sm:flex">
    <div className="h-full w-px bg-slate-300 dark:bg-navy-600" />
  </div>
  <ul className="flex-wrap items-center space-x-2 flex">
    <li className="flex items-center space-x-2">
      <Link className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent" href="/history">History Page</Link>
      <svg x-ignore xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </li>
    <li>{current}</li>
  </ul>
</div>
       <section className="text-gray-600 body-font">
      <div className="container px-5  mx-auto">
        <div className="flex flex-col text-center w-full">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white">{current || 'Our Client Work Done'}</h1>
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Our Client Work Done</h2>
        
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
        </div>
        
        <div class="max-w-[85rem] py-10 lg:py-14 mx-auto">
 
  <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
   
          {sectionsData.map((section, index) => (
            <Link className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800" href={`${!current?`/history/${section.title}`:`/../gallary/${section.id}`}`} key={index}>
            <div className="p-4 md:p-5">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
              
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${section.iconBackgroundColor}`}>
            <FontAwesomeIcon icon={faHistory} className={`h-4 w-4 ${section.iconColor} `} />
          </div>
                  <div className="ml-3">
                    <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                    {section.title}, {section.description}
                    </h3>
                  </div>
                </div>
                <div className="pl-3">
                  <svg className="w-3.5 h-3.5 text-gray-500" width={16} height={16} viewBox="0 0 16 16" fill="none">
                    <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
          ))}
        </div>
        </div>
       
      </div>
    </section>
    </div>
    </>
  )
}

export default Historycom
