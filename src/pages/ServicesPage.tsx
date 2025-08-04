import React from "react";
import { Helmet } from "react-helmet";
import PageBanner from "@/components/ui/PageBanner";
import { servicesData } from "@/data/servicesData";
import ServiceDetail from "@/components/services/ServiceDetail";
import ServiceAreas from "@/components/services/ServiceAreas";
import PricingInfo from "@/components/services/PricingInfo";
import { Link } from "react-router-dom";
const ServicesPage = () => {
  return <>
      <Helmet>
        <title>Window Cleaning & Pressure Washing Services Tampa Bay FL | Trinity Qualit Services</title>
  <meta name="description" 
  content="Professional window cleaning, pressure washing, gutter cleaning in Tampa Bay & HillsboroughCounty FL. Residential & commercial services. Call (813) 577-0051!" />
  <meta name="keywords" 
    content="window cleaning Tampa Bay, pressure washing Tampa, window cleaning services, power washing Hillsborough County, residential window cleaning, commercial window cleaning, gutter cleaning Tampa, Florida" />
      </Helmet>

      <PageBanner title="Our Services" description="Professional interior and exterior cleaning services for residential and commercial properties" backgroundImage="/images/services-banner.jpg" />

      {/* Services Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-trinity-navy mb-6 heading-underline-center">
              Professional Cleaning Services
            </h2>
            <p className="text-gray-700 text-lg mb-6">At Trinity Quality Services, we offer a comprehensive range of interior and exterior cleaning services for both residential and commercial properties. With over 26 years of experience in the industry, we deliver exceptional results that enhance the appearance and value of your property.</p>
            <p className="text-gray-700 text-lg">
              All of our services are backed by our satisfaction guarantee. If you're not completely satisfied with our work, we'll make it right.
            </p>
          </div>

          <div className="space-y-24">
            {servicesData.map((service, index) => <ServiceDetail key={service.id} service={service} isReversed={index % 2 === 1} />)}
          </div>
        </div>
      </section>

      <ServiceAreas />
      <PricingInfo />

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
    </>;
};
export default ServicesPage;