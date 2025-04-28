
import React from 'react';
import { Link } from 'react-router-dom';
import ServiceAreaCard from './ServiceAreaCard';

const serviceAreas = [
  { title: "Hillsborough County", description: "Complete exterior and interior cleaning services throughout Hillsborough County." },
  { title: "Hernando County", description: "Professional window cleaning and exterior services in Hernando County." },
  { title: "Pasco County", description: "Quality cleaning solutions for residential and commercial properties in Pasco County." },
  { title: "Polk County", description: "Comprehensive cleaning services for Polk County residents and businesses." },
  { title: "Pinellas County", description: "Expert window cleaning and pressure washing services in Pinellas County." },
  { title: "Manatee County", description: "Professional cleaning solutions for Manatee County properties." },
  { title: "Sarasota County", description: "Serving Sarasota County with premium cleaning services." },
  { title: "Desoto County", description: "Quality exterior and interior cleaning for Desoto County properties." },
  { title: "Hardee County", description: "Professional window cleaning and pressure washing in Hardee County." }
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
            Trinity Quality Services proudly serves residential and commercial clients throughout Central Florida's Gulf Coast region.
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
