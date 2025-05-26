
import React from "react";

const TeamSection = () => {
  return (
    <section className="section-padding bg-gray-100">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-trinity-navy mb-6 heading-underline-center">
            Meet Our Owners
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Trinity Quality Services is proudly owned and operated by David and Stacey Santiago, who are committed to delivering exceptional service to every customer.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-md">
            <img src="/lovable-uploads/aad51947-f061-4f40-80e2-fb1a517ba201.png" alt="David and Stacey Santiago - Owners of Trinity Quality Services" className="w-full h-80 object-cover object-center" />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-trinity-navy mb-1">David & Stacey Santiago</h3>
              <p className="text-trinity-light font-medium mb-3">Owners & Founders</p>
              <p className="text-gray-600">
                David founded Trinity Quality Services in 2008 with 26 years of window cleaning experience. Together with Stacey, they have built a family business committed to quality, integrity, and exceptional customer service throughout Hillsborough County and surrounding areas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
