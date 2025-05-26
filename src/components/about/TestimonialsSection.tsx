
import React from "react";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonialsData } from "@/data/testimonialsData";

const TestimonialsSection = () => {
  return (
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
          {testimonialsData.map(testimonial => 
            <TestimonialCard 
              key={testimonial.id} 
              quote={testimonial.quote} 
              author={testimonial.author} 
              location={testimonial.location} 
              rating={testimonial.rating} 
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
