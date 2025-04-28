
import React from 'react';

interface ServiceAreaCardProps {
  title: string;
  description: string;
}

const ServiceAreaCard = ({ title, description }: ServiceAreaCardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="font-semibold text-trinity-navy mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceAreaCard;
