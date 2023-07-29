import React from "react";
import Card from "./Card";

const Aboutus = () => {
  const cardsData = [
    {
      icon: (
        <svg
          className="w-6 h-6 text-blue-600 dark:text-blue-400"
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z" />
        </svg>
      ),
      title: "Nature of Business",
      description:
        "The business operates by offering various services to cater to customer needs.(Service Provider)",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 128 128"
          id="group"
          className="w-6 h-6 text-blue-600 dark:text-blue-400"
          width={16}
          height={16}
          fill="currentColor"
        >
          <path d="M79.23535,73.30438A19.13148,19.13148,0,0,1,75.6189,77H76.25A10.762,10.762,0,0,1,87,87.75V113H41V87.75A10.762,10.762,0,0,1,51.75,77h.6311a19.13148,19.13148,0,0,1-3.61646-3.69562A14.77463,14.77463,0,0,0,37,87.75v25.9751A3.27877,3.27877,0,0,0,40.2749,117H87.7251A3.27877,3.27877,0,0,0,91,113.7251V87.75A14.77463,14.77463,0,0,0,79.23535,73.30438Z"></path>
          <path d="M49 62A15 15 0 1 0 64 47 15.017 15.017 0 0 0 49 62zM64 51A11 11 0 1 1 53 62 11.01245 11.01245 0 0 1 64 51zM4 65A18.02031 18.02031 0 0 1 22 47h2.11407a21.05289 21.05289 0 0 1-5.49646-3.7395A22.03427 22.03427 0 0 0 0 65V89a4.00458 4.00458 0 0 0 4 4H33V89H4zM41.88593 47H44a17.88931 17.88931 0 0 1 6.81555 1.34918 19.09749 19.09749 0 0 1 3.59552-2.7243 21.8476 21.8476 0 0 0-7.03821-2.35571A21.053 21.053 0 0 1 41.88593 47zM50 28A17 17 0 1 0 33 45 17.019 17.019 0 0 0 50 28zM33 41A13 13 0 1 1 46 28 13.01442 13.01442 0 0 1 33 41zM84 47h2.11407a21.053 21.053 0 0 1-5.48694-3.73083 21.8476 21.8476 0 0 0-7.03821 2.35571 19.09749 19.09749 0 0 1 3.59552 2.7243A17.88931 17.88931 0 0 1 84 47zM109.38239 43.2605A21.05289 21.05289 0 0 1 103.88593 47H106a18.02031 18.02031 0 0 1 18 18l.00244 24H95v4h29a4.00458 4.00458 0 0 0 4-4V65A22.03427 22.03427 0 0 0 109.38239 43.2605zM95 45A17 17 0 1 0 78 28 17.019 17.019 0 0 0 95 45zm0-30A13 13 0 1 1 82 28 13.01442 13.01442 0 0 1 95 15z"></path>
        </svg>
      ),
      title: "Total Employee",
      description: "The total number of employees is between 11 to 25 people.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          id="price-tag"
          className="w-6 h-6 text-blue-600 dark:text-blue-400"
          width={16}
          height={16}
          fill="currentColor"
        >
          <g data-name="Outline">
            <path d="M21.971 60.531a4.966 4.966 0 0 0 6.281.639A4.966 4.966 0 0 0 31 62h26a5.006 5.006 0 0 0 5-5V29.962a4.974 4.974 0 0 0-1.421-3.492l-3.838-3.933a13.868 13.868 0 0 0 1.509-6.293 14.24 14.24 0 0 0-28.35-1.95l-3.693.026a4.988 4.988 0 0 0-3.507 1.47L3.512 34.978a5.02 5.02 0 0 0 0 7.093Zm37.176-32.665a2.986 2.986 0 0 1 .853 2.1V57a3 3 0 0 1-3 3H31a3 3 0 0 1-3-3V29.973a2.98 2.98 0 0 1 .864-2.105s9.836-9.911 13.069-13.261a3.034 3.034 0 0 1 4.283.01c1.455 1.523 5.885 6.029 5.885 6.029a9.443 9.443 0 0 1-3.462 3.563A6 6 0 1 0 44 34a5.959 5.959 0 0 0 5.85-4.8 14.137 14.137 0 0 0 5.835-4.883ZM39.5 14.224l-4.526.033A9.2 9.2 0 0 1 44 7a9.305 9.305 0 0 1 9.25 9.256 8.693 8.693 0 0 1-.328 2.369s-3.97-4.039-5.274-5.4a5.059 5.059 0 0 0-7.14-.018c-.249.254-1.008 1.017-1.008 1.017Zm7.225 10.86a9.047 9.047 0 0 1-5.442 0 3.964 3.964 0 0 1 5.442 0Zm-6.133 4.986a13.775 13.775 0 0 0 6.822-.007 3.976 3.976 0 0 1-6.822.007ZM44 4a12.2 12.2 0 0 1 8.626 20.884 12.159 12.159 0 0 1-12.614 2.934 3.959 3.959 0 0 1 .171-1A11.3 11.3 0 0 0 55.25 16.244 11.31 11.31 0 0 0 44 5a11.194 11.194 0 0 0-11.067 9.272l-1.015.007A12.287 12.287 0 0 1 44 4ZM4.926 36.392 24.114 17.2a3 3 0 0 1 2.112-.884l11.29-.081-10.077 10.228A4.972 4.972 0 0 0 26 29.973V57a4.958 4.958 0 0 0 .8 2.692 2.983 2.983 0 0 1-3.415-.575L4.926 40.657a3.019 3.019 0 0 1 0-4.265Z"></path>
            <path d="M38 44a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2zm12 10a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm3-14a2.983 2.983 0 0 0-.878-2.121 3.076 3.076 0 0 0-4.239 0S38.855 46.847 35.806 49.8a3.109 3.109 0 1 0 4.4 4.4c2.948-3.048 8.924-9.069 11.918-12.072A2.988 2.988 0 0 0 53 40zm-2.3.711c-3.028 2.973-8.975 9.026-11.923 12.077a1.109 1.109 0 1 1-1.569-1.568c3.051-2.951 9.107-8.9 12.082-11.928a1 1 0 1 1 1.41 1.419z"></path>
          </g>
        </svg>
      ),
      title: "Annual Turnover",
      description: "The annual turnover is between Rs. 1 to 2 Crore.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          id="new-year-day"
          className="w-6 h-6 text-blue-600 dark:text-blue-400"
          width={16}
          height={16}
          fill="currentColor"
        >
          <path d="M10.5 20a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5zm0 6a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5zm1-11h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0 0 1zm9 11a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5zM16 19.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-1 0v4zm4.5.5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5zm-5 6h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm1-5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5zm11-16H25V4c0-1.103-.897-2-2-2s-2 .897-2 2v1H11V4c0-1.103-.897-2-2-2s-2 .897-2 2v1H4.5A2.502 2.502 0 0 0 2 7.5v20C2 28.879 3.121 30 4.5 30h23c1.379 0 2.5-1.121 2.5-2.5v-20C30 6.121 28.879 5 27.5 5zM22 4a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0V4zM8 4a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0V4zm21 23.5c0 .827-.673 1.5-1.5 1.5h-23c-.827 0-1.5-.673-1.5-1.5V12h26v15.5zM29 11H3V7.5C3 6.673 3.673 6 4.5 6H7v1c0 1.103.897 2 2 2s2-.897 2-2V6h10v1c0 1.103.897 2 2 2s2-.897 2-2V6h2.5c.827 0 1.5.673 1.5 1.5V11z"></path>
        </svg>
      ),
      title: "Year of Establishment",
      description:
        "Our business was established in the year 2020, marking the beginning of our journey towards success and growth",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-blue-600 dark:text-blue-400"
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z" />
        </svg>
      ),
      title: "Legal Status of Firm",
      description:
        'The legal status of our firm is "Individual - Proprietor," signifying that it is owned and operated by a single individual.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          id="new-year-list"
          className="w-6 h-6 text-blue-600 dark:text-blue-400"
          width={16}
          height={16}
          fill="currentColor"
        >
          <g data-name="Outline">
            <path d="M41 27H15a1 1 0 0 0 0 2h26a1 1 0 0 0 0-2zM29 39H15a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2zm-8 12h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2zM9 25a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0 8a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0 8a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"></path>
            <path d="M7 62h34a5.006 5.006 0 0 0 5-5V40.235l13.3-13.3a3 3 0 0 1-.576 3.405l-9.194 9.193a1 1 0 0 0 1.414 1.414l9.193-9.192a5.006 5.006 0 0 0 0-7.071l-.707-.707 2.121-2.122a3 3 0 0 0 0-4.243 3.073 3.073 0 0 0-4.242 0l-2.122 2.121a2 2 0 0 0-2.829 0L46 26.093V12a5.006 5.006 0 0 0-5-5h-.5V5.5a3.5 3.5 0 0 0-7 0V7h-6V5.5a3.5 3.5 0 0 0-7 0V7h-6V5.5a3.5 3.5 0 0 0-7 0V7H7a5.006 5.006 0 0 0-5 5v45a5.006 5.006 0 0 0 5 5Zm28.388-13.981-4.242-4.243L38.924 36l4.242 4.242Zm-6.353 2.11 1.208-4.429 3.219 3.219Zm12.717-16.96L46 37.412l-1.42 1.414-4.242-4.242Zm16.971-14.142a1.023 1.023 0 0 1 1.414 0 1 1 0 0 1 0 1.414l-2.121 2.122-1.416-1.415Zm-4.951 2.121 4.244 4.243L47.409 36l-4.243-4.243ZM29.029 43.065a1 1 0 0 0-.262.449L27.105 49.6a2 2 0 0 0 2.456 2.456c1.521-.418 6.089-1.662 6.089-1.662a1 1 0 0 0 .449-.262l7.9-7.9V57a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V21h40v7.093ZM35.5 5.5a1.5 1.5 0 0 1 3 0v4a1.5 1.5 0 0 1-3 0Zm-13 0a1.5 1.5 0 0 1 3 0v4a1.5 1.5 0 0 1-3 0Zm-13 0a1.5 1.5 0 0 1 3 0v4a1.5 1.5 0 0 1-3 0ZM7 9h.5v.5a3.5 3.5 0 0 0 7 0V9h6v.5a3.5 3.5 0 0 0 7 0V9h6v.5a3.5 3.5 0 0 0 7 0V9h.5a3 3 0 0 1 3 3v7H4v-7a3 3 0 0 1 3-3Z"></path>
            <circle cx="25" cy="52" r="1"></circle>
          </g>
        </svg>
      ),
      title: "GST Number",
      description: "Our GST Number is 18ALFPP0252R4ZJ.",
    },
  ];

  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
          {/* Card */}
          {cardsData.map((card, index) => (
            <Card {...card} key={index} />
          ))}

          {/* End Card */}
        </div>
      </div>
    </>
  );
};

export default Aboutus;
