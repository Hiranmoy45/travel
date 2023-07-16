import React from 'react';

const TravelCard = ({ destination }) => {
  return (
    <div className="flex items-center justify-between space-x-2">
      <div className="flex items-center space-x-4">
        <img className="mask is-squircle h-12 w-12 object-cover object-center" src={destination.imageSrc} alt="image" />
        <div className="space-y-1">
          <a href="#" className="line-clamp-1 font-medium text-slate-600 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light">
            {destination.name}
          </a>
          <div className="flex items-center space-x-3 text-xs">
            <p className="flex items-center space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-slate-400 dark:text-navy-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="line-clamp-1">{destination.location}</span>
            </p>
            <p className="flex shrink-0 items-center space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="h-3.5 w-3.5 text-slate-400 dark:text-navy-300" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.948 4.29l1.643 3.169c.224.44.82.864 1.325.945l2.977.477c1.905.306 2.353 1.639.98 2.953l-2.314 2.233c-.392.378-.607 1.107-.486 1.63l.663 2.763c.523 2.188-.681 3.034-2.688 1.89l-2.791-1.593c-.504-.288-1.335-.288-1.848 0l-2.791 1.594c-1.997 1.143-3.21.288-2.688-1.89l.663-2.765c.12-.522-.094-1.251-.486-1.63l-2.315-2.232c-1.362-1.314-.924-2.647.98-2.953l2.978-.477c.495-.081 1.092-.504 1.316-.945l1.643-3.17c.896-1.719 2.352-1.719 3.239 0z" />
              </svg>
              <span>{destination.rating}</span>
            </p>
          </div>
        </div>
      </div>
      <p className="shrink-0">
        <span className="text-base font-medium text-slate-700 dark:text-navy-100">$100</span>
        <span className="text-xs text-slate-400 dark:text-navy-300">/day</span>
      </p>
    </div>
  );
};

export default TravelCard;
