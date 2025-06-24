'use client'
import React from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';


const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface HighlightData {
  macroDimension: string;
  indicator: string;
  measurement: string;
  value2022: string | number;
  value2023: string | number;
  capital: string;
}

const highlightsData: HighlightData[] = [
  { macroDimension: "Economic wellbeing", indicator: "Economic value created", measurement: "Rs. Million", value2022: "(3,588.56)", value2023: "1,796.45", capital: "SC" },
  { macroDimension: "", indicator: "Economic value distributed to:", measurement: "", value2022: "", value2023: "", capital: "" },
  { macroDimension: "", indicator: "Depositors and Lenders", measurement: "Rs. Million", value2022: "20,418.06", value2023: "21,144.19", capital: "SC" },
  { macroDimension: "", indicator: "Employees", measurement: "Rs. Million", value2022: "3,533.42", value2023: "4,353.25", capital: "SC" },
  { macroDimension: "", indicator: "Government", measurement: "Rs. Million", value2022: "9,242.28", value2023: "9,485.08", capital: "SC" },
  { macroDimension: "", indicator: "Shareholders", measurement: "Rs. Million", value2022: "2,770.29", value2023: "3,185.83", capital: "SC" },
  { macroDimension: "Social wellbeing", indicator: "Community development programmes", measurement: "Number", value2022: "25", value2023: "18", capital: "SC" },
  { macroDimension: "", indicator: "Staff volunteered hours", measurement: "Hours", value2022: "15,492", value2023: "7,132", capital: "SC" },
  { macroDimension: "Environment and landscape", indicator: "Environment related projects", measurement: "Number", value2022: "3", value2023: "3", capital: "HC" },
  { macroDimension: "", indicator: "Water consumption", measurement: "m3", value2022: "38,847.00", value2023: "44,908.00", capital: "HC" },
  { macroDimension: "", indicator: "Water consumption per Rs. million of profit", measurement: "m3", value2022: "4.59", value2023: "0.21", capital: "HC" },
  { macroDimension: "", indicator: "Trees planted/ distributed", measurement: "Number", value2022: "-", value2023: "8,200", capital: "HC" },
  { macroDimension: "", indicator: "Trees saved from recycling", measurement: "Number", value2022: "827", value2023: "342", capital: "HC" },
  { macroDimension: "", indicator: "Paper recycled", measurement: "Kg", value2022: "48,643", value2023: "20,109", capital: "HC" },
  { macroDimension: "", indicator: "Energy consumption", measurement: "GJ", value2022: "14,384.00", value2023: "16,852.95", capital: "HC" },
  { macroDimension: "", indicator: "Energy per Rs. million of profit", measurement: "GJ", value2022: "1.70", value2023: "1.76", capital: "HC" },
  { macroDimension: "", indicator: "Total carbon footprint", measurement: "tCO2e", value2022: "3,480", value2023: "3,982.9", capital: "HC" },
  { macroDimension: "", indicator: "Total carbon footprint per Rs. million of profit", measurement: "tCO2e", value2022: "0.41", value2023: "2.40", capital: "HC" },
  { macroDimension: "Business sophistication", indicator: "Total branches/ Total outlets", measurement: "Number", value2022: "192", value2023: "200", capital: "MC" },
  { macroDimension: "", indicator: "CDM machines", measurement: "Number", value2022: "24", value2023: "24", capital: "MC" },
  { macroDimension: "", indicator: "Branches outside Western province", measurement: "Number", value2022: "110", value2023: "117", capital: "MC" },
  { macroDimension: "", indicator: "New outlets opened", measurement: "Number", value2022: "11", value2023: "8", capital: "MC" },
  { macroDimension: "Infrastructure and quality of services", indicator: "Investment on ICT", measurement: "Rs. Million", value2022: "214.79", value2023: "279.25", capital: "MC" },
  { macroDimension: "", indicator: "Investment on freehold land and building", measurement: "Rs. Million", value2022: "69.71", value2023: "88.09", capital: "IC" },
  { macroDimension: "Employee wellbeing", indicator: "Total workforce", measurement: "Number", value2022: "3,562", value2023: "4,132", capital: "MC" },
  { macroDimension: "", indicator: "Employees hired", measurement: "Number", value2022: "1,281", value2023: "2,194", capital: "MC" },
  { macroDimension: "", indicator: "Training programs carried out", measurement: "Number", value2022: "39", value2023: "68", capital: "MC" },
  { macroDimension: "", indicator: "Investment on training and development", measurement: "Rs. Million", value2022: "11.71", value2023: "23.22", capital: "MC" },
  { macroDimension: "", indicator: "Total training hours", measurement: "Hours", value2022: "18,163", value2023: "43,127", capital: "MC" },
  { macroDimension: "", indicator: "Average hours of training per employee", measurement: "Hours", value2022: "6.50", value2023: "10.44", capital: "MC" },
  { macroDimension: "", indicator: "Staff remuneration and benefits", measurement: "Rs. Million", value2022: "3,545.13", value2023: "4,095.95", capital: "MC" },
  { macroDimension: "Reputation", indicator: "Brand value (Brand Finance)", measurement: "Rs. Million", value2022: "5,821.00", value2023: "3,597.00", capital: "IC" },
  { macroDimension: "", indicator: "Brand ranking (Brand Finance)", measurement: "Number", value2022: "24", value2023: "25", capital: "IC" },
  { macroDimension: "", indicator: "Credit rating (Fitch Rating)", measurement: "Rating", value2022: "A- (lka) (RWN)", value2023: "BBB+(lka) (Stable Outlook)", capital: "IC" },
  { macroDimension: "Customers", indicator: "Total customer base", measurement: "Number", value2022: "Over 750,000", value2023: "Over 800,000", capital: "SC" },
  { macroDimension: "", indicator: "Customer financial solutions", measurement: "Number", value2022: "32", value2023: "33", capital: "SC" },
];

export default function NonFinancialHighlights(){
  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto">
      <div className="mx-auto  rounded-lg overflow-hidden pb-8 md:pb-16 ">
        <div className="overflow-x-auto">
          {/* <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-300 text-black font-bold">
                <th className="py-3 px-4 text-left">Macro dimension</th>
                <th className="py-3 px-4 text-left">Indicator</th>
                <th className="py-3 px-4 text-left">Measurement</th>
                <th className="py-3 px-4 text-right">2022/23</th>
                <th className="py-3 px-4 text-right">2023/24</th>
                <th className="py-3 px-4 text-center">Capital</th>
              </tr>
            </thead>
            <tbody>
              {highlightsData.map((row, index) => (
                <tr key={index} className={`text-black ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                  <td className="py-2 px-4 font-medium">{row.macroDimension}</td>
                  <td className="py-2 px-4">{row.indicator}</td>
                  <td className="py-2 px-4">{row.measurement}</td>
                  <td className="py-2 px-4 text-right">{row.value2022}</td>
                  <td className="py-2 px-4 text-right">{row.value2023}</td>
                  <td className="py-2 px-4 text-center">{row.capital}</td>
                </tr>
              ))}
            </tbody>
          </table> */}
          <img src="/images/charts/aboutlb/nonfinancialhighlights.jpg" alt="non financial dashboard" className='max-w-[800px] md:max-w-full md:w-full  rounded-lg'/>
        </div>
      </div>
      <div>
      <div className='overflow-auto'>
        <img src="/images/charts/aboutlb/nonfinancialDashboard.jpg" alt="non financial dashboard" className='max-w-[800px] md:max-w-full rounded-lg md:w-full'/>
      </div>
      </div>
    </div>
  );
};

