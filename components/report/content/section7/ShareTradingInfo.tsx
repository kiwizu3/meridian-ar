import React from 'react';
import Image from 'next/image';

export default function ShareTradingInformation() {
  return (
    <div className="share-trading p-6 bg-themeGreen max-h-[70vh] overflow-y-auto">
      <div className="grid grid-cols-1 gap-6">
        <h1 className="text-4xl font-bold mb-2">Share Trading Information</h1>

        <div className="text-sm italic mb-4">For the period ended</div>

        {/* Share Trading Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border text-left" rowSpan={2}>
                  Performance
                </th>
                <th className="p-2 border text-center" colSpan={4}>
                  Quarterly Performance
                </th>
                <th className="p-2 border text-center" colSpan={3}>
                  Annual Performance
                </th>
              </tr>
              <tr className="bg-gray-50">
                <th className="p-2 border">Quarter 1</th>
                <th className="p-2 border">Quarter 2</th>
                <th className="p-2 border">Quarter 3</th>
                <th className="p-2 border">Quarter 4</th>
                <th className="p-2 border">2024/25</th>
                <th className="p-2 border">2023/24</th>
                <th className="p-2 border">2022/23</th>
              </tr>
            </thead>
            <tbody>
              {/* Share Price Section */}
              <tr className="bg-gray-100">
                <td className="p-2 border font-bold" colSpan={8}>
                  Share Price
                </td>
              </tr>
              {[
                {
                  metric: 'Highest (Rs.)',
                  q1: '73.80',
                  q2: '71.50',
                  q3: '91.50',
                  q4: '95.20',
                  y1: '95.20',
                  y2: '73.00',
                  y3: '61.70',
                },
                {
                  metric: 'Lowest (Rs.)',
                  q1: '62.50',
                  q2: '62.00',
                  q3: '68.00',
                  q4: '80.60',
                  y1: '62.00',
                  y2: '49.90',
                  y3: '36.30',
                },
                {
                  metric: 'Last Traded (Rs.)',
                  q1: '72.70',
                  q2: '68.90',
                  q3: '89.50',
                  q4: '86.50',
                  y1: '86.50',
                  y2: '62.80',
                  y3: '55.00',
                },
              ].map((row, index) => (
                <tr key={`price-${index}`}>
                  <td className="p-2 border">{row.metric}</td>
                  <td className="p-2 border">{row.q1}</td>
                  <td className="p-2 border">{row.q2}</td>
                  <td className="p-2 border">{row.q3}</td>
                  <td className="p-2 border">{row.q4}</td>
                  <td className="p-2 border">{row.y1}</td>
                  <td className="p-2 border">{row.y2}</td>
                  <td className="p-2 border">{row.y3}</td>
                </tr>
              ))}

              {/* Share Trading Details Section */}
              <tr className="bg-gray-100">
                <td className="p-2 border font-bold" colSpan={8}>
                  Share Trading Details
                </td>
              </tr>
              {[
                {
                  metric: 'Number of Transactions',
                  q1: '4,721',
                  q2: '3,708',
                  q3: '7,366',
                  q4: '8,108',
                  y1: '23,903',
                  y2: '14,084',
                  y3: '13,177',
                },
                {
                  metric: 'Number of Shares Traded',
                  q1: '15,700,445',
                  q2: '5,439,458',
                  q3: '33,926,443',
                  q4: '19,284,902',
                  y1: '74,351,248',
                  y2: '63,588,580',
                  y3: '14,022,399',
                },
                {
                  metric: 'Value of Shares Traded (Rs.Mn)',
                  q1: '1,102',
                  q2: '358',
                  q3: '2,635',
                  q4: '1,731',
                  y1: '5,826',
                  y2: '3,852',
                  y3: '647',
                },
                {
                  metric: 'Number of Days Traded',
                  q1: '57',
                  q2: '63',
                  q3: '62',
                  q4: '56',
                  y1: '238',
                  y2: '238',
                  y3: '235',
                },
                {
                  metric: 'Average Daily Turnover (Rs.Mn)',
                  q1: '19.33',
                  q2: '5.69',
                  q3: '42.51',
                  q4: '30.91',
                  y1: '24.48',
                  y2: '65.88',
                  y3: '2.75',
                },
              ].map((row, index) => (
                <tr key={`details-${index}`}>
                  <td className="p-2 border">{row.metric}</td>
                  <td className="p-2 border">{row.q1}</td>
                  <td className="p-2 border">{row.q2}</td>
                  <td className="p-2 border">{row.q3}</td>
                  <td className="p-2 border">{row.q4}</td>
                  <td className="p-2 border">{row.y1}</td>
                  <td className="p-2 border">{row.y2}</td>
                  <td className="p-2 border">{row.y3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="text-xs text-gray-500 mt-4">
          LB Finance PLC Integrated Annual Report 2024/25
        </div>
      </div>
    </div>
  );
}
