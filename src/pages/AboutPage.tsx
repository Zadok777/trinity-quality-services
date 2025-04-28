
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import PageBanner from "@/components/ui/PageBanner";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonialsData } from "@/data/testimonialsData";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Trinity Quality Services | Window Cleaning Hillsborough County</title>
        <meta name="description" content="Learn about Trinity Quality Services - 16 years in business with 26 years of window cleaning experience serving Hillsborough County and surrounding areas in Florida." />
        <meta name="keywords" content="window cleaning company, about Trinity Quality Services, experienced window cleaners Florida, Hillsborough County window cleaning company" />
      </Helmet>

      <PageBanner 
        title="About Us" 
        description="Over 16 years of trusted service in Hillsborough County"
        backgroundImage="/images/about-banner.jpg"
      />

      {/* Company History */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-trinity-navy mb-6 heading-underline">
                Our Story
              </h2>
              <p className="text-gray-700 mb-4">
                Trinity Quality Services was founded in 2008 by John Smith, who had already accumulated a decade of window cleaning experience. What started as a one-man operation has grown into one of the most respected exterior cleaning companies in Hillsborough County.
              </p>
              <p className="text-gray-700 mb-4">
                With 16 years in business and 26 years of industry experience, we've built our reputation on delivering exceptional results and outstanding customer service. Our commitment to quality, integrity, and professionalism has earned us a loyal customer base throughout Tampa, Brandon, Plant City, and surrounding areas.
              </p>
              <p className="text-gray-700">
                Today, Trinity Quality Services continues to be a family-owned and operated business, maintaining the same values and commitment to excellence that we started with. We take pride in enhancing the appearance and value of homes and businesses throughout our community.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="/images/about-1.jpg" 
                  alt="Trinity Quality Services team member cleaning windows" 
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <img 
                  src="/images/about-2.jpg" 
                  alt="Window cleaning in progress" 
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
              <div className="mt-8 space-y-4">
                <img 
                  src="/images/about-3.jpg" 
                  alt="Finished window cleaning project" 
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <img 
                  src="/images/about-4.jpg" 
                  alt="Trinity Quality Services van" 
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-trinity-navy text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Our Mission
            </h2>
            <p className="text-xl italic mb-8">
              "To provide exceptional exterior cleaning services with integrity and quality, enhancing the appearance and value of our customers' properties while building lasting relationships based on trust and satisfaction."
            </p>
            <div className="flex justify-center">
              <div className="bg-white/10 h-1 w-20 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trinity-navy mb-6 heading-underline-center">
              What Sets Us Apart
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              At Trinity Quality Services, we differentiate ourselves through our commitment to excellence in every aspect of our business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-trinity-light/10 text-trinity-navy p-4 inline-block rounded-full mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a1 1 0 10-2 0c0 .53.042 1.048.122 1.554.195 1.34.479 2.058 1.237 2.546.757.488 1.852.688 3.31.688.55 0 1.06-.065 1.522-.185a6 6 0 01-1.191-2.603zM10 18a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-trinity-navy mb-3">Experience & Expertise</h3>
              <p className="text-gray-600">
                With 26 years of industry experience, we've developed the expertise to handle all types of window cleaning and exterior maintenance projects with precision and care.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-trinity-light/10 text-trinity-navy p-4 inline-block rounded-full mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-trinity-navy mb-3">Quality Guarantee</h3>
              <p className="text-gray-600">
                We stand behind our work with a 100% satisfaction guarantee. If you're not completely satisfied, we'll return and make it right at no additional cost.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-trinity-light/10 text-trinity-navy p-4 inline-block rounded-full mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-trinity-navy mb-3">Exceptional Service</h3>
              <p className="text-gray-600">
                We prioritize customer satisfaction through clear communication, punctuality, respect for your property, and attention to detail on every job.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-trinity-light/10 text-trinity-navy p-4 inline-block rounded-full mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-trinity-navy mb-3">Professional Equipment</h3>
              <p className="text-gray-600">
                We invest in top-quality equipment and cleaning solutions to ensure the best results for your windows and exterior surfaces.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-trinity-light/10 text-trinity-navy p-4 inline-block rounded-full mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-trinity-navy mb-3">Environmental Responsibility</h3>
              <p className="text-gray-600">
                We use environmentally friendly cleaning solutions that effectively clean without harming plants, animals, or the environment.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-trinity-light/10 text-trinity-navy p-4 inline-block rounded-full mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-trinity-navy mb-3">Fair & Transparent Pricing</h3>
              <p className="text-gray-600">
                We provide detailed, upfront quotes with no hidden fees or surprises, ensuring you know exactly what to expect before we begin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trinity-navy mb-6 heading-underline-center">
              Meet Our Team
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our team consists of trained professionals who are passionate about delivering the highest quality service to our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/images/team-1.jpg" 
                alt="John Smith - Founder & Owner" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-trinity-navy mb-1">John Smith</h3>
                <p className="text-trinity-light font-medium mb-3">Founder & Owner</p>
                <p className="text-gray-600 mb-4">
                  With 26 years of window cleaning experience, John founded Trinity Quality Services in 2008. He oversees all operations and is committed to maintaining the highest standards of quality.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/images/team-2.jpg" 
                alt="Sarah Johnson - Operations Manager" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-trinity-navy mb-1">Sarah Johnson</h3>
                <p className="text-trinity-light font-medium mb-3">Operations Manager</p>
                <p className="text-gray-600 mb-4">
                  Sarah has been with Trinity Quality Services for 8 years and ensures that every job is scheduled, staffed, and completed to our high standards.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/images/team-3.jpg" 
                alt="Michael Rogers - Lead Technician" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-trinity-navy mb-1">Michael Rogers</h3>
                <p className="text-trinity-light font-medium mb-3">Lead Technician</p>
                <p className="text-gray-600 mb-4">
                  With over 10 years of experience, Michael leads our technical team and trains new team members in our proven cleaning methods and safety protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trinity-navy mb-6 heading-underline-center">
              What Our Customers Say
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our customers in Hillsborough County have to say about our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map(testimonial => (
              <TestimonialCard
                key={testimonial.id}
                quote={testimonial.quote}
                author={testimonial.author}
                location={testimonial.location}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-trinity-navy text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience the Trinity Quality Difference
            </h2>
            <p className="text-xl mb-8">
              Contact us today to schedule your service or get a free estimate!
            </p>
            <Link to="/contact" className="btn-secondary inline-block text-lg">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
