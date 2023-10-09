"use client";
import React, { useState, useContext } from "react";
import Tab from "./Tab";
import { AppContext } from "@/context/AppContext";
const Notificmodel = () => {
  const [activeTab, setActiveTab] = useState("tabAll");
  const { showModal2, setShowModal2 } = useContext(AppContext);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      {showModal2 && (
        <>
         
          <div
            className="popper-root right-0 md:right-1/3 top-14 show "
            x-ref="popperRoot"
            role="dialog"
          >
            <div
              className={`popper-box mx-4 mt-1 flex max-h-[calc(100vh-6rem)] w-[calc(100vw-2rem)] flex-col rounded-lg border border-slate-150 bg-white shadow-soft dark:border-navy-800 dark:bg-navy-700 dark:shadow-soft-dark sm:m-0 sm:w-80`}
            >
              <div className="rounded-t-lg bg-slate-100 text-slate-600 dark:bg-navy-800 dark:text-navy-200">
                <div className="flex items-center justify-between px-4 pt-2">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-medium text-slate-700 dark:text-navy-100">
                      History
                    </h3>
                    <div className="badge h-5 rounded-full bg-primary/10 px-1.5 text-primary dark:bg-accent-light/15 dark:text-accent-light">
                      26
                    </div>
                  </div>
                  <button className="flex items-center justify-center -mr-1.5 h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"  onClick={() => setShowModal2(false)}>
                
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4.5 w-4.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        id="primary"
                        d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
                        
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="is-scrollbar-hidden flex shrink-0 overflow-x-auto px-3">
                  {[
                    { tab: "tabAll", label: "Founation" },
                    { tab: "tabAlerts", label: "Swimming Pool" },
                    { tab: "tabEvents", label: "Playground" },
                    { tab: "tabLogs", label: "Tensile" },
                  ].map((item) => (
                    <button
                      key={item.tab}
                      className={`btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5 ${
                        activeTab === item.tab
                          ? "border-primary dark:border-accent text-primary dark:text-accent-light"
                          : "border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                      }`}
                      onClick={() => handleTabClick(item.tab)}
                    >
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="tab-content flex flex-col overflow-hidden">
                <Tab activeTab={activeTab} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Notificmodel;
