
import React from "react";
import { Helmet } from "react-helmet";
import PageBanner from "@/components/ui/PageBanner";
import ContactForm from "@/components/ui/ContactForm";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const ContactPage = () => {
  return <>
      <Helmet>
        <title>Contact Us | Trinity Quality Services | Window Cleaning</title>
        <meta name="description" content="Contact Trinity Quality Services for professional window cleaning in Hillsborough County, Florida. Request a quote, ask questions, or schedule service." />
        <meta name="keywords" content="contact window cleaning service, window cleaning quote, Hillsborough County window cleaners, schedule window cleaning" />
      </Helmet>

      <PageBanner title="Contact Us" description="Get in touch with our team for a free estimate or to learn more about our services" backgroundImage="/images/contact-banner.jpg" />

      {/* Contact Info and Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-trinity-navy mb-6 heading-underline">
                Send Us a Message
              </h2>
              <p className="text-gray-700 mb-6">
                Fill out the form below to request a free estimate, ask questions, or schedule a service. Our team will get back to you promptly.
              </p>
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-trinity-navy mb-6 heading-underline">
                Contact Information
              </h2>
              <p className="text-gray-700 mb-6">
                Have questions or need immediate assistance? Reach out to us directly using the information below.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="bg-trinity-light/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-trinity-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-trinity-navy">Phone</h3>
                    <p className="text-gray-700">(813) 577-0051</p>
                    <p className="text-sm text-gray-500 mt-1">Monday-Friday: 8am-6pm, Saturday: 9am-3pm</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-trinity-light/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-trinity-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-trinity-navy">Email</h3>
                    <p className="text-gray-700">tqs.david@gmail.com</p>
                    <p className="text-sm text-gray-500 mt-1">We aim to respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-trinity-light/10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-trinity-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-trinity-navy">Business Hours</h3>
                    <p className="text-gray-700">Monday-Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-700">Saturday: 9:00 AM - 3:00 PM</p>
                    <p className="text-gray-700">Sunday: Closed</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-trinity-light/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-trinity-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-trinity-navy">Service Area</h3>
                    <p className="text-gray-700">Serving The Following Counties: 
Hillsborough, Pasco, Pinellas, Polk, Hardee, Manatee, Sarasota, Desoto, Hernando</p>
                    
                  </div>
                </div>
              </div>
              
              {/* Service Area Map */}
              <div>
                <h3 className="font-semibold text-lg text-trinity-navy mb-4">Our Service Area</h3>
                <div className="rounded-lg overflow-hidden shadow-md h-96">
                  <iframe title="Service Area Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224443.03467196977!2d-82.66373548178259!3d27.9947148759226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b782b3b9d1e1%3A0xa75f1389af96b463!2sHillsborough%20County%2C%20FL!5e0!3m2!1sen!2sus!4v1682446866040!5m2!1sen!2sus" width="100%" height="100%" style={{
                  border: 0
                }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trinity-navy mb-6 heading-underline-center">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Find answers to some of our most commonly asked questions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg text-trinity-navy mb-3">How often should I have my windows cleaned?</h3>
              <p className="text-gray-600">
                For residential properties, we recommend professional window cleaning every 6-12 months. Commercial properties may require more frequent cleaning, typically every 3-6 months, depending on the location and environmental conditions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg text-trinity-navy mb-3">Do you offer free estimates?</h3>
              <p className="text-gray-600">
                Yes! We provide free, no-obligation estimates for all our services. You can request an estimate through our contact form, by phone, or by email.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg text-trinity-navy mb-3">Are your cleaning solutions safe for plants and pets?</h3>
              <p className="text-gray-600">
                Absolutely. We use environmentally friendly cleaning solutions that are biodegradable and safe for your plants, pets, and family. Our team takes care to protect your landscaping and property during the cleaning process.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg text-trinity-navy mb-3">How long will it take to clean my windows?</h3>
              <p className="text-gray-600">
                The time required depends on several factors, including the size of your property, number of windows, and accessibility. A typical residential job is completed in 2-4 hours, while larger homes or commercial properties may take a full day or more.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg text-trinity-navy mb-3">Do I need to be home during the window cleaning?</h3>
              <p className="text-gray-600">
                While it's not necessary for you to be present during the entire cleaning process, we do prefer that someone is available at the beginning to review the work to be done and at the end to inspect the completed job.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg text-trinity-navy mb-3">What forms of payment do you accept?</h3>
              <p className="text-gray-600">
                We accept cash, checks, and all major credit cards. Payment is typically due upon completion of the service, though commercial accounts may have different terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>;
};

export default ContactPage;
