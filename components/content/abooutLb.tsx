'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import Image from 'next/image';
import building from '@/public/images/annual-report/LB-Building.jpg';
import aboutlbqr from '@/public/images/annual-report/aboutlbqr.png';
import ownershipImage from '@/public/images/annual-report/ownership.png';
import clsx from 'clsx';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
const chartOptions: ApexOptions = {
  chart: {
    type: 'line',
    toolbar: { show: false },
    background: 'transparent',
  },
  colors: ['#00CED1', '#1E90FF'],
  stroke: { curve: 'smooth', width: 2 },
  xaxis: {
    categories: ['Mar-20', 'Mar-21', 'Mar-22', 'Mar-23', 'Dec-23'],
    labels: { style: { colors: '#000' } },
  },
  yaxis: { labels: { style: { colors: '#000' } } },
  legend: { show: false },
  grid: { show: false },
};

const chartData = [
  {
    name: 'LBF',
    data: [5, 2, 15, 8, 6],
  },
  {
    name: 'NBFI Sector',
    data: [2, 1, 10, 5, 4],
  },
];

const ChartSection: React.FC<{ title: string; percentage: string }> = ({
  title,
  percentage,
}) => (
  <div className="mb-6">
    <h3 className="text-black font-bold mb-2">{title}</h3>
    <div className="flex items-center mb-2">
      <div className="relative w-20 h-20 flex-shrink-0">
        <div className="absolute inset-0 bg-[#1E90FF] rounded-full"></div>
        <div className="absolute inset-2 bg-[#0A3D5F] rounded-full flex items-center justify-center">
          <span className="text-white font-bold">{percentage}</span>
        </div>
      </div>
      <div className="ml-4 flex-grow h-32">
        <Chart
          options={chartOptions}
          series={chartData}
          type="line"
          height="100%"
        />
      </div>
    </div>
    <div className="flex justify-end">
      <span className="text-[#00CED1] mr-4">● LBF</span>
      <span className="text-[#1E90FF]">● NBFI Sector</span>
    </div>
  </div>
);

export default function AboutLBFinance() {
  return (
    <div className="bg-[#0A3D5F] text-white  px-4 md:px-0 h-[654px] overflow-auto custom-scrollbar">
      <div className="mx-auto grid gap-6 md:gap-8 md:pr-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Right column */}
          <div className="gap-4 flex flex-col bg-[#fcf7ef] rounded-lg p-4">
            {/* Vision */}
            <div className="bg-blue-600">
              <h2 className="text-xl font-bold mb-2 text-[#F3A847]">Vision</h2>
              <p className="text-sm text-black">
                To contribute to the quality of life experienced by our
                depositors, customers, employees, and the general public through
                partnerships that fuel the growth of our Company and to create
                shareholder value both in the short term and long term
              </p>
            </div>

            {/* Mission */}
            <div className="bg-orange-400 md:row-span-2">
              <h2 className="text-xl font-bold mb-2 text-[#F3A847]">Mission</h2>
              <ul className="flex flex-col list-disc list-inside text-sm gap-4 text-black">
                <li>
                  To mobilise public funds by innovating investment products
                  that will enhance the value delivered to our depositors
                </li>
                <li>
                  To engage in prudent lending to entrepreneurs to assist them
                  in the creation of wealth
                </li>
                <li>
                  To embark on investments in which results can be clearly
                  assessed and seize new opportunities in the market
                </li>
                <li>
                  To offer a caring and personalised service that will form the
                  foundation for developing lasting partnerships with our
                  stakeholders, employees, and the general public
                </li>
                <li>
                  To use training and career development to create an empowered
                  and committed group of employees who will drive the Company to
                  high levels of achievement
                </li>
              </ul>
            </div>

            {/* Goal */}
            <div>
              <h2 className="text-xl font-bold mb-2 text-[#F3A847]">Goal</h2>
              <p className="text-sm text-black">
                To be a major player in the financial services sector in Sri
                Lanka
              </p>
            </div>

            {/* Values */}
            <div className=" md:col-span-2">
              <h2 className="text-xl font-bold mb-2 text-[#F3A847]">Values</h2>
              <ul className="flex flex-wrap gap-6 text-sm list-disc list-inside text-black">
                <li>Excellence</li>
                <li>Transparency </li>
                <li>Professionalism</li>
                <li>Ethics</li>
                <li>Innovation</li>
                <li>Quality</li>
              </ul>
            </div>
          </div>

          {/* Left column */}
          <div className="md:col-span-1 bg-[#daa765] p-4 rounded-lg">
            <Image
              src={building}
              alt="LB Finance Building"
              className="w-full h-auto mb-4 object-cover"
            />
            <p className="text-sm mb-4">
              LB Finance PLC was established as a private limited liability
              company in May 1971 and converted into a public limited liability
              company in 1982. It became listed on the Colombo Stock Exchange in
              1997, with Lewis Brown & Company Limited holding the majority of
              shares. In 1994, Vanik Incorporation Limited gained control of the
              Company. Later on, in 2003, the renowned Sri Lankan entrepreneur,
              Mr Dhammika Perera assumed ownership, integrating LB Finance PLC
              into Vallibel One PLC group, a diverse local conglomerate with
              interests spanning lifestyle, finance, aluminium, plantation,
              leisure, consumer, and investments. In June 2008, LB Finance PLC
              was re-registered under the new Companies Act No. 7 of 2007.
            </p>
            <p className="text-sm mb-4">
              Today, we proudly stand among the top-tier Non-Banking Financial
              Institutions (NBFIs) in Sri Lanka, backed by 53 years of
              invaluable experience. Throughout the past five decades, we have
              played a crucial role in fostering prosperity for individuals and
              businesses across the island. With the trust and respect of
              millions earned along the way, we are widely acknowledged as the
              preferred financial services provider in Sri Lanka.
            </p>
            <div className="flex items-center">
              <Image src={aboutlbqr} alt="" className="mr-2 w-32 h-auto" />
              <p className="text-sm">
                Visit our website for more information about LB Finance PLC
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <div>
            <div className="flex md:justify-center">
              <img
                src="/images/annual-report/ownershipNew.png"
                alt="ownership image"
                className="md:w-full md:max-w-full rounded-t-lg max-w-[800px]"
              />
            </div>

            <div className="flex md:justify-center">
              <img
                src="/images/charts/aboutlb/differentLb.png"
                alt="ownership image"
                className="md:w-full md:max-w-full rounded-b-lg max-w-[800px]"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#0A3D5F] text-white">
          <div className="mx-auto">
            <div className="grid gap-6">
              {/* Right column */}
              <div className="bg-[#f3e6d5] p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-8 flex flex-col items-center text-center gap-4 p-6">
                  <h3 className="text-xl font-bold text-[#F3A847]">
                    SIMPLICITY
                  </h3>
                  <img
                    src="/images/charts/capitalReport/HumanCapitalReports/db.png"
                    alt="SIMPLICITY"
                    className="w-12"
                  />
                  <p className="text-sm text-black">
                    Simplicity is the hallmark of our value proposition and the
                    essence of how LBF operates
                  </p>
                </div>

                <div className="mb-8 flex flex-col items-center text-center gap-4 p-6">
                  <h3 className="text-xl font-bold text-[#F3A847]">
                    ACCESSIBILITY
                  </h3>
                  <img
                    src="/images/charts/capitalReport/HumanCapitalReports/file.png"
                    alt="SIMPLICITY"
                    className="w-12"
                  />
                  <p className="text-sm text-black">
                    Accessibility is at the heart of our brand promise to enable
                    customers to access our financial services in their
                    preferred medium
                  </p>
                </div>

                <div className="mb-8 flex flex-col items-center text-center gap-4 p-6">
                  <h3 className="text-xl font-bold text-[#F3A847]">
                    AFFORDABILITY
                  </h3>
                  <img
                    src="/images/charts/capitalReport/HumanCapitalReports/check.png"
                    alt="SIMPLICITY"
                    className="w-12"
                  />
                  <p className="text-sm text-black">
                    Affordability is the assurance we give to our customers that
                    they will receive the best possible outcomes at the right
                    price
                  </p>
                </div>

                <div className="mb-8 flex flex-col items-center text-center gap-4 p-6">
                  <h3 className="text-xl font-bold text-[#F3A847]">
                    PERSONALISATION
                  </h3>
                  <img
                    src="/images/charts/capitalReport/HumanCapitalReports/setting.png"
                    alt="SIMPLICITY"
                    className="w-12"
                  />
                  <p className="text-sm text-black">
                    Personalisation is the key to our effort to meet the exact
                    needs of all customer segments around the Country
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <h1 className="text-3xl font-bold mb-6">
            KEY ATTRIBUTES THAT GIVES LBF
            <br />
            <span className="text-[#1E90FF]">
              ITS COMPETITIVE EDGE IN THE MARKET
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-8 bg-[#ffc982] rounded-lg p-6">
              <div className="bg-[#687c86] p-4 mb-6 rounded-ee-xl rounded-es-xl">
                <p className="text-[#90EE90] mb-2">
                  A UNIQUE CORPORATE CULTURE THAT SUPPORTS THE CREATION OF A
                </p>
                <p className="text-2xl font-bold">
                  HIGHLY ENGAGED AND MOTIVATED WORKFORCE
                </p>
              </div>

              <div className="mb-6">
                <p className=" font-bold mb-2">
                  PRUDENT COST MANAGEMENT TO ENABLE
                </p>
                <p className="text-xl text-[#1E90FF] font-bold">
                  A REDUCTION IN OUR COST TO INCOME RATIO
                </p>
              </div>

              <div className="mb-6">
                <p className="font-bold text-[#712a14]">
                  Strong captive market share representing an opportunity for
                </p>
                <p className="text-[#FF69B4] font-bold text-xl">
                  CONSISTENT REVENUE GROWTH
                </p>
              </div>

              <div>
                <p className="text-[#FF6347]">
                  Experienced management team that brings together
                </p>
                <p className="text-[#712a14] text-xl font-bold">
                  THE BEST MINDS IN THE INDUSTRY
                </p>
              </div>
            </div>

            <div className="bg-[#ffc982] p-4 rounded-lg">
              {/* <ChartSection title="Total Assets" percentage="10.94%" />
              <ChartSection title="Loans and Advances" percentage="12.53%" />
              <ChartSection title="Customer Deposits" percentage="12.34%" />
              <ChartSection title="Number of Branches" percentage="10.69%" /> */}
              <img
                src="/images/charts/aboutlb/total assets.png"
                alt="ownership image"
                className="w-full mb-4 rounded-lg"
              />
              <img
                src="/images/charts/aboutlb/loanAdvance.png"
                alt="ownership image"
                className="w-full mb-4 rounded-lg"
              />
              <img
                src="/images/charts/aboutlb/customerDiposits.png"
                alt="ownership image"
                className="w-full mb-4 rounded-lg"
              />
              <img
                src="/images/charts/aboutlb/numberbranches.png"
                alt="ownership image"
                className="w-full mb-4 rounded-lg"
              />
              <div className="flex gap-8">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#00acb3]" />
                  <p className="text-xs text-black">LBF</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#004369]" />
                  <p className="text-xs text-black">NBFI Sector</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
