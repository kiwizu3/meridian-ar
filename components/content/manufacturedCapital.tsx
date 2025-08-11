'use client';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import React from 'react';

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

interface Branch {
  total: number;
  new: number;
  investment: string;
  relocations: number;
  itInvestment: string;
  cashDepositMachines: number;
  branchesInMyanmar: number;
}

interface FootprintData {
  region: string;
  branches: {
    name: string;
    sriLankan: number;
    burmese: number;
  }[];
}

const footprintData: FootprintData[] = [
  {
    region: 'Magway',
    branches: [
      { name: 'Sinbaungwe', sriLankan: 1, burmese: 9 },
      { name: 'Magway', sriLankan: 0, burmese: 12 },
      { name: 'Aunglan', sriLankan: 0, burmese: 6 },
      { name: 'Minbu', sriLankan: 0, burmese: 8 },
      { name: 'Thyet', sriLankan: 0, burmese: 6 },
      { name: 'Myothit', sriLankan: 0, burmese: 7 },
    ],
  },
  {
    region: 'Bago',
    branches: [
      { name: 'Pyay', sriLankan: 3, burmese: 33 },
      { name: 'Paukkaung', sriLankan: 0, burmese: 11 },
      { name: 'Shwedaung', sriLankan: 0, burmese: 12 },
      { name: 'Paungde', sriLankan: 0, burmese: 10 },
      { name: 'Letpadan', sriLankan: 0, burmese: 8 },
      { name: 'Okeshitpin', sriLankan: 0, burmese: 9 },
      { name: 'Nattalin', sriLankan: 0, burmese: 9 },
    ],
  },
  {
    region: 'Ayeyarwady',
    branches: [
      { name: 'Kyangin', sriLankan: 0, burmese: 5 },
      { name: 'Myanaung', sriLankan: 0, burmese: 7 },
      { name: 'Ingapu', sriLankan: 0, burmese: 6 },
    ],
  },
];

const branchData: Branch = {
  total: 200,
  new: 8,
  investment: 'Rs. 28.09 Mn',
  relocations: 2,
  itInvestment: 'Rs. 272.77 Mn',
  cashDepositMachines: 24,
  branchesInMyanmar: 16,
};

const chartData = {
  series: [65, 16, 12, 5, 2],
  labels: [
    'Freehold Land and Buildings',
    'Furniture, Fixtures, and Fittings',
    'Equipment',
    'Computer Hardware and Equipment',
    'Improvement of Leased/Right-of-Use Assets',
  ],
};

const chartOptions: ApexOptions = {
  chart: {
    type: 'pie',
  },
  legend: {
    position: 'bottom',
  },
  labels: chartData.labels,
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: 'bottom',
        },
      },
    },
  ],
};

const branchExpansionData = {
  series: [
    {
      name: 'New Branches Opened',
      data: [2, 5, 8, 6, 8],
    },
    {
      name: 'Branches Relocated',
      data: [1, 2, 3, 2, 2],
    },
  ],
  options: {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['2020', '2021', '2022', '2023', '2024'],
    },
    yaxis: {
      title: {
        text: 'No.',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return val + ' Branches';
        },
      },
    },
  },
};
export default function ManufacturedCapital() {
  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col gap-6">
      <div>
        <div className="overflow-x-auto">
          <img
            className="max-w-none block"
            src="/images/annual-report/finance_capital/manufactured-capital.png"
          />
        </div>
      </div>
      <div className="">
        {/* Main Section */}
        <div className="">
          <div className="bg-white p-4 rounded-lg text-black mb-4 ">
            <p>
              Our Manufactured Capital encompasses a robust physical
              infrastructure that spans an island-wide network of branches, cash
              deposit machines, digital channels, and other essentially built
              assets. This infrastructure is crucial for delivering exceptional
              customer experiences.
            </p>
          </div>

          <div className="bg-[#F5F5F5] text-black p-4 rounded-lg mb-4">
            <h3 className="font-semibold mb-2">Management Approach</h3>
            <p>
              Manufactured capital encompasses both physical and digital
              infrastructure, such as property, plant and equipment, investment
              properties, and right-of-use assets. As of 31 March 2024,
              property, plant, equipment, and right-of-use assets amounted to
              Rs. 8.9 Bn. Our ongoing investments in nurturing manufactured
              capital support our commitment to delivering value to a diverse
              range of stakeholders and transforming LBF into a customer-centric
              and digitally enabled organisation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg text-black">
              <h3 className="font-semibold mb-2">
                Components of Manufactured Capital
              </h3>
              <ul className="list-disc ml-4">
                <li>Our Branch Network</li>
                <li>Investments in Digital Infrastructure</li>
                <li>Regional Presence</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg text-black">
              <h3 className="font-semibold mb-2">
                Nurturing Manufactured Capital
              </h3>
              <ul className="list-disc ml-4">
                <li>Investment in branch infrastructure</li>
                <li>Investment in capacity expansion</li>
                <li>Investment in digital technology</li>
                <li>Maintenance and upkeep of manufactured capital</li>
              </ul>
            </div>
          </div>

          <div className="overflow-x-auto bg-white mt-5">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-green-200">
                <tr>
                  <th
                    rowSpan={2}
                    className="py-2 px-4 text-left text-sm font-semibold text-blue"
                  >
                    STRATEGIC PRIORITIES
                  </th>
                  <th
                    rowSpan={2}
                    className="py-2 px-4 text-left text-sm font-semibold text-blue"
                  >
                    PROGRESS IN FY 2023/24
                  </th>
                  <th
                    colSpan={3}
                    className="py-2 px-4 border-b-1 text-center text-sm font-semibold text-blue"
                  >
                    LOOKING AHEAD
                  </th>
                </tr>
                <tr className="bg-green-200">
                  <th className="py-2 px-4 text-left text-sm font-semibold text-blue">
                    Short-term
                  </th>
                  <th className="py-2 px-4 text-left text-sm font-semibold text-blue">
                    Medium-term
                  </th>
                  <th className="py-2 px-4 text-left text-sm font-semibold text-blue">
                    Long-term
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    Income Generation
                  </td>
                  <td className="py-2 px-4 text-sm text-blue align-top">Rs. 49 Bn.</td>
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    Maintain at current levels
                  </td>
                  <td className="py-2 px-4 text-sm text-blue align-top">10% Growth</td>
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    Increase to Rs. 100 Bn.
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-2 px-4 text-sm text-blue align-top">Profitability</td>
                  <td className="py-2 px-4 text-sm text-blue align-top">Rs. 9.5 Bn.</td>
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    Increase to Rs. 10 Bn.
                  </td>
                  <td className="py-2 px-4 text-sm text-blue align-top">20% Growth</td>
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    Increase to Rs. 25 Bn.
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    Growth (Total Assets)
                  </td>
                  <td className="py-2 px-4 text-sm text-blue align-top">Rs. 202 Bn.</td>
                  <td className="py-2 px-4 text-sm text-blue align-top">20% Growth</td>
                  <td className="py-2 px-4 text-sm text-blue align-top">50% Growth</td>
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    Increase to Rs. 500 Bn.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Sidebar Section */}
        <div className="grid grid-cols-2 gap-4 mt-5">
          <div className="bg-white p-4 rounded-lg text-black mb-4">
            <h3 className="font-semibold mb-2">Contributing to Our Mission</h3>
            <p>
              To embark on investments in which results can be clearly assessed
              and seize new opportunities in the market.
            </p>
          </div>
          <div className="bg-white rounded-lg text-black mb-4">
            <div className="bg-white text-[#0A3D5F] p-4 rounded-lg">
              <h2 className="font-semibold mb-2">CONTRIBUTION TO OUR VALUES</h2>

              <div className="flex justify-around">
                <div className="text-center">
                  <img src="/images/annual-report/excellence.png" />
                  <p>Excellence</p>
                </div>
                <div className="text-center">
                  <img src="/images/annual-report/innovation.png" />
                  <p>Innovation</p>
                </div>
                <div className="text-center">
                  <img src="/images/annual-report/quality.png" />
                  <p>Quality</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white mb-4 rounded-lg">
            <div className="bg-white text-[#0A3D5F] p-4 rounded-lg">
              <h2 className="font-semibold mb-2">STAKEHOLDERS IMPACTED</h2>
              <img src="/images/annual-report/stakeholders-impact.png" />
            </div>
            <div className="bg-white p-4 rounded-lg text-black mb-4">
              <h3 className="font-semibold mb-2">Commitments to UN SDGs</h3>
              <p className="flex justify-center">
                <img
                  src="/images/annual-report/commitment-stg.png"
                  alt="SDG Icons"
                />
              </p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg text-black mb-4">
            <h3 className="font-semibold mb-2">Material Matters</h3>
            <p className="mb-2">Regional expansion</p>
            <p className="mb-2">Business continuity</p>
            <p className="mb-2">Business model</p>
            <p className="mb-2">innovation</p>
            <p className="mb-2">Customer experience</p>
            <p className="mb-2">Process excellence</p>
          </div>

          <div className="bg-[#F5F5F5] p-4 rounded-lg text-black">
            <h3 className="font-semibold mb-2">
              Composition of Manufactured Capital
            </h3>
            <div className="flex flex-col items-center">
              <img
                src="/images/charts/capitalReport/ManufacturedCapitalReport/composition-of-manufactured-capital.PNG"
                alt="Composition of Manufactured Capital"
                className="mb-4 rounded-lg"
              />
            </div>
            {/* <ApexCharts
              options={chartOptions}
              series={chartData.series}
              type="pie"
              height={350}
            /> */}
          </div>
        </div>
      </div>

      <div className="border-b-2 ">
        <h2 className="text-center p-2">CAPITAL TRADE-OFF</h2>
      </div>

      <h3 className="text-center">Investment in the branch network</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b-2 border-gray-200">
        
          <div className="bg-[#E7F1D4] text-[#0A3D5F] rounded-t-lg">
            <h3 className="font-bold py-2 text-white text-center bg-[#97C93C] rounded-t-lg">FC</h3>
            <div className=" p-3">
              <p className="text-[#879092] text-center">
                Requires significant financial resources to build, relocate, and
                refurbish branches. This results in long-term benefits such as
                an increased customer base, market share, and revenue
              </p>
            </div>
          </div>
        
          <div className=" text-[#0A3D5F] rounded-t-lg bg-[#D1CBE4]">
            <h3 className="font-bold py-2 text-white text-center bg-[#594399] rounded-t-lg">HC</h3>
            <div className=" p-3">
              <p className="text-[#879092] text-center">
                Creates a conducive work environment
              </p>
            </div>
          </div>
        
          <div className=" text-[#0A3D5F] rounded-t-lg bg-[#FDDCC5]">
            <h3 className="font-bold py-2 text-white text-center bg-[#F36621] rounded-t-lg">IC</h3>
            <div className=" p-3">
              <p className="text-[#879092] text-center">
                Enhances brand reputation through promotion of digital and
                physical touchpoints
              </p>
            </div>
          </div>
        
          <div className="bg-[#E9DDC8] text-[#0A3D5F] rounded-t-lg">
            <h3 className="font-bold py-2 text-white text-center bg-[#A77E36] rounded-t-lg">SC</h3>
            <div className=" p-3">
              <p className="text-[#879092] text-center">
                The provision of efficient services through the branch network
                enhances customer experience. Expansion of reach results in
                financial inclusion
              </p>
            </div>
          </div>
        
      </div>

      <h3 className="text-center">Investment in digital infrastructure</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b-2 border-gray-200">
       
          <div className=" bg-[#E7F1D4] text-[#0A3D5F] rounded-t-lg">
            <h3 className="font-bold py-2 text-white text-center bg-[#97C93C] rounded-t-lg">FC</h3>
            <div className=" p-3">
              <p className="text-[#879092] text-center">
                Investment in hardware and software requires financial
                resources, but provides benefits in terms of efficiency
                improvements, and cost savings in the long-term
              </p>
            </div>
          </div>
        
          <div className="bg-[#D1CBE4] text-[#0A3D5F] rounded-t-lg">
            <h3 className="font-bold py-2 text-white text-center bg-[#594399] rounded-t-lg">HC</h3>
            <div className="p-3">
              <p className="text-[#879092] text-center">
                Employee development in digital competencies and increased
                productivity through automation
              </p>
            </div>
          </div>
       
          <div className="bg-[#FDDCC5] text-[#0A3D5F] rounded-t-lg">
            <h3 className="font-bold py-2 text-white text-center bg-[#F36621] rounded-t-lg">IC</h3>
            <div className=" p-3">
              <p className="text-[#879092] text-center">
                Investment in technology and digital channels augments
                intellectual capital
              </p>
            </div>
          </div>
        
          <div className="bg-[#E9DDC8] text-[#0A3D5F] rounded-t-lg">
            <h3 className="font-bold py-2 text-white text-center bg-[#A77E36] rounded-t-lg">MC</h3>
            <div className=" p-3">
              <p className="text-[#879092] text-center">
                Provides an exceptional customer experience through a faster,
                efficient, secure, and convenient service
              </p>
            </div>
          </div>
        
      </div>

      <div className="bg-[#F5F5F5] text-black p-4 rounded-lg mt-4 grid grid-cols-2">
        <div>
          <h3 className="font-semibold mb-2">OUR BRANCH NETWORK</h3>
          <p className="mb-3">
            Our islandwide branch network comprises of 200 branches that enables
            us to reach over 800,000 customers across Sri Lanka.
          </p>
          <p className="mb-3">
            We have continued to expand our branch network to extend our reach
            to a broader spectrum of Sri Lankans. To optimise the efficiency of
            these physical touchpoints, we assess customer feedback and data,
            including transactional status and average annual footfall at each
            branch location. Our primary objective is to strategically position
            our branches to meet the evolving needs of our customers.
            Consequently, through our branch relocation programme, we have
            relocated branches to regions with higher population density,
            ensuring enhanced accessibility for our customers.
          </p>
          <p>
            During FY 2023/24, 02 branches were relocated to improve
            accessibility. Moreover, we have standardised our branches and
            provided training to ensure branch teams are equipped to deliver
            exceptional customer service. Furthermore, 08 branches were opened
            during the year, and over Rs. 146 Mn investment made in the branch
            network for FY 2023/24.
          </p>
        </div>
        <div className="mt-4">
          <div className="flex flex-col items-center">
            <img
              src="/images/charts/capitalReport/ManufacturedCapitalReport/branch-network.PNG"
              alt="Branch Network"
              className="mb-4 rounded-lg"
            />
          </div>
          {/* <ApexCharts
              options={branchExpansionData}
              series={branchExpansionData.series}
              type="bar"
              height={350}
            /> */}
        </div>
      </div>

      <div className="grid grid-cols-1  gap-8">
        <div className="p-6 rounded-lg bg-white">
          <div className="flex justify-center">
            <img
              src="/images/annual-report/srilankanprovince.png"
              alt="Sri Lanka Provinces"
              className="w-[60%] h-auto mb-8"
            />
          </div>
          <div className="overflow-auto p-4 bg-white rounded-lg text-blue">
            <table className="bg-white text-black rounded-lg overflow-auto">
              <thead>
                <tr className="border-b-2 border-blue">
                  <th className="p-2">Province</th>
                  <th className="p-2">No. of Branches</th>
                  <th className="p-2">No. of Employees</th>
                  <th className="p-2">Mid Year Population &#39;000</th>
                  <th className="p-2">GDP Growth Rs. Mn (in 2022)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-1 border-blue">
                  <td className="p-2">1. Central</td>
                  <td className="p-2 text-center">18</td>
                  <td className="p-2 text-center">310</td>
                  <td className="p-2 text-center">2,788</td>
                  <td className="p-2 text-center">243,253</td>
                </tr>
                <tr className="border-b-1 border-blue">
                  <td className="p-2">2. Eastern</td>
                  <td className="p-2 text-center">25</td>
                  <td className="p-2 text-center">331</td>
                  <td className="p-2 text-center">1,774</td>
                  <td className="p-2 text-center">1,248,306</td>
                </tr>
                <tr className="border-b-1 border-blue">
                  <td className="p-2">3. North Central</td>
                  <td className="p-2 text-center">18</td>
                  <td className="p-2 text-center">138</td>
                  <td className="p-2 text-center">1,395</td>
                  <td className="p-2 text-center">1,209,771</td>
                </tr>
                <tr className="border-b-1 border-blue">
                  <td className="p-2">4. North Western</td>
                  <td className="p-2 text-center">11</td>
                  <td className="p-2 text-center">210</td>
                  <td className="p-2 text-center">2,572</td>
                  <td className="p-2 text-center">2,706,227</td>
                </tr>
                <tr className="border-b-1 border-blue">
                  <td className="p-2">5. Northern</td>
                  <td className="p-2 text-center">29</td>
                  <td className="p-2 text-center">258</td>
                  <td className="p-2 text-center">1,175</td>
                  <td className="p-2 text-center">985,139</td>
                </tr>
                <tr className="border-b-1 border-blue">
                  <td className="p-2">6. Sabaragamuwa</td>
                  <td className="p-2 text-center">7</td>
                  <td className="p-2 text-center">162</td>
                  <td className="p-2 text-center">2,080</td>
                  <td className="p-2 text-center">1,725,853</td>
                </tr>
                <tr className="border-b-1 border-blue">
                  <td className="p-2">7. Southern</td>
                  <td className="p-2 text-center">13</td>
                  <td className="p-2 text-center">270</td>
                  <td className="p-2 text-center">2,688</td>
                  <td className="p-2 text-center">2,199,791</td>
                </tr>
                <tr className="border-b-1 border-blue">
                  <td className="p-2">8. Uva</td>
                  <td className="p-2 text-center">6</td>
                  <td className="p-2 text-center">122</td>
                  <td className="p-2 text-center">1,405</td>
                  <td className="p-2 text-center">1,176,221</td>
                </tr>
                <tr className="border-b-1 border-blue">
                  <td className="p-2">9. Western</td>
                  <td className="p-2 text-center">83</td>
                  <td className="p-2 text-center">2,331</td>
                  <td className="p-2 text-center">6,160</td>
                  <td className="p-2 text-center">10,473,166</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white text-black p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">
            Investments in Digital Infrastructure
          </h2>
          <p className="mb-4">
            Our investments in technology drive digitalisation across our
            manufactured capital. By strategically allocating resources to
            technological advancements, we are transforming traditional
            processes into streamlined, automated workflows. Furthermore, by
            integrating cutting-edge solutions, we have enhanced operational
            efficiency, reduced redundancies, and mitigated errors.
          </p>
          <p className="mb-4">
            Moreover, we are harnessing the full potential of automation and
            data analytics to engage in data-driven decision-making and foster
            innovation. Please refer to the intellectual capital report on page
            120 for further information.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-center">
              <img
                src="/images/annual-report/MC-1.png" // Replace with the correct path to your image
                alt="Pallai Branch Opening"
                className="w-full mb-2"
              />
              <p>Pallai Branch Opening</p>
            </div>
            <div className="text-center">
              <img
                src="/images/annual-report/MC-2.png" // Replace with the correct path to your image
                alt="Kaduwela Branch Relocation"
                className="w-full mb-2"
              />
              <p>Kaduwela Branch Relocation</p>
            </div>
            <div className="text-center">
              <img
                src="/images/annual-report/MC-3.png" // Replace with the correct path to your image
                alt="Poonakary Branch Opening"
                className="w-full  mb-2"
              />
              <p>Poonakary Branch Opening</p>
            </div>
            <div className="text-center">
              <img
                src="/images/annual-report/MC-4.png" // Replace with the correct path to your image
                alt="Nanthan Branch Relocation"
                className="w-full mb-2"
              />
              <p>Nanthan Branch Relocation</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Regional Presence</h2>
          <p className="mb-4 bg-white text-black p-4 rounded-lg">
            Venturing beyond Sri Lanka to the regional market, LBF set up LB
            Microfinance Myanmar Company (LBMM) in December 2017 to penetrate
            into Myanmar&#39;s robust microfinance market. Over the past years,
            LBMM has continued to make good headway in its target market in the
            Bago region, Magway region, and Ayeyarwady region of Myanmar.
          </p>
          <div className="p-6 bg-white rounded-lg flex justify-center mb-4">
            <img
              src="/images/annual-report/mynmarmap.png" // Replace with the correct path to your map image
              alt="Myanmar Regions"
              className="w-[60%] h-auto mb-8"
            />
          </div>
          <div className="overflow-x-auto p-4 bg-white text-black rounded-lg mb-6">
            <h2 className="mb-3 font-medium text-xl">
              Footprint of LB Microfinance Myanmar
            </h2>
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-blue">
                  <th className="p-2 text-left">Region</th>
                  <th className="p-2 text-left">Branch</th>
                  <th className="p-2 text-center" colSpan={2}>
                    2023/24 No of employees
                  </th>
                </tr>
                <tr className="border-b-2 border-blue">
                  <th className="p-2"></th>
                  <th className="p-2"></th>
                  <th className="p-2 text-center">Sri Lankan</th>
                  <th className="p-2 text-center">Burmese</th>
                </tr>
              </thead>
              <tbody>
                {footprintData.map((region, index) => (
                  <React.Fragment key={region.region}>
                    {region.branches.map((branch, branchIndex) => (
                      <tr
                        key={`${region.region}-${branch.name}`}
                        className="border-b-1 border-blue"
                      >
                        {branchIndex === 0 && (
                          <td
                            className="p-2 font-semibold"
                            rowSpan={region.branches.length}
                          >
                            {region.region}
                          </td>
                        )}
                        <td className="p-2">{branch.name}</td>
                        <td className="p-2 text-center">
                          {branch.sriLankan || '-'}
                        </td>
                        <td className="p-2 text-center">{branch.burmese}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-semibold mb-4">
            Developing Entrepreneurship in Myanmar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-center">
              <img
                src="/images/annual-report/m-1.png" // Replace with the correct path to your image
                alt="Developing Entrepreneurship in Myanmar"
                className="w-full h-auto mb-2"
              />
            </div>
            <div className="text-center">
              <img
                src="/images/annual-report/m-2.png" // Replace with the correct path to your image
                alt="Developing Entrepreneurship in Myanmar"
                className="w-full h-auto mb-2"
              />
            </div>
            <div className="text-center">
              <img
                src="/images/annual-report/m-3.png" // Replace with the correct path to your image
                alt="Developing Entrepreneurship in Myanmar"
                className="w-full h-auto mb-2"
              />
            </div>
            <div className="text-center">
              <img
                src="/images/annual-report/m-4.png" // Replace with the correct path to your image
                alt="Developing Entrepreneurship in Myanmar"
                className="w-full h-auto mb-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
