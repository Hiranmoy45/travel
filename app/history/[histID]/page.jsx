'use client'
import React, { useState,useEffect } from 'react'
import {Founation,SwimmingPool,Tensile,Playground}from '@/data/Data'
import Historycom from '../components/Historycom';
const Page = ({params}) => {
    const [data, setData] = useState(null);
  useEffect(() => {
    if (params?.histID =='Founation') {
        setData(Founation);
      } else if (params?.histID == 'SwimmingPool') {
        setData(SwimmingPool);
      } else if (params?.histID == 'Tensile') {
        setData(Tensile);
      } else if (params?.histID =='Playground') {
        setData(Playground);
      } else {
         setData(null); 
      }
  }, [params?.histID]);
  if(!data){
    return ;
  }

  return (
    <div>
      <Historycom sectionsData={data} current={params?.histID}/>
    </div>
  )
}
export default Page
