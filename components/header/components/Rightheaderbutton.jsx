import React from 'react'

import Mains from './Mains'
import Notification from './Notification';
const Rightheaderbutton = () => {
 
   
  return (
    <>
    <div className="-mr-1.5 flex items-center space-x-2">
         
            <Mains/>
            {/* Dark Mode Toggle */}
          
            {/* Notification*/}
            <Notification/>
          </div>
    </>
  )
}

export default Rightheaderbutton