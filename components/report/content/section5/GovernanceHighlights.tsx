import React from 'react';
import Image from 'next/image';

export default function GovernanceHighlights() {
  return (
    <div className="corporate-governance p-6 bg-themeGreen max-h-[70vh] overflow-y-auto">
      <h1 className="text-4xl font-bold mb-4">
        CORPORATE GOVERNANCE HIGHLIGHTS 2024/25
      </h1>

      <div className="space-y-8">
        {/* Board of Directors Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
            BOARD OF DIRECTORS
          </h2>

          {/* First Row of Directors */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Left to right</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {/* Director 1 */}
              <div className="bg-cardGreen p-4 rounded-lg">
                <div className="bg-gray-200 h-40 w-full rounded-lg flex items-center justify-center mb-3">
                  <span className="text-gray-500">Director Photo</span>
                </div>
                <p className="font-bold">Ms. Ashwini Natesan</p>
                <p className="text-sm">Independent Non-Executive Director</p>
              </div>

              {/* Director 2 */}
              <div className="bg-cardGreen p-4 rounded-lg">
                <div className="bg-gray-200 h-40 w-full rounded-lg flex items-center justify-center mb-3">
                  <span className="text-gray-500">Director Photo</span>
                </div>
                <p className="font-bold">Mr. Dharmadasa Rangalle</p>
                <p className="text-sm">Non-Executive Director</p>
              </div>

              {/* Director 3 */}
              <div className="bg-cardGreen p-4 rounded-lg">
                <div className="bg-gray-200 h-40 w-full rounded-lg flex items-center justify-center mb-3">
                  <span className="text-gray-500">Director Photo</span>
                </div>
                <p className="font-bold">Mr. Ashane Jayasekara</p>
                <p className="text-sm">
                  Independent Non-Executive Director/Senior Independent Director
                </p>
              </div>
            </div>

            {/* Second Row of Directors */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* Director 4 */}
              <div className="bg-cardGreen p-4 rounded-lg">
                <div className="bg-gray-200 h-40 w-full rounded-lg flex items-center justify-center mb-3">
                  <span className="text-gray-500">Director Photo</span>
                </div>
                <p className="font-bold">Mr. Sumith Adhihetty</p>
                <p className="text-sm">Managing Director</p>
              </div>

              {/* Director 5 */}
              <div className="bg-cardGreen p-4 rounded-lg">
                <div className="bg-gray-200 h-40 w-full rounded-lg flex items-center justify-center mb-3">
                  <span className="text-gray-500">Director Photo</span>
                </div>
                <p className="font-bold">Mr. Piyal Hennayake</p>
                <p className="text-sm">Independent Non-Executive Director</p>
              </div>

              {/* Director 6 */}
              <div className="bg-cardGreen p-4 rounded-lg">
                <div className="bg-gray-200 h-40 w-full rounded-lg flex items-center justify-center mb-3">
                  <span className="text-gray-500">Director Photo</span>
                </div>
                <p className="font-bold">Ms. Yogadinusha Bhaskaran</p>
                <p className="text-sm">Non-Executive Director</p>
              </div>
            </div>
          </div>

          {/* Second Group of Directors */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Left to right</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* Director 7 */}
              <div className="bg-cardGreen p-4 rounded-lg">
                <div className="bg-gray-200 h-40 w-full rounded-lg flex items-center justify-center mb-3">
                  <span className="text-gray-500">Director Photo</span>
                </div>
                <p className="font-bold">Mr. Priyantha Talwatte</p>
                <p className="text-sm">Independent Non-Executive Director</p>
              </div>

              {/* Director 8 */}
              <div className="bg-cardGreen p-4 rounded-lg">
                <div className="bg-gray-200 h-40 w-full rounded-lg flex items-center justify-center mb-3">
                  <span className="text-gray-500">Director Photo</span>
                </div>
                <p className="font-bold">Mr. G A R D Prasanna</p>
                <p className="text-sm">
                  Chairman/Non-Independent Non-Executive Director
                </p>
              </div>

              {/* Director 9 */}
              <div className="bg-cardGreen p-4 rounded-lg">
                <div className="bg-gray-200 h-40 w-full rounded-lg flex items-center justify-center mb-3">
                  <span className="text-gray-500">Director Photo</span>
                </div>
                <p className="font-bold">Mr. B D A Perera</p>
                <p className="text-sm">Executive Director</p>
              </div>
            </div>

            {/* Second Row of Second Group */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {/* Director 10 */}
              <div className="bg-cardGreen p-4 rounded-lg">
                <div className="bg-gray-200 h-40 w-full rounded-lg flex items-center justify-center mb-3">
                  <span className="text-gray-500">Director Photo</span>
                </div>
                <p className="font-bold">Mr. Niroshan Udage</p>
                <p className="text-sm">Deputy Managing Director</p>
              </div>

              {/* Director 11 */}
              <div className="bg-cardGreen p-4 rounded-lg">
                <div className="bg-gray-200 h-40 w-full rounded-lg flex items-center justify-center mb-3">
                  <span className="text-gray-500">Director Photo</span>
                </div>
                <p className="font-bold">Mr. Ravindra Yatawara</p>
                <p className="text-sm">Executive Director</p>
              </div>

              {/* Director 12 */}
              <div className="bg-cardGreen p-4 rounded-lg">
                <div className="bg-gray-200 h-40 w-full rounded-lg flex items-center justify-center mb-3">
                  <span className="text-gray-500">Director Photo</span>
                </div>
                <p className="font-bold">Ms. Yanika Amarasekera</p>
                <p className="text-sm">Independent Non-Executive Director</p>
              </div>
            </div>
          </div>
        </div>

        {/* Page Reference */}
        <div className="bg-cardGreen p-4 rounded-lg text-right">
          <p className="text-sm">
            254 LB Finance PLC Integrated Annual Report 2024/25
          </p>
        </div>
      </div>
    </div>
  );
}
