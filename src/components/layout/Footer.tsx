import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-trinity-navy text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <div className="text-white font-heading">
                <span className="text-2xl font-bold">Trinity</span>
                <span className="text-trinity-light text-2xl font-bold">Quality</span>
                <span className="text-sm block">Window Cleaning Services</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Professional window cleaning services with 26 years of industry experience, serving Hillsborough County and surrounding areas.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/16u8m2J2di/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-trinity-light">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/tqspros/profilecard/?igsh=MWpwZ3JrNG9oZHJqaA==" target="_blank" rel="noopener noreferrer" className="text-white hover:text-trinity-light">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-trinity-light transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-trinity-light transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-trinity-light transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-trinity-light transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-trinity-light transition-colors">
                  Free Estimate
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-trinity-light transition-colors">
                  Residential Window Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-trinity-light transition-colors">
                  Commercial Window Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-trinity-light transition-colors">
                  Pressure Washing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-trinity-light transition-colors">
                  Gutter Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>(813) 577-0051</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>tqs.david@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <div>2780 E. Fowler Ave #421</div>
                  <div>Tampa, FL 33612</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Service Areas */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <h4 className="text-lg font-semibold mb-3">Service Areas</h4>
          <p className="text-gray-300">
            Tampa, Temple Terrace, Brandon, Plant City, Riverview, Valrico, Apollo Beach, Sun City Center, Ruskin, Lutz, Land O' Lakes, Wesley Chapel, and surrounding areas in Hillsborough County, Florida.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Trinity Quality Services. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
