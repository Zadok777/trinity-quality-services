
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

const Layout = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Professional window cleaning services in Hillsborough County, Florida. Trinity Quality Services offers residential and commercial window cleaning with 26 years of experience." />
        <meta name="keywords" content="window cleaning, Hillsborough County, Tampa window cleaners, professional window washing, commercial window cleaning, residential window cleaning" />
        <title>Trinity Quality Services | Professional Window Cleaning in Hillsborough County</title>
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trinityqualityservicesfl.com" />
        <meta property="og:title" content="Trinity Quality Services | Professional Window Cleaning" />
        <meta property="og:description" content="26 years of professional window cleaning experience serving Hillsborough County, Florida. Residential and commercial services available." />
        <meta property="og:image" content="https://trinityqualityservicesfl.com/lovable-uploads/29552300-f3a8-4c72-b623-2fa2fc0e81a6.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Trinity Quality Services" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://trinityqualityservicesfl.com" />
        <meta name="twitter:title" content="Trinity Quality Services | Professional Window Cleaning" />
        <meta name="twitter:description" content="26 years of professional window cleaning experience serving Hillsborough County, Florida." />
        <meta name="twitter:image" content="https://trinityqualityservicesfl.com/lovable-uploads/29552300-f3a8-4c72-b623-2fa2fc0e81a6.png" />

        {/* Additional meta tags for better link previews */}
        <meta name="author" content="Trinity Quality Services" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://trinityqualityservicesfl.com" />
        
        {/* Enhanced Local Business Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Trinity Quality Services",
              "description": "Professional window cleaning, pressure washing, and gutter cleaning services in Hillsborough County with 26 years of experience.",
              "image": "https://trinityqualityservicesfl.com/lovable-uploads/29552300-f3a8-4c72-b623-2fa2fc0e81a6.png",
              "telephone": "(813) 577-0051",
              "email": "tqs.david@gmail.com",
              "url": "https://trinityqualityservicesfl.com",
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
        <Toaster />
        <SonnerToaster />
      </div>
    </>
  );
};

export default Layout;
