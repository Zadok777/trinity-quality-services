
import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon,
  link
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl h-full">
      <div className="p-6">
        <div className="text-trinity-light mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-trinity-navy mb-3">{title}</h3>
        <p className="text-gray-600 mb-5">{description}</p>
        <Link 
          to={link}
          className="text-trinity-navy font-medium hover:text-trinity-light flex items-center transition-colors"
        >
          Learn More
          <svg 
            className="w-5 h-5 ml-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
