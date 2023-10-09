"use client";
import React, { useState, useEffect, useContext } from "react";

import { toast } from "react-toastify";
import { AppContext } from "@/context/AppContext";
const  Hard= ({ id, imageSrc, name, location, rating }) => {
    const { data, setData, setShowModal1 } = useContext(AppContext);
  const [isDataSaved, setIsDataSaved] = useState(false);

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem("cards")) || [];
    setData(existingData);

    const specificDataItem = existingData.find((item) => item.id === id);
    setIsDataSaved(!!specificDataItem);
  }, [id]);

  const handleCardClick = () => {
    const specificDataItem = data.find((item) => item.id === id);
    const newData = specificDataItem
      ? data.filter((item) => item.id !== id)
      : [...data, { id, imageSrc, name, location, rating }];

    setData(newData);
    setIsDataSaved(!specificDataItem);
    localStorage.setItem("cards", JSON.stringify(newData));

    toast.success(specificDataItem ? "Removed" : "Added successfully");
  };

  return (
    <>
    <button
            className="flex items-center justify-center h-7 w-7 rounded-full bg-black/20 p-0 hover:bg-black/30 focus:bg-black/30"
            onClick={handleCardClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4.5 w-4.5 text-white "
              fill={`${isDataSaved ? "red" : "none"}`}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
    </>
  )
}

export default Hard