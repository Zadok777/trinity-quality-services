
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const Layout = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Professional window cleaning services in Hillsborough County, Florida. Trinity Quality Services offers residential and commercial window cleaning with 26 years of experience." />
        <meta name="keywords" content="window cleaning, Hillsborough County, Tampa window cleaners, professional window washing, commercial window cleaning, residential window cleaning" />
        <title>Trinity Quality Services | Professional Window Cleaning in Hillsborough County</title>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Trinity Quality Services",
              "description": "Professional window cleaning services in Hillsborough County with 26 years of experience.",
              "image": "/images/logo.png",
              "telephone": "(813) XXX-XXXX",
              "email": "info@trinityqualityservices.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Tampa",
                "addressRegion": "FL",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "27.9506",
                "longitude": "-82.4572"
              },
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "27.9506",
                  "longitude": "-82.4572"
                },
                "geoRadius": "50"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "15:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/TrinityQualityServices",
                "https://www.instagram.com/trinityqualityservices",
                "https://www.linkedin.com/company/trinity-quality-services"
              ],
              "priceRange": "$$"
            }
          `}
        </script>
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
