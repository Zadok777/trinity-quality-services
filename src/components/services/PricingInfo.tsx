
import React from 'react';
import { Link } from 'react-router-dom';

const PricingInfo = () => {
  const pricingFactors = [
    "Property type and size",
    "Number and type of windows",
    "Accessibility factors",
    "Condition of windows and surfaces",
    "Additional services requested"
  ];

  return (
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
            {pricingFactors.map((factor, i) => (
              <li key={i} className="flex items-start">
                <svg 
                  className="w-5 h-5 text-trinity-light mt-0.5 mr-2 flex-shrink-0" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{factor}</span>
              </li>
            ))}
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
  );
};

export default PricingInfo;
