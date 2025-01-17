import React from 'react';

const MissionVisionGoals = () => {
  return (
    <section id="mission-vision-goals" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Mission, Vision, and Goals</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Driving excellence in university procurement through innovation, collaboration, and sustainability.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-primary text-4xl mb-4">
              <i className="fas fa-bullseye"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h3>
            <p className="text-gray-600">
              To revolutionize university procurement by providing cutting-edge solutions that streamline processes, reduce costs, and foster sustainable practices across higher education institutions.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-primary text-4xl mb-4">
              <i className="fas fa-eye"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Vision</h3>
            <p className="text-gray-600">
              To be the global leader in university procurement solutions, empowering educational institutions to achieve operational excellence and focus on their core mission of education and research.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-primary text-4xl mb-4">
              <i className="fas fa-flag"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Goals</h3>
            <ul className="text-gray-600 list-disc list-inside">
              <li>Optimize procurement processes for 1000+ universities by 2025</li>
              <li>Reduce procurement costs for our clients by an average of 20%</li>
              <li>Achieve 100% compliance with sustainability and ethical sourcing standards</li>
              <li>Foster innovation through collaborative partnerships with universities and suppliers</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionGoals;

