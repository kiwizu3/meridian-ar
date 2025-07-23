import React from 'react';
import Image from 'next/image';

export default function FinancialCalendar() {
  return (
    <div className="financial-calendar p-6 bg-themeGreen max-h-[70vh] overflow-y-auto">
      <h1 className="text-4xl font-bold mb-4">FINANCIAL CALENDAR</h1>

      <div className="space-y-8">
        {/* 2024/25 Calendar */}
        <div className="bg-cardGreen p-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
            2024/25
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div>
              <div className="mb-4">
                <p className="font-bold">15 May</p>
                <p>
                  Publication of Interim Financial Statements for the Quarter
                  Ended 31 March 2024
                </p>
              </div>
              <div className="mb-4">
                <p className="font-bold">27 May</p>
                <p>
                  Authorisation for Issue of Audited Financial Statements for
                  2023/24
                </p>
              </div>
              <div className="mb-4">
                <p className="font-bold">04 June</p>
                <p>
                  Publication of Annual Report for the Financial Year Ended 31
                  March 2024
                </p>
              </div>
              <div className="mb-4">
                <p className="font-bold">28 June</p>
                <p>Held 51st Annual General Meeting of the Company</p>
              </div>
              <div className="mb-4">
                <p className="font-bold">17 July</p>
                <p>
                  Publication of Interim Financial Statements for the Quarter
                  Ended 30 June 2024
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="mb-4">
                <p className="font-bold">18 July</p>
                <p>
                  Payment of Final Dividend of Rs. 3.50 per Share for the
                  Financial Year Ended 31 March 2024
                </p>
              </div>
              <div className="mb-4">
                <p className="font-bold">16 October</p>
                <p>
                  Publication of Interim Financial Statements for the Quarter
                  Ended 30 September 2024
                </p>
              </div>
              <div className="mb-4">
                <p className="font-bold">22 January</p>
                <p>
                  Publication of Interim Financial Statements for the Quarter
                  Ended 31 December 2024
                </p>
              </div>
              <div className="mb-4">
                <p className="font-bold">21 March</p>
                <p>
                  Payment of Interim Dividend of Rs. 2.25 per Share for the
                  Financial Year Ended 31 March 2025
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2025/26 Calendar */}
        <div className="bg-cardGreen p-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
            2025/26
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div>
              <div className="mb-4">
                <p className="font-bold">21 May</p>
                <p>
                  Publication of Interim Financial Statements for the Quarter
                  Ended 31 March 2025
                </p>
              </div>
              <div className="mb-4">
                <p className="font-bold">05 June</p>
                <p>
                  Publication of Annual Report for the Financial Year Ended 31
                  March 2025
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="mb-4">
                <p className="font-bold">30 June</p>
                <p>52nd Annual General Meeting of the Company</p>
              </div>
              <div className="mb-4">
                <p className="font-bold">21 July</p>
                <p>
                  Payment of Final Dividend of Rs. 4.25 per Share for the
                  Financial Year Ended 31 March 2025*
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CSE Submission Schedule */}
        <div className="bg-cardGreen p-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
            Submission of the Interim Financial Statements in terms of the rule
            7.4 of the Colombo Stock Exchange (CSE)
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-2 px-4">Period</th>
                  <th className="text-left py-2 px-4">2024/25 Submitted on</th>
                  <th className="text-left py-2 px-4">
                    2025/26 to be Submitted on or before
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4">
                    For the 3 Months Ended 30 June (Unaudited)
                  </td>
                  <td className="py-2 px-4">17 July 2024</td>
                  <td className="py-2 px-4">15 August 2025</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4">
                    For the 3 and 6 Months Ended 30 September (Unaudited)
                  </td>
                  <td className="py-2 px-4">16 October 2024</td>
                  <td className="py-2 px-4">15 November 2025</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4">
                    For the 3 and 9 Months Ended 31 December (Unaudited)
                  </td>
                  <td className="py-2 px-4">22 January 2025</td>
                  <td className="py-2 px-4">15 February 2026</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4">
                    For the 3 Months and Year Ended 31 March (Unaudited)
                  </td>
                  <td className="py-2 px-4">21 May 2025</td>
                  <td className="py-2 px-4">30 May 2026</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CBSL Publication Schedule */}
        <div className="bg-cardGreen p-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
            Publication of the Six Month Financial Statements as per
            Requirements of the Central Bank of Sri Lanka
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-2 px-4">Period</th>
                  <th className="text-left py-2 px-4">
                    2024/25 Published in News Papers on
                  </th>
                  <th className="text-left py-2 px-4">
                    2025/26 to be Published on or before
                  </th>
                </tr>
                <tr>
                  <th></th>
                  <th className="text-left py-2 px-4">
                    <div className="grid grid-cols-3 gap-2">
                      <div>English</div>
                      <div>Sinhala</div>
                      <div>Tamil</div>
                    </div>
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4">
                    For the Year Ended 31 March (Audited)
                  </td>
                  <td className="py-2 px-4">
                    <div className="grid grid-cols-3 gap-2">
                      <div>25 June 2024</div>
                      <div>25 June 2024</div>
                      <div>25 June 2024</div>
                    </div>
                  </td>
                  <td className="py-2 px-4">30 June 2025</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4">
                    For the 6 Months Ended 30 September (Unaudited)
                  </td>
                  <td className="py-2 px-4">
                    <div className="grid grid-cols-3 gap-2">
                      <div>21 November 2024</div>
                      <div>21 November 2024</div>
                      <div>21 November 2024</div>
                    </div>
                  </td>
                  <td className="py-2 px-4">30 November 2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
