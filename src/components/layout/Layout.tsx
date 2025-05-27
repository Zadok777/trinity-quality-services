
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
        
        {/* Enhanced Local Business Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Trinity Quality Services",
              "description": "Professional window cleaning, pressure washing, and gutter cleaning services in Hillsborough County with 26 years of experience.",
              "image": "/images/logo.png",
              "telephone": "(813) 577-0051",
              "email": "tqs.david@gmail.com",
              "url": "https://www.trinityqualityservices.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2780 E. Fowler Ave #421",
                "addressLocality": "Tampa",
                "addressRegion": "FL",
                "postalCode": "33612",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "28.0636",
                "longitude": "-82.4304"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Tampa"
                },
                {
                  "@type": "City", 
                  "name": "Brandon"
                },
                {
                  "@type": "City",
                  "name": "Plant City"
                },
                {
                  "@type": "City",
                  "name": "Temple Terrace"
                }
              ],
              "serviceType": [
                "Window Cleaning",
                "Pressure Washing", 
                "Gutter Cleaning",
                "Screen Repair"
              ],
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
                "https://www.facebook.com/share/16u8m2J2di/?mibextid=wwXIfr",
                "https://www.instagram.com/tqspros/profilecard/?igsh=MWpwZ3JrNG9oZHJqaA=="
              ],
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "47"
              }
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
