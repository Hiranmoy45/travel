import Link from 'next/link'
import React from 'react'

const error = () => {
  return (
    <div class="grid w-full grow grid-cols-1 place-items-center">
    <div className="grid max-w-screen-lg grid-cols-1 place-items-center gap-12 p-6 lg:grid-cols-2 lg:gap-24">
  <div className="absolute p-6 opacity-20 lg:static lg:opacity-100">
    
    <img width={440} x-show="$store.global.isDarkModeEnabled" src="images/illustrations/penguins-dark.svg" alt="404 image" />
  </div>
  <div className="z-2 text-center lg:text-left">
    <p className="mt-4 text-7xl font-bold text-primary dark:text-accent lg:mt-0">
      404
    </p>
    <p className="mt-6 text-xl font-semibold text-slate-800 dark:text-navy-50 lg:mt-10 lg:text-3xl">
      Oops. This Page Not Found.
    </p>
    <p className="pt-2 text-slate-500 dark:text-navy-200 lg:text-lg">
      This page you are looking not available
    </p>
    <Link href="/">
    <button className="btn mt-10 h-11 bg-primary text-base font-medium text-white hover:bg-primary-focus hover:shadow-lg hover:shadow-primary/50 focus:bg-primary-focus focus:shadow-lg focus:shadow-primary/50 active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:hover:shadow-accent/50 dark:focus:bg-accent-focus dark:focus:shadow-accent/50 dark:active:bg-accent/90">
      Back To Home     
    </button>
    </Link>
  </div>
</div>
</div>
  )
}

export default error