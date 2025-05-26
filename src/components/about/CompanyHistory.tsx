
import React from "react";

const CompanyHistory = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-trinity-navy mb-6 heading-underline">
              Our Story
            </h2>
            <p className="text-gray-700 mb-4">Trinity Quality Services was founded in 2008 by David Santiago, who had already accumulated a decade of window cleaning experience alone. </p>
            <p className="text-gray-700 mb-4">With 16 years in business and 26 years of industry experience, we've built our reputation on delivering exceptional results and outstanding customer service. Our commitment to quality, integrity, and professionalism has earned us a loyal customer base.</p>
            <p className="text-gray-700">
              Today, Trinity Quality Services continues to be a family-owned and operated business, maintaining the same values and commitment to excellence that we started with. We take pride in enhancing the appearance and value of homes and businesses throughout our community.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="/lovable-uploads/d0539ce4-c961-40ab-885a-42f2edb3472a.png" alt="Before and after garage door and house pressure washing results" className="rounded-lg shadow-md w-full h-auto object-cover" />
              <img src="/lovable-uploads/f821b95e-36d1-4ad2-bb8e-bbac12acac6d.png" alt="Before and after brick walkway and steps pressure washing results" className="rounded-lg shadow-md w-full h-auto object-cover" />
            </div>
            <div className="mt-8 space-y-4">
              <img src="/lovable-uploads/342d204d-23b3-441e-bd7b-f6818de08554.png" alt="Before and after sidewalk, window, and driveway cleaning results" className="rounded-lg shadow-md w-full h-auto object-cover" />
              <img src="/lovable-uploads/c811549f-fc30-4593-bb28-d8961c8fac09.png" alt="Before and after pool deck and lanai pressure washing results" className="rounded-lg shadow-md w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;
