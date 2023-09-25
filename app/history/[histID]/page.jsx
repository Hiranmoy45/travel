'use client'
import React, { useState,useEffect } from 'react'
import {Founation,SwimmingPool,Tensile,Playground}from '@/data/Data'
import Historycom from '../components/Historycom';
const page = ({params}) => {
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
        // Handle other cases if needed
        setData(null); // Reset data to null if histID doesn't match any condition
      }
  }, [params?.histID]);
  if(!data){
    return ;
  }
  console.log(data);
  return (
    <div>
      <Historycom sectionsData={data} current={params?.histID}/>
    </div>
  )
}
export default page
