
import React from 'react';
import { Link } from 'react-router-dom';
import ServiceAreaCard from './ServiceAreaCard';

const serviceAreas = [
  { title: "Tampa", description: "Providing window cleaning and exterior services throughout Tampa." },
  { title: "Brandon", description: "Residential and commercial services in Brandon." },
  { title: "Temple Terrace", description: "Complete exterior cleaning solutions for Temple Terrace residents." },
  { title: "Plant City", description: "Servicing Plant City with quality window cleaning." },
  { title: "Riverview", description: "Professional exterior cleaning for Riverview homes and businesses." },
  { title: "Valrico", description: "Serving Valrico with expert window cleaning services." },
  { title: "Apollo Beach", description: "Window cleaning solutions for Apollo Beach properties." },
  { title: "Sun City Center", description: "Quality cleaning services in Sun City Center." },
  { title: "And More!", description: "Contact us to see if we service your area." }
];

const ServiceAreas = () => {
  return (
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
            {serviceAreas.map((area, index) => (
              <ServiceAreaCard 
                key={index}
                title={area.title}
                description={area.description}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/contact" className="btn-primary">
              Check Service Availability
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
