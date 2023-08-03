import { AppContext } from "@/context/AppContext";
import React, { useContext, useState } from "react";


const Form = (data) => {
  const { submit, loading } = useContext(AppContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

   

    submit(formData);

    // Reset form fields after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      number: "",
      message: "",
    });
  };

  return (
    <>
      <form className="check-form dark:bg-navy-700 dark:text-white" onSubmit={handleFormSubmit}>
        <div>
          <label>Name</label>
          <input 
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="Enter Name" 
          required
          />
        </div>
        <div>
          <label>Phone</label>
          <input 
         type="text"
         name="number"
         value={formData.number}
         onChange={handleInputChange}
         placeholder="Enter Phone" 
         required
           />
        </div>
        <div className="guest-field">
          <label>Email</label>
          <input 
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter Email Id" 
          required
          />
        </div>
        <button type="submit" >{loading? 'Loading...':'Check Availability'}</button>
      </form>
    </>
  );
};

export default Form;
