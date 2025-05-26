
import React from "react";
import { Helmet } from "react-helmet";
import PageBanner from "@/components/ui/PageBanner";
import CompanyHistory from "@/components/about/CompanyHistory";
import MissionStatement from "@/components/about/MissionStatement";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import TeamSection from "@/components/about/TeamSection";
import TestimonialsSection from "@/components/about/TestimonialsSection";
import CallToAction from "@/components/about/CallToAction";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Trinity Quality Services | Window Cleaning Hillsborough County</title>
        <meta name="description" content="Learn about Trinity Quality Services - 16 years in business with 26 years of window cleaning experience serving Hillsborough County and surrounding areas in Florida." />
        <meta name="keywords" content="window cleaning company, about Trinity Quality Services, experienced window cleaners Florida, Hillsborough County window cleaning company" />
      </Helmet>

      <PageBanner title="About Us" backgroundImage="/images/about-banner.jpg" />

      <CompanyHistory />
      <MissionStatement />
      <WhyChooseUs />
      <TeamSection />
      <TestimonialsSection />
      <CallToAction />
    </>
  );
};

export default AboutPage;
