import React from 'react';
import Image from 'next/image';

export default function GreenhouseGasVerification() {
  return (
    <div className="approach-strategy p-6 bg-themeGreen max-h-[70vh] overflow-y-auto custom-scrollbar">
      <div className="grid grid-cols-1">
        <h1 className="text-4xl font-bold mb-2">
          Greenhouse Gas Assurance Report
        </h1>
        {/* Image 1 */}
        <div className="rounded-lg py-9">
          <Image
            src="/images/report/content/greenhouse-gas-assurance-report-01.png"
            alt="Greenhouse gas assurance report page 1"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Image 2 */}
        <div className="rounded-lg py-9">
          <Image
            src="/images/report/content/greenhouse-gas-assurance-report-02.png"
            alt="Greenhouse gas assurance report page 2"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Image 3 */}
        <div className="rounded-lg py-9">
          <Image
            src="/images/report/content/greenhouse-gas-assurance-report-03.png"
            alt="Greenhouse gas assurance report page 3"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
