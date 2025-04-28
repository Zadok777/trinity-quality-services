
import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceDetailProps {
  service: {
    id: string;
    title: string;
    fullDescription: string;
    benefits: string[];
    image: string;
  };
  isReversed?: boolean;
}

const ServiceDetail = ({ service, isReversed }: ServiceDetailProps) => {
  return (
    <div 
      id={service.id}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:grid-flow-dense' : ''}`}
    >
      <div className={isReversed ? 'lg:col-start-2' : ''}>
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
          src={service.image}
          alt={service.title} 
          className="rounded-lg shadow-xl w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default ServiceDetail;
