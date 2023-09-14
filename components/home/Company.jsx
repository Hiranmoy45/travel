import React from "react";

const CompanyItem = ({ src, alt }) => (
  <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-navy-700">
    <img src={src} alt={alt} width={90} height={90} />
  </div>
);

const Company = () => {
  const companies = [
    { src: "/images/ClientLogos/1.jpg", alt: "company" },
    { src: "/images/ClientLogos/2.jpg", alt: "company" },
    { src: "/images/ClientLogos/3.png", alt: "company" },
    { src: "/images/ClientLogos/4.jpg", alt: "company" },
    { src: "/images/ClientLogos/5.jpg", alt: "company" },
    { src: "/images/ClientLogos/6.jpg", alt: "company" },
    { src: "/images/ClientLogos/7.png", alt: "company" },
    { src: "/images/ClientLogos/8.png", alt: "company" },
    { src: "/images/ClientLogos/9.jpg", alt: "company" },
    { src: "/images/ClientLogos/10.jpeg", alt: "company" },
    { src: "/images/ClientLogos/11.jpg", alt: "company" },
    { src: "/images/ClientLogos/12.png", alt: "company" },
    { src: "/images/ClientLogos/13.jpg", alt: "company" },
    { src: "/images/ClientLogos/14.png", alt: "company" },
    { src: "/images/ClientLogos/15.png", alt: "company" },
    { src: "/images/ClientLogos/16.jpg", alt: "company" },
    { src: "/images/ClientLogos/17.png", alt: "company" },
    { src: "/images/ClientLogos/18.png", alt: "company" },
    { src: "/images/ClientLogos/19.png", alt: "company" },
    { src: "/images/ClientLogos/20.jpg", alt: "company" },
    { src: "/images/ClientLogos/21.jpg", alt: "company" },
    { src: "/images/ClientLogos/22.jpg", alt: "company" },
    { src: "/images/ClientLogos/23.jpg", alt: "company" },
    { src: "/images/ClientLogos/24.jpg", alt: "company" },
    { src: "/images/ClientLogos/25.jpg", alt: "company" },
    
    // Add more companies here
  ];

  return (
    <>
      {/* Clients */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6 md:mb-12">
          <h2 className="text-xl font-semibold md:text-2xl md:leading-tight text-gray-800 dark:text-gray-200">
          Our Happy Clients
          </h2>
        </div>
        {/* End Title */}
        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 lg:gap-6">
          {companies.map((company, index) => (
            <CompanyItem key={index} src={company.src} alt={company.alt} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Company;
