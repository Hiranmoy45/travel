import Script from "next/script";

const GoogleAnalytics = ({ GA_TRACKING_ID }) => {
  return (
    <>
      <Script
      async
      src={`https://www.googletagmanager.com/gtag/js? 
      id=${GA_TRACKING_ID}`}
    ></Script>
    <Script
      id="google-analytics"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_TRACKING_ID}');
        `,
      }}
    ></Script>
    </>
  );
};

export default GoogleAnalytics;