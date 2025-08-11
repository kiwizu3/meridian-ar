import Image from 'next/image';
import React from 'react';

const OrganizationChart: React.FC = () => {
  return (
    <div className="bg-[#0A3D5F]  text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-3">
          <div className="p-4 bg-white text-black rounded-lg">
            <img
              className="w-full"
              src="/images/organisation-chart.png"
              alt="organization"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationChart;
