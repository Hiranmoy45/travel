'use client'
import { createContext, useState, useEffect, useRef } from "react";



//step1
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('darkMode') === 'true' // Check localStorage for initial value
  );

 
  //Total Contacts 




  //data filling pending
  const value = {
    darkMode, setDarkMode,
  };

  //step2
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
