import React from 'react';
import Image from 'next/image';

export default function HRDashboard() {
  return (
    <div className="annual-report p-6 bg-themeGreen max-h-[70vh] overflow-y-auto">
      <div className="bg-greeen2 p-3 rounded-lg mb-8">
        {/* Header Section */}
        <div className="bg-cardGreen p-4 rounded-lg mb-6">
          <h1 className="text-xl font-bold text-[#F3A847]">HR DASHBOARD</h1>
        </div>

        {/* Metric Section */}
        <div className="bg-[#0A3D5F] text-white p-4 rounded-lg text-center mb-6">
          <h3 className="text-2xl font-bold">4,407 TOTAL EMPLOYEES</h3>
        </div>

        {/* Total Employees by Region and Gender */}
        <div className="bg-cardGreen p-4 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
            Total Employees by Region and Gender
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white text-sm text-black">
              <thead>
                <tr className="bg-[#0A3D5F] text-white">
                  <th className="py-2 px-4 text-left">Province</th>
                  <th className="py-2 px-4 text-left">2024/25</th>
                  <th className="py-2 px-4 text-left"></th>
                  <th className="py-2 px-4 text-left"></th>
                  <th className="py-2 px-4 text-left">Total</th>
                  <th className="py-2 px-4 text-left">2023/24</th>
                  <th className="py-2 px-4 text-left"></th>
                  <th className="py-2 px-4 text-left"></th>
                  <th className="py-2 px-4 text-left">Total</th>
                </tr>
                <tr className="bg-[#0A3D5F] text-white">
                  <th className="py-2 px-4 text-left"></th>
                  <th className="py-2 px-4 text-left">No. of Branches</th>
                  <th className="py-2 px-4 text-left">Male</th>
                  <th className="py-2 px-4 text-left">Female</th>
                  <th className="py-2 px-4 text-left"></th>
                  <th className="py-2 px-4 text-left">No. of Branches</th>
                  <th className="py-2 px-4 text-left">Male</th>
                  <th className="py-2 px-4 text-left">Female</th>
                  <th className="py-2 px-4 text-left"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#f7f7f7]">
                  <td className="py-2 px-4 border-b border-gray-200">
                    Central
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">19</td>
                  <td className="py-2 px-4 border-b border-gray-200">209</td>
                  <td className="py-2 px-4 border-b border-gray-200">121</td>
                  <td className="py-2 px-4 border-b border-gray-200">330</td>
                  <td className="py-2 px-4 border-b border-gray-200">18</td>
                  <td className="py-2 px-4 border-b border-gray-200">197</td>
                  <td className="py-2 px-4 border-b border-gray-200">113</td>
                  <td className="py-2 px-4 border-b border-gray-200">310</td>
                </tr>
                {/* Additional rows would go here */}
                <tr className="bg-white">
                  <td className="py-2 px-4 border-b border-gray-200">Total</td>
                  <td className="py-2 px-4 border-b border-gray-200">216</td>
                  <td className="py-2 px-4 border-b border-gray-200">2,317</td>
                  <td className="py-2 px-4 border-b border-gray-200">2,090</td>
                  <td className="py-2 px-4 border-b border-gray-200">4,407</td>
                  <td className="py-2 px-4 border-b border-gray-200">200</td>
                  <td className="py-2 px-4 border-b border-gray-200">2,237</td>
                  <td className="py-2 px-4 border-b border-gray-200">1,895</td>
                  <td className="py-2 px-4 border-b border-gray-200">4,132</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Employee Composition Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Employee Composition by Gender */}
          <div className="bg-cardGreen p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
              Employee Composition by Gender
            </h2>
            <div className="bg-gray-200 p-4 rounded-lg h-64 flex items-center justify-center">
              <p className="text-center">
                Gender composition chart placeholder
              </p>
            </div>
            <p className="text-center mt-2 text-sm">Female 47% | Male 53%</p>
          </div>

          {/* Employee Promotions */}
          <div className="bg-cardGreen p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
              Employee promotions by category and gender
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white text-sm text-black">
                <thead>
                  <tr className="bg-[#0A3D5F] text-white">
                    <th className="py-2 px-4 text-left">Category</th>
                    <th className="py-2 px-4 text-left">Promotions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#f7f7f7]">
                    <td className="py-2 px-4 border-b border-gray-200">
                      Senior Management
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200">12</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-2 px-4 border-b border-gray-200">
                      Middle Management
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200">154</td>
                  </tr>
                  <tr className="bg-[#f7f7f7]">
                    <td className="py-2 px-4 border-b border-gray-200">
                      Executive
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200">380</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-2 px-4 border-b border-gray-200">
                      Other
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200">5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Training Hours Section */}
        <div className="bg-cardGreen p-4 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
            Average hours of training per year per employee
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white text-sm text-black">
              <thead>
                <tr className="bg-[#0A3D5F] text-white">
                  <th className="py-2 px-4 text-left">Category</th>
                  <th className="py-2 px-4 text-left">Total Training Hours</th>
                  <th className="py-2 px-4 text-left">No. of Employees</th>
                  <th className="py-2 px-4 text-left">Avg. Hrs</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#f7f7f7]">
                  <td className="py-2 px-4 border-b border-gray-200">
                    Senior Management
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">617.0</td>
                  <td className="py-2 px-4 border-b border-gray-200">158</td>
                  <td className="py-2 px-4 border-b border-gray-200">4</td>
                </tr>
                {/* Additional rows would go here */}
                <tr className="bg-white">
                  <td className="py-2 px-4 border-b border-gray-200">Total</td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    53,845.0
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">9,362</td>
                  <td className="py-2 px-4 border-b border-gray-200">6</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Skills Programs Section */}
        <div className="bg-cardGreen p-4 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
            Programmes for upgrading employee skills and transition assistance
            programmes
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white text-sm text-black">
              <thead>
                <tr className="bg-[#0A3D5F] text-white">
                  <th className="py-2 px-4 text-left">Category</th>
                  <th className="py-2 px-4 text-left">Programmes</th>
                  <th className="py-2 px-4 text-left">Participants</th>
                  <th className="py-2 px-4 text-left">Total Hours</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#f7f7f7]">
                  <td className="py-2 px-4 border-b border-gray-200">
                    Senior Management
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">144</td>
                  <td className="py-2 px-4 border-b border-gray-200">14</td>
                  <td className="py-2 px-4 border-b border-gray-200">617</td>
                </tr>
                {/* Additional rows would go here */}
              </tbody>
            </table>
          </div>
        </div>

        {/* Service Analysis Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Service Analysis */}
          <div className="bg-cardGreen p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
              Service analysis of employees by category
            </h2>
            <div className="bg-gray-200 p-4 rounded-lg h-64 flex items-center justify-center">
              <p className="text-center">Service analysis chart placeholder</p>
            </div>
            <p className="text-center mt-2 text-sm">
              5 years and below 78% | 6-10 years 12% | 11-15 years 7% | 16-20
              years 1% | Above 20 years 2%
            </p>
          </div>

          {/* Age Composition */}
          <div className="bg-cardGreen p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
              Composition of the Board and employees by employee category and
              age group
            </h2>
            <div className="bg-gray-200 p-4 rounded-lg h-64 flex items-center justify-center">
              <p className="text-center">Age composition chart placeholder</p>
            </div>
            <p className="text-center mt-2 text-sm">Over 50 years: 83 total</p>
          </div>
        </div>
      </div>
    </div>
  );
}
