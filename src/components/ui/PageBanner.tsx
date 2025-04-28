
import React from "react";

interface PageBannerProps {
  title: string;
  description?: string;
  backgroundImage?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ title, description, backgroundImage }) => {
  return (
    <div 
      className={`relative py-20 bg-trinity-navy ${backgroundImage ? 'bg-cover bg-center' : ''}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {/* Overlay if background image is provided */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-trinity-navy/70"></div>
      )}
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-gray-200">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
