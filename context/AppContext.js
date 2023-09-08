'use client'
import { createContext, useState, useEffect, useRef } from "react";
import contactUsEmail from "@/components/template/contact";
import { toast } from 'react-toastify';

//step1
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('darkMode') === 'true' // Check localStorage for initial value
  );
  const [loading,setLoading] =useState(false);
  const [data, setData] = useState([]);
 
 const submit=(formData)=>{
  setLoading(true);
    async function sendEmail(formData) {
      const { firstName, lastName, email, message ,number } = formData;
     
   
      
      const emailData = {
        name: firstName,
        email: email, // Replace with the recipient's email address
         // Replace with the actual message
        template: contactUsEmail(firstName, lastName, email, message ,number),
      };
    
      try {
        const response = await fetch('/api/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(emailData),
        });
    
        if (!response.ok) {
          // Handle the error if the response status is not okay (e.g., 4xx or 5xx)
          const errorData = await response.json();
          toast.warn('Please Check your email Id', {
          
            theme: darkMode ? 'dark' : 'light',
            });
          throw new Error(errorData.error || 'Failed to send email');
        }
       
        toast.success('Email send successfully', {
          
          theme: darkMode ? 'dark' : 'light',
          });
        const responseData = await response.json();
        // Output the response message
      } catch (error) {
        console.log('Error:', error.message);
      }
      setLoading(false)
    }
    // toast("Wow so easy!")
    // Call the sendEmail function to trigger the POST request
    sendEmail(formData);

 }
  //Total Contacts 




  //data filling pending
  const value = {
    darkMode, setDarkMode,submit,loading,data, setData,
  };

  //step2
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
