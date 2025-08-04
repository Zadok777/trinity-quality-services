import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ServiceCard from "@/components/ui/ServiceCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { servicesData } from "@/data/servicesData";
import { testimonialsData } from "@/data/testimonialsData";
const HomePage = () => {
  return <>
      <Helmet>
        <title>Trinity Quality Services | Professional Window Cleaning in Hillsborough County</title>
        <meta name="description" content="Professional window cleaning services in Hillsborough County, Florida with 26 years of experience. Residential and commercial window cleaning services." />
        <meta name="keywords" content="window cleaning Hillsborough County, professional window cleaning Florida, window cleaning company near me" />
        
        {/* Local SEO meta tags */}
        <meta property="og:title" content="Trinity Quality Services | Professional Window Cleaning" />
        <meta property="og:description" content="26 years of professional window cleaning experience serving Tampa, Brandon, Plant City and surrounding areas." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        
        {/* Google Business verification */}
        <meta name="google-site-verification" content="" />
      </Helmet>
    <script type="application/ld+json">
  {`{
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Trinity Quality Services",
    "description": "Professional window 
  cleaning and pressure washing services 
  serving Tampa Bay and Hillsborough County,
   Florida with 26+ years of experience.",
    "url": 
  "https://trinityqualityservicesfl.com",
    "telephone": "+1-813-577-0051",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tampa Bay",
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "areaServed": ["Tampa", "Brandon", 
  "Plant City", "Riverview"],
    "serviceType": ["Window Cleaning", 
  "Pressure Washing", "Gutter Cleaning", 
  "Screen Repair"],
    "foundingDate": "2008",
    "openingHours": "Mo-Fr 08:00-17:00"
  }`}
  </script>

      {/* Hero Section */}
      <section className="relative bg-trinity-navy text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{
        backgroundImage: "url('/images/window-cleaning-hero.jpg')"
      }}></div>
        <div className="relative container-custom min-h-[80vh] flex flex-col justify-center py-20">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Professional Window Cleaning And Pressure Washing Services</h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-8 text-trinity-light">
              Integrity + Quality = Great Service
            </h2>
            <p className="text-xl mb-8 max-w-2xl">Serving Tampa Bay | Hillsborough County and surrounding areas with over 26 years of experience in the industry.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-secondary">
                Get Free Estimate
              </Link>
              <Link to="/services" className="btn-outline border-white text-white hover:bg-white hover:text-trinity-navy">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-trinity-navy mb-6 heading-underline">
                Welcome to Trinity Quality Services
              </h2>
              <p className="text-gray-700 mb-4">Since 2008, Trinity Quality Services has been providing exceptional window cleaning and exterior maintenance services to homeowners and businesses.</p>
              <p className="text-gray-700 mb-4">
                With 26 years of industry experience, we've built our reputation on delivering superior results and customer satisfaction. Our team is committed to excellence, integrity, and quality in every project we undertake.
              </p>
              <p className="text-gray-700 mb-6">
                We use professional-grade equipment and cleaning solutions to ensure the best results while being mindful of your property.
              </p>
              <Link to="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="relative">
              <img src="/lovable-uploads/29552300-f3a8-4c72-b623-2fa2fc0e81a6.png" alt="Trinity Quality Services - Our comprehensive cleaning services" className="rounded-lg shadow-xl w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trinity-navy mb-4">
              Our Services
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We offer a comprehensive range of services to keep your home or business looking its best, from window cleaning to pressure washing and more.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.slice(0, 3).map(service => <ServiceCard key={service.id} title={service.title} description={service.shortDescription} icon={service.icon} link={`/services#${service.id}`} />)}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trinity-navy mb-4">
              Why Choose Trinity Quality Services?
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We're committed to delivering the highest quality service with integrity and professionalism.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center">
              <div className="bg-trinity-light/10 text-trinity-navy p-4 inline-block rounded-full mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-trinity-navy mb-3">Experienced Team</h3>
              <p className="text-gray-600">
                Our team brings 26 years of professional window cleaning experience to every job, ensuring exceptional results.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center">
              <div className="bg-trinity-light/10 text-trinity-navy p-4 inline-block rounded-full mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-trinity-navy mb-3">Quality Guaranteed</h3>
              <p className="text-gray-600">
                We stand behind our work with a satisfaction guarantee. If you're not happy, we'll make it right.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center">
              <div className="bg-trinity-light/10 text-trinity-navy p-4 inline-block rounded-full mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-trinity-navy mb-3">Fully Insured</h3>
              <p className="text-gray-600">
                We're fully insured for your peace of mind, protecting both our team and your property.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center">
              <div className="bg-trinity-light/10 text-trinity-navy p-4 inline-block rounded-full mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-trinity-navy mb-3">Local & Family Owned</h3>
              <p className="text-gray-600">
                As a local, family-owned business, we take pride in serving our community with integrity and care.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center">
              <div className="bg-trinity-light/10 text-trinity-navy p-4 inline-block rounded-full mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-trinity-navy mb-3">Professional Equipment</h3>
              <p className="text-gray-600">
                We use professional-grade equipment and cleaning solutions to ensure the best results for your property.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center">
              <div className="bg-trinity-light/10 text-trinity-navy p-4 inline-block rounded-full mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-trinity-navy mb-3">Reliable Service</h3>
              <p className="text-gray-600">
                We show up on time, communicate clearly, and deliver on our promises every single time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trinity-navy mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our customers in Hillsborough County have to say about our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.slice(0, 3).map(testimonial => <TestimonialCard key={testimonial.id} quote={testimonial.quote} author={testimonial.author} location={testimonial.location} rating={testimonial.rating} />)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-trinity-navy text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for Spotless Windows?
            </h2>
            <p className="text-xl mb-8">
              Contact us today for a free estimate and experience the Trinity Quality difference!
            </p>
            <Link to="/contact" className="btn-secondary inline-block text-lg">
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>;
};
export default HomePage;