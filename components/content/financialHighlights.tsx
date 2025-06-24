'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
interface FinancialData {
  category?: string;
  indicator: string;
  unit?: string;
  company2023: string | number;
  company2022: string | number;
  companyChange: string | number;
  group2023: string | number;
  group2022: string | number;
  groupChange: string | number;
}

interface ChartData {
  title: string;
  unit: string;
  data: number[];
  change: number;
  changeDirection: 'up' | 'down';
  latestValue: number;
  previousValue: number;
}

const chartData: ChartData[] = [
  {
    title: 'Income',
    unit: 'Rs. Mn',
    data: [30000, 32000, 34000, 42756, 49230],
    change: 15,
    changeDirection: 'up',
    latestValue: 49230,
    previousValue: 42756,
  },
  {
    title: 'Net Interest Income',
    unit: 'Rs. Mn',
    data: [12000, 14000, 16000, 19028, 24487],
    change: 29,
    changeDirection: 'up',
    latestValue: 24487,
    previousValue: 19028,
  },
  {
    title: 'Profit before Tax',
    unit: 'Rs. Mn',
    data: [6000, 8000, 10000, 11747, 15180],
    change: 29,
    changeDirection: 'up',
    latestValue: 15180,
    previousValue: 11747,
  },
  {
    title: 'Profit after Tax',
    unit: 'Rs. Mn',
    data: [4000, 5000, 6000, 8460, 9564],
    change: 13,
    changeDirection: 'up',
    latestValue: 9564,
    previousValue: 8460,
  },
  {
    title: 'Loans and Receivables',
    unit: 'Rs. Mn',
    data: [100000, 120000, 140000, 145189, 161291],
    change: 11,
    changeDirection: 'up',
    latestValue: 161291,
    previousValue: 145189,
  },
  {
    title: 'Total Assets',
    unit: 'Rs. Mn',
    data: [140000, 150000, 160000, 182347, 202177],
    change: 11,
    changeDirection: 'up',
    latestValue: 202177,
    previousValue: 182347,
  },
  {
    title: 'Due to Depositors',
    unit: 'Rs. Mn',
    data: [90000, 95000, 100000, 114012, 122808],
    change: 8,
    changeDirection: 'up',
    latestValue: 122808,
    previousValue: 114012,
  },
  {
    title: 'Equity',
    unit: 'Rs. Mn',
    data: [20000, 25000, 30000, 38116, 43626],
    change: 8,
    changeDirection: 'up',
    latestValue: 43626,
    previousValue: 38116,
  },
  {
    title: 'Market Capitalisation',
    unit: 'Rs. Mn',
    data: [15000, 20000, 25000, 30473, 34795],
    change: 14,
    changeDirection: 'up',
    latestValue: 34795,
    previousValue: 30473,
  },
  {
    title: 'Earnings per Share (EPS)',
    unit: 'Rs.',
    data: [8, 10, 12, 15.27, 17.26],
    change: 13,
    changeDirection: 'up',
    latestValue: 17.26,
    previousValue: 15.27,
  },
  {
    title: 'Return on Equity (ROE)',
    unit: '%',
    data: [20, 22, 24, 23.78, 23.4],
    change: 2,
    changeDirection: 'down',
    latestValue: 23.4,
    previousValue: 23.78,
  },
  {
    title: 'Non-Performing Loans Ratio (NPL)',
    unit: '%',
    data: [3, 4, 5, 4.45, 3.54],
    change: 20,
    changeDirection: 'down',
    latestValue: 3.54,
    previousValue: 4.45,
  },
];

const financialData: FinancialData[] = [
  {
    category: 'Operating Results',
    indicator: 'Income',
    unit: 'Rs. Million',
    company2023: 49230.09,
    company2022: 42756.46,
    companyChange: 15.14,
    group2023: 49635.77,
    group2022: 43133.44,
    groupChange: 15.07,
  },
  {
    indicator: 'Interest Income',
    unit: 'Rs. Million',
    company2023: 45866.54,
    company2022: 39643.93,
    companyChange: 15.7,
    group2023: 46239.19,
    group2022: 39973.56,
    groupChange: 15.67,
  },
  {
    indicator: 'Net Interest Income',
    unit: 'Rs. Million',
    company2023: 24487.04,
    company2022: 19028.35,
    companyChange: 28.69,
    group2023: 24778.56,
    group2022: 19309.6,
    groupChange: 28.32,
  },
  {
    indicator: 'Profit before Taxation (PBT)',
    unit: 'Rs. Million',
    company2023: 15180.21,
    company2022: 11746.55,
    companyChange: 29.23,
    group2023: 15334.43,
    group2022: 11843.06,
    groupChange: 29.48,
  },
  {
    indicator: 'Profit after Taxation (PAT)',
    unit: 'Rs. Million',
    company2023: 9563.64,
    company2022: 8460.33,
    companyChange: 13.04,
    group2023: 9707.01,
    group2022: 8552.89,
    groupChange: 13.49,
  },
  {
    category: 'Financial Position',
    indicator: 'Total Assets',
    unit: 'Rs. Million',
    company2023: 202176.51,
    company2022: 182346.59,
    companyChange: 10.87,
    group2023: 203147.89,
    group2022: 183018.07,
    groupChange: 11.0,
  },
  {
    indicator: 'Loans and Receivables',
    unit: 'Rs. Million',
    company2023: 161291.49,
    company2022: 145189.17,
    companyChange: 11.09,
    group2023: 162521.73,
    group2022: 146371.6,
    groupChange: 11.03,
  },
  {
    indicator: 'Due to Depositors',
    unit: 'Rs. Million',
    company2023: 122808.12,
    company2022: 114011.7,
    companyChange: 7.72,
    group2023: 123034.55,
    group2022: 114248.25,
    groupChange: 7.69,
  },
  {
    indicator: 'Borrowings',
    unit: 'Rs. Million',
    company2023: 27193.41,
    company2022: 23251.81,
    companyChange: 16.95,
    group2023: 27447.26,
    group2022: 23274.56,
    groupChange: 17.93,
  },
  {
    indicator: 'Equity',
    unit: 'Rs. Million',
    company2023: 43626.07,
    company2022: 38115.74,
    companyChange: 14.46,
    group2023: 43911.26,
    group2022: 38324.1,
    groupChange: 14.58,
  },
  {
    category: 'Investor Information',
    indicator: 'Market Price per Share',
    unit: 'Rs.',
    company2023: 62.8,
    company2022: 55.0,
    companyChange: 14.18,
    group2023: 'N/A',
    group2022: 'N/A',
    groupChange: '-',
  },
  {
    indicator: 'Market Capitalisation',
    unit: 'Rs. Million',
    company2023: 34794.79,
    company2022: 30473.14,
    companyChange: 14.18,
    group2023: 'N/A',
    group2022: 'N/A',
    groupChange: '-',
  },
  {
    indicator: 'Net Asset Value per Share',
    unit: 'Rs.',
    company2023: 78.74,
    company2022: 68.79,
    companyChange: 14.46,
    group2023: 79.25,
    group2022: 69.17,
    groupChange: 14.58,
  },
  {
    indicator: 'Earning per Share (EPS) Basic',
    unit: 'Rs.',
    company2023: 17.26,
    company2022: 15.27,
    companyChange: 13.04,
    group2023: 17.53,
    group2022: 15.44,
    groupChange: 13.55,
  },
  {
    indicator: 'Earning per Share (EPS) Diluted',
    unit: 'Rs.',
    company2023: 17.26,
    company2022: 15.27,
    companyChange: 13.04,
    group2023: 17.53,
    group2022: 15.44,
    groupChange: 13.55,
  },
  {
    indicator: 'Dividend per Share (DPS)',
    unit: 'Rs.',
    company2023: 5.75,
    company2022: 5.0,
    companyChange: 15.0,
    group2023: 'N/A',
    group2022: 'N/A',
    groupChange: '-',
  },
  {
    indicator: 'Dividend Yield',
    unit: '%',
    company2023: 9.16,
    company2022: 9.09,
    companyChange: 0.77,
    group2023: 'N/A',
    group2022: 'N/A',
    groupChange: '-',
  },
  {
    indicator: 'Dividend Payout Ratio',
    unit: '%',
    company2023: 33.31,
    company2022: 32.74,
    companyChange: 1.74,
    group2023: 'N/A',
    group2022: 'N/A',
    groupChange: '-',
  },
  {
    category: 'Statutory Ratios',
    indicator:
      'Core Capital to Risk Weighted Assets Ratio (Tier 1) (Minimum 10%)',
    unit: '%',
    company2023: 31.45,
    company2022: 30.5,
    companyChange: 3.11,
    group2023: 31.59,
    group2022: 30.67,
    groupChange: 3.0,
  },
  {
    indicator: 'Total Risk Weighted Capital Ratio (Tier 1 & II) (Minimum 14%)',
    unit: '%',
    company2023: 32.19,
    company2022: 31.13,
    companyChange: 3.41,
    group2023: 32.33,
    group2022: 31.29,
    groupChange: 3.32,
  },
  {
    indicator: 'Equity to Deposits (Minimum 10%)',
    unit: '%',
    company2023: 35.52,
    company2022: 33.43,
    companyChange: 6.26,
    group2023: 35.69,
    group2022: 33.54,
    groupChange: 6.4,
  },
  {
    indicator: 'Liquidity Ratio',
    unit: '%',
    company2023: 21.02,
    company2022: 19.31,
    companyChange: 8.84,
    group2023: 21.21,
    group2022: 19.41,
    groupChange: 9.27,
  },
  {
    category: 'Other Ratios',
    indicator: 'Return on Assets (ROA)',
    unit: '%',
    company2023: 4.97,
    company2022: 4.88,
    companyChange: 1.84,
    group2023: 5.03,
    group2022: 4.91,
    groupChange: 2.44,
  },
  {
    indicator: 'Return on Equity (ROE)',
    unit: '%',
    company2023: 23.4,
    company2022: 23.78,
    companyChange: -1.6,
    group2023: 23.57,
    group2022: 23.84,
    groupChange: -1.13,
  },
  {
    indicator: 'Net Interest Margin (NIM)',
    unit: '%',
    company2023: 13.7,
    company2022: 11.86,
    companyChange: 15.51,
    group2023: 13.76,
    group2022: 11.94,
    groupChange: 15.24,
  },
  {
    indicator: 'Cost to Income',
    unit: '%',
    company2023: 31.13,
    company2022: 32.42,
    companyChange: -3.98,
    group2023: 31.74,
    group2022: 33.07,
    groupChange: -4.01,
  },
  {
    indicator: 'Loan to Deposits',
    unit: 'Times',
    company2023: 1.31,
    company2022: 1.27,
    companyChange: 3.13,
    group2023: 1.32,
    group2022: 1.28,
    groupChange: 3.1,
  },
  {
    indicator: 'Gross Non- Performing Loans Ratio (Gross NPL)',
    unit: '%',
    company2023: 3.54,
    company2022: 4.45,
    companyChange: -20.45,
    group2023: 3.6,
    group2022: 4.61,
    groupChange: -21.91,
  },
  {
    indicator: 'Net Non- Performing Loans Ratio (Net NPL)',
    unit: '%',
    company2023: -0.79,
    company2022: -0.65,
    companyChange: 21.54,
    group2023: -0.74,
    group2022: -0.64,
    groupChange: 15.63,
  },
  {
    indicator: 'Provision Coverage Ratio',
    unit: '%',
    company2023: 122.42,
    company2022: 114.4,
    companyChange: 7.01,
    group2023: 119.79,
    group2022: 109.35,
    groupChange: 9.55,
  },
  {
    indicator: 'Total Impairment as a Percentage of Gross Loans & Receivables',
    unit: '%',
    company2023: 4.34,
    company2022: 5.13,
    companyChange: -15.48,
    group2023: 4.5,
    group2022: 5.08,
    groupChange: -11.09,
  },
];

export default function FinancialHighlights() {
  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto">
      <div className="mx-auto  rounded-lg overflow-hidden pb-6">
        <div className="overflow-x-auto">
          {/* <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-300 text-black font-bold ">
                <th className="py-3 px-4 text-left"></th>
                <th className="py-3 px-4 text-center" colSpan={3}>
                  Company
                </th>
                <th className="py-3 px-4 text-center" colSpan={3}>
                  Group
                </th>
              </tr>
              <tr className="bg-gray-200 text-black font-bold">
                <th className="py-2 px-4 text-left">Indicator</th>
                <th className="py-2 px-4">2023/24</th>
                <th className="py-2 px-4">2022/23</th>
                <th className="py-2 px-4">Change (%)</th>
                <th className="py-2 px-4">2023/24</th>
                <th className="py-2 px-4">2022/23</th>
                <th className="py-2 px-4">Change (%)</th>
              </tr>
            </thead>
            <tbody>
              {financialData.map((row, index) => (
                <React.Fragment key={index}>
                  {row.category && (
                    <tr className="font-semibold bg-white">
                      <td colSpan={7} className="py-2 px-4 text-black text-bold">
                        {row.category}
                      </td>
                    </tr>
                  )}
                  <tr
                    className={`text-black ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
                  >
                    <td className="py-2 px-4 font-medium">
                      {row.indicator}
                      {row.unit && (
                        <span className="text-gray-500 ml-1">({row.unit})</span>
                      )}
                    </td>
                    <td className="py-2 px-4 text-right">{row.company2023}</td>
                    <td className="py-2 px-4 text-right">{row.company2022}</td>
                    <td className="py-2 px-4 text-right">
                      {row.companyChange}
                    </td>
                    <td className="py-2 px-4 text-right">{row.group2023}</td>
                    <td className="py-2 px-4 text-right">{row.group2022}</td>
                    <td className="py-2 px-4 text-right">{row.groupChange}</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table> */}
          <img src="/images/charts/aboutlb/financialhilights.jpg" alt="financial highlights chart" className="max-w-[800px] md:max-w-full md:w-full mb-4 rounded-lg"/>
        </div>
      </div>

      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* {chartData.map((data, index) => (
            <ChartComponent key={index} data={data} />
          ))} */}
          <div className="bg-white rounded-lg p-4 shadow-md">
            <img
              src="/images/charts/financialHighlights/chart1.png"
              alt="ownership image"
              className="w-full mb-4 rounded-lg"
            />
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <img
              src="/images/charts/financialHighlights/chart2.png"
              alt="ownership image"
              className="w-full mb-4 rounded-lg"
            />
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <img
              src="/images/charts/financialHighlights/chart3.png"
              alt="ownership image"
              className="w-full mb-4 rounded-lg"
            />
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <img
              src="/images/charts/financialHighlights/chart10.png"
              alt="ownership image"
              className="w-full mb-4 rounded-lg"
            />
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <img
              src="/images/charts/financialHighlights/chart11.png"
              alt="ownership image"
              className="w-full mb-4 rounded-lg"
            />
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <img
              src="/images/charts/financialHighlights/chart12.png"
              alt="ownership image"
              className="w-full mb-4 rounded-lg"
            />
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <img
              src="/images/charts/financialHighlights/chart4.png"
              alt="ownership image"
              className="w-full mb-4 rounded-lg"
            />
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <img
              src="/images/charts/financialHighlights/chart5.png"
              alt="ownership image"
              className="w-full mb-4 rounded-lg"
            />
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <img
              src="/images/charts/financialHighlights/chart6.png"
              alt="ownership image"
              className="w-full mb-4 rounded-lg"
            />
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <img
              src="/images/charts/financialHighlights/chart7.png"
              alt="ownership image"
              className="w-full mb-4 rounded-lg"
            />
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <img
              src="/images/charts/financialHighlights/chart8.png"
              alt="ownership image"
              className="w-full mb-4 rounded-lg"
            />
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <img
              src="/images/charts/financialHighlights/chart9.png"
              alt="ownership image"
              className="w-full mb-4 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const ChartComponent: React.FC<{ data: ChartData }> = ({ data }) => {
  const options: ApexOptions = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    colors: ['#4ade80', '#4ade80', '#4ade80', '#4ade80', '#3b82f6'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['20', '21', '22', '23', '24'],
      labels: {
        style: {
          colors: '#9ca3af',
        },
      },
    },
    yaxis: {
      title: {
        text: data.unit,
        style: {
          color: '#9ca3af',
        },
      },
      labels: {
        style: {
          colors: '#9ca3af',
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${val} ${data.unit}`,
      },
    },
  };

  const series = [
    {
      name: data.title,
      data: data.data,
    },
  ];

  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h3 className="text-lg font-semibold mb-2 text-gray-800">
        {data.title}{' '}
        <span className="text-gray-500 text-sm">({data.unit})</span>
      </h3>
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="text-2xl font-bold text-gray-800">
            {data.latestValue.toLocaleString()}
          </span>
          <span className="text-sm text-gray-500 ml-2">2024</span>
        </div>
        <div
          className={`flex items-center ${data.changeDirection === 'up' ? 'text-green-500' : 'text-red-500'}`}
        >
          <span className="text-lg font-semibold">{data.change}%</span>
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                data.changeDirection === 'up'
                  ? 'M5 10l7-7m0 0l7 7m-7-7v18'
                  : 'M19 14l-7 7m0 0l-7-7m7 7V3'
              }
            />
          </svg>
        </div>
      </div>
      <div className="text-sm text-gray-500 mb-4">
        {data.previousValue.toLocaleString()} (2023)
      </div>
      <Chart options={options} series={series} type="bar" height={200} />
    </div>
  );
};
