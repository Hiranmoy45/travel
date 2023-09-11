'use client'
import Bookingmodel from '@/components/Modal/Bookingmodel';
import { AppContext } from '@/context/AppContext';
import React, { useContext, useState } from 'react';

function App() {
  const {showModal1, setShowModal1}=useContext(AppContext);


  return (
    <div className="main-content w-full px-[var(--margin-x)] pb-8 overflow-hidden">
      <div>
        <button
          onClick={() => setShowModal1(true)}
          className="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          Origin Top
        </button>
       
      </div>

    
    </div>
  );
}

export default App;
