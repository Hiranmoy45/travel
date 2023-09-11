"use client";
import React, { useState, useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { toast } from "react-toastify";
function Bookingmodel() {
  const { showModal1, setShowModal1 , submit , loading } = useContext(AppContext);

  // Initialize state with multiple fields in one line
  const [formData, setFormData] = useState({
    firstName: "",
      lastName:"",
      number: "",
      email: "",
      message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!formData.firstName || !formData.number || !formData.email) {
      // Display a warning message if required fields are not filled
      toast.warn("Please fill out all required fields.");
      return;
    }

    // Call your submit function (replace submit with your actual function)
    submit(formData);

    // Reset form fields after submission
    setFormData({
      firstName: "",
      lastName:"",
      number: "",
      email: "",
      message: "",
    });
    
    // Close the modal
    // setShowModal1(false);
  };

  return (
    <>
     {showModal1 && (
        <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5"
      role="dialog"
    >
      <div
        className="absolute inset-0 bg-slate-900/60 transition-opacity duration-300"
        onClick={() => setShowModal1(false)}
      ></div>
      <div className="relative w-full max-w-lg origin-top rounded-lg bg-white transition-all duration-300 dark:bg-navy-700">
        <div className="flex justify-between rounded-t-lg bg-slate-200 px-4 py-3 dark:bg-navy-800 sm:px-5">
          <h3 className="text-base font-medium text-slate-700 dark:text-navy-100">
            Book Now
          </h3>
          <button
            onClick={() => setShowModal1(false)}
            className="btn -mr-1.5 h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4.5 w-4.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className="px-4 py-4 sm:px-5">
          <p>
          If you need help, please visit our Help Center(7896501172).
          </p>
          <div className="mt-4 space-y-4">
            <label className="block">
              <span>Name</span>
              <input
                className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"   
                placeholder="Name"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </label>
            <label className="block">
              <span>Contact Number</span>
              <input
                className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
             placeholder="Contact Number"
            type="number"
            name="number"
            value={formData.number}
            onChange={handleInputChange}
              />
            </label>
            <label className="block">
              <span>Email Address</span>
              <input
                className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </label>
            <label className="block">
              <span>Description:</span>
              <textarea
                rows="4"
                placeholder=" Enter Text"
                className="form-textarea mt-1.5 w-full resize-none rounded-lg border border-slate-300 bg-transparent p-2.5 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                name="message"
            value={formData.message}
            onChange={handleInputChange}
              ></textarea>
            </label>

            <div className="space-x-2 text-right">
              <button
                onClick={() => setShowModal1(false)}
                className="btn min-w-[7rem] rounded-full border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
              >
                Cancel
              </button>
              <button
                onClick={handleFormSubmit}
                className="btn min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
              >{loading?'Loading...':'Submit'}               
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
        )}
    </>
   
  );
}

export default Bookingmodel;
