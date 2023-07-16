import React from 'react';

const tripData = [
  {
    title: 'Picnic on forest',
    date: '22 May - 28 May',
    imageSrc: 'https://lineone.piniastudio.com/images/travel/picnic-1.jpg',
    avatars: ['images/100x100.png', 'images/100x100.png', 'images/100x100.png'],
  },
  {
    title: 'Picnic with Family',
    date: '12 Jun - 16 Jun',
    imageSrc: 'https://lineone.piniastudio.com/images/travel/picnic-2.jpg',
    avatars: ['images/100x100.png', 'images/100x100.png', 'images/100x100.png'],
  },
  {
    title: 'Turtaruga campy',
    date: '03 Mar - 05 Mar',
    imageSrc: 'https://lineone.piniastudio.com/images/travel/climber-man.jpg',
    avatars: ['images/100x100.png', 'images/100x100.png', 'images/100x100.png'],
  },
  {
    title: 'Gioc waterfall',
    date: '08 Aug - 12 Aug',
    imageSrc: 'https://lineone.piniastudio.com/images/travel/picnic-3.jpg',
    avatars: ['images/100x100.png', 'images/100x100.png', 'images/100x100.png'],
  },
];

const TripCard = ({ title, date, imageSrc, avatars }) => (
  <div className="card p-2">
    <div className="flex space-x-4">
      <img className="h-18 w-18 rounded-lg object-cover object-center" src={imageSrc} alt="image" />
      <div>
        <a href="#" className="font-medium text-slate-700 outline-none transition-colors hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light">
          {title}
        </a>
        <p className="flex items-center space-x-1.5 text-xs">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-slate-400 dark:text-navy-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="line-clamp-1">{date}</span>
        </p>
        <div className="mt-2 flex -space-x-2">
          {avatars.map((avatarSrc, index) => (
            <div key={index} className="avatar h-6 w-6 hover:z-10">
              <img className="rounded-full ring-2 ring-white dark:ring-navy-700" src={avatarSrc} alt="avatar" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const TravelList = () => {
  return (
    <div className="mt-3 space-y-4">
      {tripData.map((trip, index) => (
        <TripCard key={index} {...trip} />
      ))}
    </div>
  );
};

export default TravelList;
