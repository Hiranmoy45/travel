'use client'
import React,{useState , useEffect} from 'react'
import TravelCard from '../TravelCard';
import { newtravelData ,images} from '@/data/Data';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

const Page = ({params}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };
  // Simulate fetching the data based on the provided ID
  useEffect(() => {
    setLoading(true);
    if(params?.id<100){
    const item = newtravelData.find((item) => item.id == params?.id);
    setData(item);
    setLoading(false);
  }else{
    const item = images.find((item) => item.id == params?.id);
    setData(item);
    setLoading(false);
  }
    
  }, [params?.id]);

  if (loading) {
    return <div className="main-content w-full px-[var(--margin-x)] pb-8 overflow-hidden">Loading...</div>;
  }
  if (!data) {
    return <div className="main-content w-full px-[var(--margin-x)] pb-8 overflow-hidden ">
      <section className="bg-white dark:bg-gray-900 ">
  <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
    <div className="flex flex-col items-center max-w-sm mx-auto text-center">
      <p className="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
      </p>
      <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Data not found</h1>
      <p className="mt-4 text-gray-500 dark:text-gray-400">The Data you are looking for does not exist. Here are some helpful links</p>
      <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
        <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700" onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
          </svg>
          <span>Go back</span>
        </button>
        <Link href="/">
        <button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
          Take me home
        </button>
        </Link>
      </div>
    </div>
  </div>
</section>
    </div>;
  }

  return (
  <>
      <div className="main-content w-full px-[var(--margin-x)] pb-8 overflow-hidden">
  <div className="flex items-center justify-between space-x-2 py-5">
    <h3 className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">
      Gallery
    </h3> 
    <div>
    <button className="border-b border-dashed border-current pb-0.5 font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70" onClick={handleClick} >Go Back</button>
    </div>
  </div>
  <div className="grid gap-4 sm:gap-5 lg:gap-6">
    <div className="col-span-12 lg:col-span-8">
 
      <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:grid-cols-2 sm:gap-5 lg:mt-6 lg:gap-6  md:grid-cols-3 xl:grid-cols-4">
      {data.imageSrc.map((image, index) => (
          <TravelCard travelData={image} key={index}/>
        ))}
        
       
      </div>
    </div>
 
  </div>

</div>
  </>
  )
}

export default Page