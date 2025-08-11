import React from 'react';
import Image from 'next/image';

export default function SustainableCompetitiveAdvantage() {
  return (
    <div className="approach-strategy p-6 bg-themeGreen max-h-[70vh] overflow-y-auto custom-scrollbar">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          KEY ATTRIBUTES THAT GAVE LBF ITS SUSTAINABLE COMPETITIVE ADVANTAGE IN
          2025
        </h1>
      </header>
      <div className="space-y-8">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-cardGreen p-4 my-4 rounded-lg place-items-center">
            <div className="flex flex-col space-y-4">
              <h4>A DISTINCTIVE ORGANISATIONAL CULTURE THAT FOSTERS</h4>
              <h4>AN INNOVATIVE, COMMITTED, </h4>
              <h3>A HIGHLY ENGAGED AND MOTIVATED WORKFORCE</h3>
            </div>
            <div className="flex flex-col">
              <Image
                src="/images/report/content/total-assets (2).png"
                alt="total assets pie chart"
                width={500}
                height={400}
              />
            </div>
            <div className="flex justify-between p-1 mt-5 bg-white text-black">
              <div className="pr-5">
                <div className="w-5 h-5 bg-yellow rounded-full"></div>
                <p className="text-sm mt-1 text-yellow-700">LBF</p>
              </div>
              <div>
                <div className="w-5 h-5 bg-greeen2 rounded-full"></div>
                <p className="text-sm mt-1 text-yellow-700">NBFI Sector</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-cardGreen p-4 my-4 rounded-lg place-items-center">
            <div className="flex flex-col space-y-4">
              <h4>EFFECTIVE COST OPTIMISATION STRATEGIES TO IMPROVE</h4>

              <h3>OUR OPERATING EFFICIENCY AND PROFITABILITY RATIOS</h3>
            </div>
            <div className="flex flex-col">
              <Image
                src="/images/report/content/Loans & Receivables.png"
                alt="total assets pie chart"
                width={500}
                height={400}
              />
            </div>
            <div className="flex justify-between p-1 mt-5 bg-white text-black">
              <div className="pr-5">
                <div className="w-5 h-5 bg-yellow rounded-full"></div>
                <p className="text-sm mt-1 text-yellow-700">LBF</p>
              </div>
              <div>
                <div className="w-5 h-5 bg-greeen2 rounded-full"></div>
                <p className="text-sm mt-1 text-yellow-700">NBFI Sector</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-cardGreen p-4 my-4 rounded-lg place-items-center">
            <div className="flex flex-col space-y-4">
              <h4>ROBUST CUSTOMER BASE DRIVING</h4>

              <h3>STEADY AND SUSTAINABLE REVENUE EXPANSION</h3>
            </div>
            <div className="flex flex-col">
              <Image
                src="/images/report/content/Customer Deposits.png"
                alt="total assets pie chart"
                width={500}
                height={400}
              />
            </div>
            <div className="flex justify-between p-1 mt-5 bg-white text-black">
              <div className="pr-5">
                <div className="w-5 h-5 bg-yellow rounded-full"></div>
                <p className="text-sm mt-1 text-yellow-700">LBF</p>
              </div>
              <div>
                <div className="w-5 h-5 bg-greeen2 rounded-full"></div>
                <p className="text-sm mt-1 text-yellow-700">NBFI Sector</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-cardGreen p-4 my-4 rounded-lg place-items-center">
            <div className="flex flex-col space-y-4">
              <h4>EXPERT LEADERSHIP AND MANAGEMENT TEAM</h4>

              <h3>DRIVING STRATEGIC GROWTH AND INDUSTRY EXCELLENCE</h3>
            </div>
            <div className="flex flex-col">
              <Image
                src="/images/report/content/No. of Branches.png"
                alt="total assets pie chart"
                width={500}
                height={400}
              />
            </div>
            <div className="flex justify-between p-1 mt-5 bg-white text-black">
              <div className="pr-5">
                <div className="w-5 h-5 bg-yellow rounded-full"></div>
                <p className="text-sm mt-1 text-yellow-700">LBF</p>
              </div>
              <div>
                <div className="w-5 h-5 bg-greeen2 rounded-full"></div>
                <p className="text-sm mt-1 text-yellow-700">NBFI Sector</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
