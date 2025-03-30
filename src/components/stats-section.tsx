
import React from 'react';

export const StatsSection = () => {
  return (
    <div className="bg-fundora-dark py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white">Transforming India's Financial Landscape</h2>
          <p className="mt-2 text-xl text-gray-300">Bridging the gap between financial literacy and investment</p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="text-center">
            <div className="text-fundora-orange text-4xl font-bold mb-2">750M+</div>
            <div className="text-gray-300">Indians with limited financial literacy</div>
          </div>
          <div className="text-center">
            <div className="text-fundora-orange text-4xl font-bold mb-2">100K+</div>
            <div className="text-gray-300">Startups seeking funding</div>
          </div>
          <div className="text-center">
            <div className="text-fundora-orange text-4xl font-bold mb-2">₹5T+</div>
            <div className="text-gray-300">Potential investment market</div>
          </div>
          <div className="text-center">
            <div className="text-fundora-orange text-4xl font-bold mb-2">200M+</div>
            <div className="text-gray-300">New investors by 2030</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
