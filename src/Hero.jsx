import React from "react";
import slsu from "./assets/Slsu.jpg"; 

const Hero = () => {
  return (
    <div
      id="home"
      className="relative bg-gray-900 text-white min-h-screen flex items-center"
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Correctly use the imported image */}
        <img
          src={slsu}
          alt="University campus"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up">
            Streamline Your University Procurement
          </h1>
          <p className="text-lg sm:text-xl mb-8 animate-fade-in-up animation-delay-200">
            Efficient, transparent, and cost-effective procurement solutions for
            higher education institutions. Discover our mission, vision, and
            goals for revolutionizing university procurement.
          </p>
          <div className="space-x-4 space-y-4 sm:space-y-0 flex flex-col sm:flex-row animate-fade-in-up animation-delay-400">
            <a
              href="#contact"
              className="bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition duration-300"
            >
              Explore
            </a>
            <a
              href="#mission-vision-goals"
              className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition duration-300"
            >
              Our Mission
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
