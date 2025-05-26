
import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 bg-trinity-navy text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Trinity Quality Difference
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
  );
};

export default CallToAction;
