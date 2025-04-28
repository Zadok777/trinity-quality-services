
import React from "react";
import { Helmet } from "react-helmet";
import PageBanner from "@/components/ui/PageBanner";
import { servicesData } from "@/data/servicesData";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Trinity Quality Services</title>
        <meta name="description" content="Professional window cleaning, pressure washing, gutter cleaning and screen repair services in Hillsborough County, Florida. Residential and commercial services available." />
        <meta name="keywords" content="window cleaning services Hillsborough County, pressure washing, gutter cleaning, screen repair, commercial window cleaning, residential window washing" />
      </Helmet>

      <PageBanner 
        title="Our Services" 
        description="Professional exterior cleaning services for residential and commercial properties"
        backgroundImage="/images/services-banner.jpg"
      />

      {/* Services Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-trinity-navy mb-6 heading-underline-center">
              Professional Cleaning Services
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              At Trinity Quality Services, we offer a comprehensive range of exterior cleaning services for both residential and commercial properties. With over 26 years of experience, we deliver exceptional results that enhance the appearance and value of your property.
            </p>
            <p className="text-gray-700 text-lg">
              All of our services are backed by our satisfaction guarantee. If you're not completely satisfied with our work, we'll make it right.
            </p>
          </div>

          <div className="space-y-24">
            {servicesData.map((service, index) => (
              <div 
                id={service.id}
                key={service.id} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h3 className="text-2xl md:text-3xl font-bold text-trinity-navy mb-6 heading-underline">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-6">
                    {service.fullDescription}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-trinity-navy mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <svg 
                            className="w-5 h-5 text-trinity-light mt-0.5 mr-2 flex-shrink-0" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to="/contact" className="btn-primary inline-block">
                    Request a Quote
                  </Link>
                </div>
                <div>
                  <img 
                    src={service.image || `/images/${service.id}.jpg`}
                    alt={service.title} 
                    className="rounded-lg shadow-xl w-full h-auto object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-trinity-navy mb-6 text-center heading-underline-center">
              Our Service Areas
            </h2>
            <p className="text-gray-700 text-lg mb-8 text-center">
              Trinity Quality Services proudly serves residential and commercial clients throughout Hillsborough County and surrounding areas.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-trinity-navy mb-2">Tampa</h3>
                <p className="text-gray-600">Providing window cleaning and exterior services throughout Tampa.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-trinity-navy mb-2">Brandon</h3>
                <p className="text-gray-600">Residential and commercial services in Brandon.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-trinity-navy mb-2">Temple Terrace</h3>
                <p className="text-gray-600">Complete exterior cleaning solutions for Temple Terrace residents.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-trinity-navy mb-2">Plant City</h3>
                <p className="text-gray-600">Servicing Plant City with quality window cleaning.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-trinity-navy mb-2">Riverview</h3>
                <p className="text-gray-600">Professional exterior cleaning for Riverview homes and businesses.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-trinity-navy mb-2">Valrico</h3>
                <p className="text-gray-600">Serving Valrico with expert window cleaning services.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-trinity-navy mb-2">Apollo Beach</h3>
                <p className="text-gray-600">Window cleaning solutions for Apollo Beach properties.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-trinity-navy mb-2">Sun City Center</h3>
                <p className="text-gray-600">Quality cleaning services in Sun City Center.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-trinity-navy mb-2">And More!</h3>
                <p className="text-gray-600">Contact us to see if we service your area.</p>
              </div>
            </div>
            
            <div className="text-center">
              <Link to="/contact" className="btn-primary">
                Check Service Availability
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-trinity-navy mb-6 heading-underline-center">
              Pricing Information
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              At Trinity Quality Services, we provide customized quotes based on your specific needs. Several factors influence our pricing, including:
            </p>
            
            <ul className="space-y-2 text-left max-w-xl mx-auto mb-8">
              <li className="flex items-start">
                <svg 
                  className="w-5 h-5 text-trinity-light mt-0.5 mr-2 flex-shrink-0" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Property type and size</span>
              </li>
              <li className="flex items-start">
                <svg 
                  className="w-5 h-5 text-trinity-light mt-0.5 mr-2 flex-shrink-0" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Number and type of windows</span>
              </li>
              <li className="flex items-start">
                <svg 
                  className="w-5 h-5 text-trinity-light mt-0.5 mr-2 flex-shrink-0" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Accessibility factors</span>
              </li>
              <li className="flex items-start">
                <svg 
                  className="w-5 h-5 text-trinity-light mt-0.5 mr-2 flex-shrink-0" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Condition of windows and surfaces</span>
              </li>
              <li className="flex items-start">
                <svg 
                  className="w-5 h-5 text-trinity-light mt-0.5 mr-2 flex-shrink-0" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Additional services requested</span>
              </li>
            </ul>
            
            <p className="text-gray-700 text-lg mb-8">
              We believe in transparent pricing with no hidden fees. Contact us today for a free, no-obligation quote tailored to your specific needs.
            </p>
            
            <Link to="/contact" className="btn-primary inline-block">
              Request a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-trinity-navy text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Property?
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

export default ServicesPage;
