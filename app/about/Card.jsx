import React from 'react'

const Card = ({ icon, title, description }) => {
    return (
      <>
        <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
          <div className="flex items-center gap-x-4 mb-3">
            <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
              {icon}
            </div>
            <div className="flex-shrink-0">
              <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                {title}
              </h3>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </>
    );
  };

export default Card