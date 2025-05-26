
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/e5b6db97-8e3c-4b45-ba86-45aec62feff8.png" 
              alt="Trinity Quality Services" 
              className="h-12"
            />
          </Link>

          {/* Phone number - visible on medium screens and above */}
          <div className="hidden md:flex items-center text-trinity-navy">
            <Phone className="mr-2 h-5 w-5" />
            <a 
              href="tel:+18135770051" 
              className="font-medium hover:text-trinity-light transition-colors"
            >
              (813) 577-0051
            </a>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-trinity-dark hover:text-trinity-light transition-colors font-medium">
              Home
            </Link>
            <Link to="/services" className="text-trinity-dark hover:text-trinity-light transition-colors font-medium">
              Services
            </Link>
            <Link to="/about" className="text-trinity-dark hover:text-trinity-light transition-colors font-medium">
              About
            </Link>
            <Link to="/contact" className="text-trinity-dark hover:text-trinity-light transition-colors font-medium">
              Contact
            </Link>
            <Link 
              to="/contact" 
              className="btn-primary"
            >
              Free Estimate
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="lg:hidden text-trinity-navy p-2"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="container-custom py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-trinity-dark hover:text-trinity-light transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="text-trinity-dark hover:text-trinity-light transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="text-trinity-dark hover:text-trinity-light transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-trinity-dark hover:text-trinity-light transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/contact" 
              className="btn-primary inline-block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Free Estimate
            </Link>
            
            {/* Phone - Mobile */}
            <div className="flex items-center text-trinity-navy pt-2">
              <Phone className="mr-2 h-5 w-5" />
              <a 
                href="tel:+18135770051" 
                className="font-medium hover:text-trinity-light transition-colors"
              >
                (813) 577-0051
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
