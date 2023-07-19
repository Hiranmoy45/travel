import React from 'react'
import Card from './TravelCard';
import TravelCard from './components/TravelCard';
import TravelList from './components/TravelList';

const page = () => {
    const travelData = [
        {
          imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2022/8/NJ/LL/BV/127954530/commercial-fountain-construction-service-500x500.JPG',
          name: 'Commercial Fountain Construction Service',
          location: 'Guwahati',
          rating: '4.5',
        },
        {
          imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2022/8/GY/OP/XG/127954530/outdoor-playground-construction-services-500x500.jpg',
          name: 'Playground',
          location: 'PAN India',
          rating: '4.2',
        },
        {
          imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2022/8/RT/EV/ZZ/127954530/swimming-pool-water-treatment-500x500.jpeg',
          name: ' Structure	Light Gauge Steel Construction',
          location: '	PAN India',
          rating: '4.8',
        },
        {
          imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2023/4/298917939/ND/BN/SC/127954530/prefabricated-frp-swimming-pool-500x500.jpeg',
          name: 'Destination 4',
          location: 'Location 4',
          rating: '4.0',
        },
        {
          imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2022/8/PS/TQ/KL/127954530/commercial-fountain-construction-service-500x500.png',
          name: 'Destination 5',
          location: 'Location 5',
          rating: '4.6',
        },
        {
          imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2022/8/HA/TK/YS/127954530/water-fountain-500x500.png',
          name: 'Destination 6',
          location: 'Location 6',
          rating: '4.7',
        },
        {
          imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2022/8/LZ/TN/JF/127954530/water-fountain-500x500.jpg',
          name: 'Destination 7',
          location: 'Location 7',
          rating: '4.3',
        },
        {
          imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2022/8/VX/FR/IE/127954530/commercial-tensile-structure-construction-service-500x500.jpg',
          name: ' Structure	Light Gauge Steel Construction',
          location: 'PAN India',
          rating: '4.8',
        },
        {
          imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2022/8/VC/KG/NW/127954530/swimming-pool-water-treatment-500x500.jpeg',
          name: 'Destination 9',
          location: 'Location 9',
          rating: '3.9',
        },
        {
          imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2022/8/RY/ZJ/SP/127954530/swimming-pool-water-treatment-500x500.jpeg',
          name: 'Destination 7',
          location: 'Location 7',
          rating: '4.3',
        },
        {
          imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2022/8/OR/PT/BF/127954530/swimming-pool-water-treatment-500x500.JPG',
          name: 'Destination 8',
          location: 'Location 8',
          rating: '4.9',
        },
        {
          imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2022/8/RY/ZJ/SP/127954530/swimming-pool-water-treatment-500x500.jpeg',
          name: 'Destination 9',
          location: 'Location 9',
          rating: '3.9',
        },
      ];
      

  return (
  <>
      <div className="main-content w-full px-[var(--margin-x)] pb-8 overflow-hidden">
  <div className="flex items-center justify-between space-x-2 py-5">
    <h3 className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">
      Travel
    </h3>
    <div>
      <a href="#" className="border-b border-dashed border-current pb-0.5 font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70">Explore the world</a>
    </div>
  </div>
  <div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
    <div className="col-span-12 lg:col-span-8">
      <div className="flex items-center justify-between space-x-3 sm:space-x-5">
        <div className="flex w-full max-w-lg">
          <label className="relative flex w-full">
            <input className="form-input peer h-9 w-full rounded-l-lg bg-white px-3 py-2 shadow-soft ring-primary/50 placeholder:text-slate-400 focus:ring dark:bg-navy-700 dark:shadow-none dark:ring-accent/50 dark:placeholder:text-navy-300 lg:pl-9" placeholder="Location, Country or Destination..." type="text" />
            <span className="pointer-events-none absolute hidden h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent lg:flex">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.316 13.781l.73-.171-.73.171zm0-5.457l.73.171-.73-.171zm15.473 0l.73-.171-.73.171zm0 5.457l.73.171-.73-.171zm-5.008 5.008l-.171-.73.171.73zm-5.457 0l-.171.73.171-.73zm0-15.473l-.171-.73.171.73zm5.457 0l.171-.73-.171.73zM20.47 21.53a.75.75 0 101.06-1.06l-1.06 1.06zM4.046 13.61a11.198 11.198 0 010-5.115l-1.46-.342a12.698 12.698 0 000 5.8l1.46-.343zm14.013-5.115a11.196 11.196 0 010 5.115l1.46.342a12.698 12.698 0 000-5.8l-1.46.343zm-4.45 9.564a11.196 11.196 0 01-5.114 0l-.342 1.46c1.907.448 3.892.448 5.8 0l-.343-1.46zM8.496 4.046a11.198 11.198 0 015.115 0l.342-1.46a12.698 12.698 0 00-5.8 0l.343 1.46zm0 14.013a5.97 5.97 0 01-4.45-4.45l-1.46.343a7.47 7.47 0 005.568 5.568l.342-1.46zm5.457 1.46a7.47 7.47 0 005.568-5.567l-1.46-.342a5.97 5.97 0 01-4.45 4.45l.342 1.46zM13.61 4.046a5.97 5.97 0 014.45 4.45l1.46-.343a7.47 7.47 0 00-5.568-5.567l-.342 1.46zm-5.457-1.46a7.47 7.47 0 00-5.567 5.567l1.46.342a5.97 5.97 0 014.45-4.45l-.343-1.46zm8.652 15.28l3.665 3.664 1.06-1.06-3.665-3.665-1.06 1.06z" />
              </svg>
            </span>
          </label>
          <button className="btn h-9 rounded-l-none bg-primary px-3 font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90 lg:px-5">
            <span className="hidden lg:inline-flex">Search</span>
            <svg className="h-4.5 w-4.5 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
        <div className="flex">
          <button className="btn h-8 w-8 shrink-0 rounded-full p-0 text-slate-700 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} d="M22 6.5h-9.5M6 6.5H2M9 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM22 17.5h-6M9.5 17.5H2M13 20a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
            </svg>
          </button>
          <button className="btn h-8 w-8 shrink-0 rounded-full p-0 text-slate-700 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path d="M3 2.5h-.5v4H6.501V6L6.5 3v-.5H3zM3 10h-.5v4H6.501v-.5l-.001-3V10H3zm0 7.5h-.5v4H6.501V21L6.5 18v-.5H3zM6 7H3c-.551 0-1-.45-1-1V3c0-.55.449-1 1-1h3c.551 0 1 .45 1 1v3c0 .55-.449 1-1 1zm15.75-2.75a.25.25 0 110 .5h-12a.25.25 0 110-.5h12zM6 14.5H3c-.551 0-1-.45-1-1v-3c0-.55.449-1 1-1h3c.551 0 1 .45 1 1v3c0 .55-.449 1-1 1zm15.75-2.75a.25.25 0 110 .5h-12a.25.25 0 110-.5h12zM6 22H3c-.551 0-1-.45-1-1v-3c0-.55.449-1 1-1h3c.551 0 1 .45 1 1v3c0 .55-.449 1-1 1zm15.75-2.75a.25.25 0 110 .5h-12a.25.25 0 110-.5h12z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:grid-cols-2 sm:gap-5 lg:mt-6 lg:gap-6 xl:grid-cols-3">
        <Card/>
       
      </div>
    </div>
    <div className="col-span-12 lg:col-span-4">
      <div className="card px-4 pb-5 sm:px-5">
        <div className="flex items-center justify-between py-3">
          <h2 className="text-sm+ font-medium tracking-wide text-slate-700 dark:text-navy-100">
            Top Hotels
          </h2>
          <div x-data="usePopper({placement:'bottom-end',offset:4})"  className="inline-flex">
            <button x-ref="popperRef" className="btn -mr-1.5 h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </button>
            <div x-ref="popperRoot" className="popper-root" >
              <div className="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
                <ul>
                  <li>
                    <a href="#" className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Action</a>
                  </li>
                  <li>
                    <a href="#" className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Another Action</a>
                  </li>
                  <li>
                    <a href="#" className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Something else</a>
                  </li>
                </ul>
                <div className="my-1 h-px bg-slate-150 dark:bg-navy-500" />
                <ul>
                  <li>
                    <a href="#" className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Separated Link</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
        {travelData.slice(0, 6).map((destination, index) => (
        <TravelCard key={index} destination={destination} />
      ))}
        </div>
      </div>
      <div className="mt-4 sm:mt-5">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-medium tracking-wide text-slate-700 dark:text-navy-100">
            My Plan
          </h2>
          <div x-data="usePopper({placement:'bottom-end',offset:4})"  className="inline-flex">
            <button x-ref="popperRef" className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </button>
          
          </div>
        </div>
      <TravelList/>
      </div>
    </div>
  </div>
</div>
  </>
  )
}

export default page