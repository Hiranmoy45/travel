'use client'
import { createContext, useState, useEffect, useRef } from "react";



//step1
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  
  const [theme,setTheme]=useState(false);

 
  //Total Contacts 




  //data filling pending
  const value = {
    theme,setTheme,
  };

  //step2
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
