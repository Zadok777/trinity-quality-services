import React from "react";

export const servicesData = [
  {
    id: "residential",
    title: "Residential Window Cleaning",
    shortDescription: "Professional window cleaning for homes of all sizes in Hillsborough County.",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    ),
    fullDescription: "Our residential window cleaning service is designed for homeowners who want spotlessly clean windows without the hassle. Using professional-grade equipment and eco-friendly cleaning solutions, our experienced technicians will remove dirt, water spots, and streaks from your windows, leaving them crystal clear. We service both interior and exterior windows, and can handle hard-to-reach windows on multi-story homes.",
    benefits: [
      "Crystal clear windows that enhance natural light and views",
      "Professional, uniformed technicians with years of experience",
      "Eco-friendly cleaning solutions that are safe for your family and pets",
      "Protection for window frames, sills, and surrounding areas",
      "Flexible scheduling to accommodate your busy lifestyle"
    ],
    image: "/lovable-uploads/f1aff985-f154-47e8-bb10-a34ff5afc017.png",
    video: undefined,
    youtubeId: ""
  },
  {
    id: "commercial",
    title: "Commercial Window Cleaning",
    shortDescription: "Keep your business looking professional with our commercial window cleaning services.",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" />
      </svg>
    ),
    fullDescription: "First impressions matter, especially for businesses. Our commercial window cleaning service helps maintain the professional appearance of your storefront, office, or facility. We understand the unique challenges of commercial properties and offer flexible scheduling, including after-hours service to minimize disruption to your business operations. Our team is equipped to handle buildings of all sizes, using professional-grade equipment for safe and efficient cleaning.",
    benefits: [
      "Enhance your business appearance and create positive impressions",
      "Flexible scheduling including evenings and weekends",
      "Fully insured and safety-trained technicians",
      "Commercial-grade equipment for multi-story buildings",
      "Consistent, reliable service with satisfaction guarantee"
    ],
    image: "/lovable-uploads/92d011bf-93fc-4b24-99e2-7b8c51f61ef1.png",
    youtubeId: ""
  },
  {
    id: "pressure-washing",
    title: "Pressure Washing",
    shortDescription: "Restore the beauty of your property's exterior surfaces with our pressure washing service.",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z" clipRule="evenodd" />
      </svg>
    ),
    fullDescription: "Over time, dirt, grime, mold, and mildew can accumulate on your property's exterior surfaces, detracting from its appearance. Our pressure washing service effectively removes these contaminants from driveways, sidewalks, decks, patios, fences, and more. We use professional equipment with adjustable pressure settings to safely clean various surfaces without causing damage.",
    benefits: [
      "Remove stubborn dirt, grime, mold, and mildew",
      "Prevent damage caused by contaminant buildup",
      "Extend the life of your exterior surfaces",
      "Prepare surfaces for painting or sealing",
      "Improve curb appeal and property value"
    ],
    image: "/lovable-uploads/b7d941e0-48a1-402e-be2f-1b66ffc32fd0.png"
  },
  {
    id: "gutter-cleaning",
    title: "Gutter Cleaning",
    shortDescription: "Prevent water damage to your home with our thorough gutter cleaning service.",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 7H7v6h6V7z" />
        <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
      </svg>
    ),
    fullDescription: "Clogged gutters can lead to water damage, foundation issues, and even pest infestations. Our gutter cleaning service helps maintain your home's integrity by removing leaves, twigs, and debris from your gutters and downspouts. We'll ensure proper water flow away from your home, preventing potential costly repairs down the line.",
    benefits: [
      "Prevent water damage to your home's foundation, siding, and landscaping",
      "Reduce the risk of basement flooding",
      "Extend the lifespan of your gutter system",
      "Eliminate breeding grounds for pests",
      "Identify potential gutter issues before they become major problems"
    ],
    image: "/lovable-uploads/d18a6644-7d05-4e37-93f3-2f4a9bc41347.png"
  },
  {
    id: "new-construction",
    title: "New Construction Clean Up",
    shortDescription: "Complete post-construction cleaning services for new builds and renovations.",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
      </svg>
    ),
    fullDescription: "Our new construction clean up service provides comprehensive cleaning for newly built or renovated properties. We ensure all construction debris, dust, and residues are thoroughly removed, making the space ready for immediate occupancy. Our service includes detailed cleaning of windows, frames, tracks, screens, and all surfaces affected by construction work.",
    benefits: [
      "Complete removal of construction debris and dust",
      "Detailed cleaning of all windows, frames, and tracks",
      "Professional cleaning of all surfaces and fixtures",
      "Final inspection to ensure move-in ready condition",
      "Flexible scheduling to meet construction timelines"
    ],
    image: "/images/new-construction-cleanup.jpg"
  }
];
