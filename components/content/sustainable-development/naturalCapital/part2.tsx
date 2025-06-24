'use client';

import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function NaturalCapitalPart2() {
  const chartOptions: ApexOptions = {
    chart: {
      type: 'bar' as const,
      height: 350,
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    xaxis: {
      categories: ['2020', '2021', '2022', '2023', '2024'],
    },
    yaxis: {
      title: {
        text: 'Total Carbon Footprint',
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
    },
    colors: ['#4CAF50', '#2196F3'],
  };

  const series = [
    {
      name: 'Carbon Footprint',
      data: [3000, 3200, 3400, 3600, 3800],
    },
    {
      name: 'Reduction Target',
      data: [0, 0, 0, 0, 200],
    },
  ];

  return (
    <div>
      <div className="bg-gradient-to-r from-lightGreen to-teal-500 text-gray-800 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Natural Capital Dashboard</h1>

          <div className="bg-white/20 backdrop-blur-lg rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              We focus on mitigating the adverse impacts of climate change by
              implementing initiatives to minimise our carbon footprint.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/20 backdrop-blur-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">
                MANAGEMENT APPROACH
              </h3>
              <p>
                We are focused on mitigating our environmental impact,
                especially as the consequences of climate change become more
                pronounced. Beyond minimising our operational carbon footprint
                and safeguarding ecosystems, we have integrated green financing
                principles into our lending strategy. Moreover, we adopt
                energy-efficient practices and technologies, resource
                conservation, and biodiversity conservation to positively
                contribute to mitigating adverse climate change impacts.
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">
                COMPONENTS OF NATURAL CAPITAL
              </h3>
              <ul className="list-disc list-inside">
                <li>ENERGY MANAGEMENT</li>
                <li>WATER MANAGEMENT</li>
                <li>EMISSIONS MANAGEMENT</li>
                <li>WASTE MANAGEMENT</li>
              </ul>
              <h4 className="font-semibold mt-4 mb-2">
                NURTURING NATURAL CAPITAL
              </h4>
              <ul className="list-disc list-inside">
                <li>Digitalisation of business processes</li>
                <li>Environmental Management System</li>
                <li>Water conservation</li>
                <li>Reducing energy consumption</li>
                <li>Green lending</li>
              </ul>
            </div>

            <div className="space-y-6">
              <div className="bg-white/20 backdrop-blur-lg rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">
                  CONTRIBUTING TO OUR MISSION
                </h3>
                <p>
                  To mobilise public funds by innovating investment products
                  that will enhance the value delivered to our depositors.
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-lg rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">
                  CONTRIBUTION TO OUR VALUES
                </h3>
                <div>
                  <p className="mb-2">Transparency</p>
                  <p className="mb-2">Innovation</p>
                  <p className="mb-2">Quality</p>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-lg rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">
                  COMMITMENTS TO UN SDGs
                </h3>
                <div className="flex justify-around">
                  <Image
                    src="/images/sustainability/climate-box-set.PNG"
                    alt="COMMITMENTS TO UN SDGs"
                    width={100}
                    height={60}
                    style={{ width: '140px' }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/20 backdrop-blur-lg rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">
                STRATEGIC PRIORITIES
              </h3>
              <ul className="list-disc list-inside">
                <li>
                  Engaging with internationally recognised frameworks and
                  standards
                </li>
                <li>
                  The initiative to digitise operations and automate processes
                  aims to minimise paper usage throughout the organisation
                </li>
              </ul>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">
                PROGRESS IN FY 2023/24
              </h3>
              <ul className="list-disc list-inside">
                <li>Implementing SLIPS 1 and SLFRS 52</li>
                <li>
                  Newly implemented 100% digital personal loan portfolio of Rs.
                  59.8 Mn
                </li>
              </ul>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">LOOKING AHEAD</h3>
              <h4 className="font-semibold">Short-term</h4>
              <p>
                Identifying and quantifying the impact our business activities
                and value chain have on the environment
              </p>
              <h4 className="font-semibold mt-2">Medium-term</h4>
              <p>
                To be a catalyst for good and achieve our UN SDG commitments, we
                must carefully manage our impact on natural capital.
              </p>
              <h4 className="font-semibold mt-2">Long-term</h4>
              <p>
                Unwavering commitment lies in the seamless integration of ESG
                principles across all facets of our operations
              </p>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-lg rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">
              Total Carbon Footprint
            </h3>
            <Chart
              options={chartOptions}
              series={series}
              type="bar"
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
