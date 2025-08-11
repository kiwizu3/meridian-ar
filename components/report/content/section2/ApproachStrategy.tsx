import React from 'react';

export default function ApproachStrategy() {
  return (
    <div className="approach-strategy p-6 bg-themeGreen max-h-[70vh] overflow-y-auto custom-scrollbar">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">APPROACH TO STRATEGY </h1>
      </header>

      <div className="space-y-8">
        {/* First Section */}
        <div>
          {/* Table Section */}
          <div className="my-5 py-5">
            {' '}
            {/* Increased margin-bottom */}
            <h3 className="text-xl font-semibold mb-4"></h3>
            <div className="overflow-x-auto pb-2">
              {' '}
              {/* Added padding-bottom */}
              <table className="min-w-full border">
                {' '}
                {/* Added margin-bottom */}
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="border border-white p-3 text-left">
                      Background Analysis
                    </th>
                    <th className="border border-white p-3 text-left">
                      Navigating Tech Disruption
                    </th>
                    <th className="border border-white p-3 text-left">
                      Stakeholder Centric Approach
                    </th>
                    <th className="border border-white p-3 text-left">
                      Expansion
                    </th>
                    <th className="border border-white p-3 text-left">
                      Sustainability and Social Response
                    </th>
                    <th className="border border-white p-3 text-left">
                      Managing Regulatory Changes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-700 text-white">
                    <td className="border border-white p-3">
                      <ul className="list-disc list-outside pl-6 space-y-2">
                        <li>Vision/mission</li>
                        <li>Situation analysis</li>
                        <li>Setting objectives</li>
                        <li>Formulate strategy</li>
                      </ul>
                    </td>
                    <td className="border border-white p-3">
                      <ul className="list-disc list-outside pl-6 space-y-2">
                        <li>Embrace fintech</li>
                        <li>Digital platforms</li>
                        <li>Cyber security</li>
                      </ul>
                    </td>
                    <td className="border border-white p-3">
                      <ul className="list-disc list-outside pl-6 space-y-2">
                        <li>Personalisation</li>
                        <li>Feedback mechanism</li>
                        <li>Diverse offerings</li>
                      </ul>
                    </td>
                    <td className="border border-white p-3">
                      <ul className="list-disc list-outside pl-6 space-y-2">
                        <li>Local and regional markets</li>
                        <li>Partnership and merges</li>
                        <li>Regulatory compliance</li>
                      </ul>
                    </td>
                    <td className="border border-white p-3">
                      <ul className="list-disc list-outside pl-6 space-y-2">
                        <li>Green business</li>
                        <li>Community development</li>
                        <li>Ethical operation</li>
                      </ul>
                    </td>
                    <td className="border border-white p-3">
                      <ul className="list-disc list-outside pl-6 space-y-2">
                        <li>Rules and regulations</li>
                        <li>Risk management</li>
                        <li>Corporate governance</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold">DELIVERING OUR STRATEGY</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-3">
              <div className="p-4 rounded-lg">
                <h3 className="font-medium mb-3 text-lg">
                  Strategic Value Drivers
                </h3>
                <ul className="list-disc pl-5 py-1">
                  <li>Growth</li>
                  <li>Stability</li>
                  <li>Digitalisation</li>
                  <li>Risk & Governance</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg">
                <h3 className="font-medium mb-3 text-lg">
                  Strategic Value Unlocks
                </h3>
                <ul className="list-disc pl-5 py-1">
                  <li>Sustainable Growth</li>
                  <li>Customer Centricity</li>
                  <li>Digital Leadership</li>
                  <li>Positive Impacts</li>
                  <li>Empowering People</li>
                  <li>Risk and Governance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
