import React from 'react'
import Historycom from './components/Historycom';

const sectionsData = [
  {
    "id": 100,
   
    "iconColor": "text-secondary",
    "iconBackgroundColor": "bg-secondary/10 dark:bg-secondary-light/15",
    "title": "Founation",
    "description": ""
  },
   {
    "id":102,    
    "iconColor": "text-primary",
    "iconBackgroundColor": "bg-primary/10 dark:bg-accent-light/15",
    "title": "SwimmingPool",
    "description": ""
  },
  {
    "id":103,
    "iconColor": "text-success",
    "iconBackgroundColor": "bg-success/10 dark:bg-success/15",
    "title": "Tensile",
    "description": ""
  },
  {
    "id":104,
    "iconColor": "text-info",
    "iconBackgroundColor": "bg-info/10 dark:bg-info/15",
    "title": "Playground",
    "description": ""
  },
];
function page() {
  return (
    <>
    <Historycom sectionsData={sectionsData} current=""/>

    </>
  )
}

export default page
