'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function ManufacturedCapitalPart2() {
  const pieChartOptions = {
    chart: {
      type: 'pie' as const,
    },
    labels: [
      'Freehold Land and Buildings',
      'Furniture, Fixtures and Fittings',
      'Equipment',
      'Motor Vehicles',
      'Computer Hardware and Equipment',
      'Improvement of Leasehold Asset',
      'Right-of-Use Assets',
    ],
    colors: [
      '#4E79A7',
      '#F28E2B',
      '#E15759',
      '#76B7B2',
      '#59A14F',
      '#EDC948',
      '#B07AA1',
    ],
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

  const pieChartSeries = [65, 6, 3, 1, 3, 5, 16];

  return (
    <div>
      <div className="min-h-screen bg-white text-black p-8">
        <div className="w-full">
          <div className="bg-[#fbbe96] rounded-lg p-6 mb-8">
            <p className="text-lg">
              Our Manufactured Capital encompasses a robust physical
              infrastructure that spans an island-wide network of branches, cash
              deposit machines, digital channels, and other essentially built
              assets. This infrastructure is crucial for delivering exceptional
              customer experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#fbbe96] rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">
                MANAGEMENT APPROACH
              </h2>
              <p>
                Manufactured capital encompasses both physical and digital
                infrastructure, such as property, plant and equipment,
                investment properties, and right-of-use assets. As of 31 March
                2024, property, plant, equipment, and right-of-use assets
                amounted to Rs. 8.9 Bn. Our ongoing investments in nurturing
                manufactured capital support our commitment to delivering value
                to a diverse range of stakeholders and transforming LBF into a
                customer-centric and digitally enabled organisation.
              </p>
            </div>
            <div className="bg-[#fbbe96] rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">
                COMPONENTS OF MANUFACTURED CAPITAL
              </h2>
              <ul className="list-disc list-inside">
                <li>OUR BRANCH NETWORK</li>
                <li>INVESTMENTS IN DIGITAL INFRASTRUCTURE</li>
                <li>REGIONAL PRESENCE</li>
              </ul>
              <h3 className="text-xl font-semibold mt-4 mb-2">
                NURTURING MANUFACTURED CAPITAL
              </h3>
              <ul className="list-disc list-inside">
                <li>Investment in branch infrastructure</li>
                <li>Investment in capacity expansion</li>
                <li>Investment in digital technology</li>
                <li>Maintenance and upkeep of manufactured capital</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#fcfeff] p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">
                CONTRIBUTING TO OUR MISSION
              </h2>
              <p>
                To embark on investments in which results can be clearly
                assessed with new opportunities in the market.
              </p>
            </div>
            <div className="bg-[#fcfeff] p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">
                CONTRIBUTION TO OUR VALUES
              </h2>
              <div>
                <p className="mb-2">Excellence</p>
                <p className="mb-2">Innovation</p>
                <p className="mb-2">Quality</p>
              </div>
            </div>
            <div className="bg-[#fcfeff] p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">
                STAKEHOLDERS IMPACTED
              </h2>
              <div className="flex justify-center">
                <Image
                  src="/images/sustainability/clean-energy-stakeholders.PNG"
                  alt="STAKEHOLDERS"
                  width={200}
                  height={100}
                  style={{ width: '150px' }}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#ffffff] rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">MATERIAL MATTERS</h2>
              <ul className="list-disc list-inside">
                <li>Regional expansion</li>
                <li>Business continuity</li>
                <li>Business model innovation</li>
                <li>Customer experience</li>
                <li>Process excellence</li>
              </ul>
            </div>
            <div className="bg-[#ffffff] rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">
                COMMITMENTS TO UN SDGs
              </h2>
              <div className="flex justify-center">
                <Image
                  src="/images/sustainability/clean-energy-commitements.PNG"
                  alt="STAKEHOLDERS"
                  width={300}
                  height={150}
                  style={{ width: '250px' }}
                />
              </div>
            </div>
          </div>

          <div className="bg-[#fbbe96] rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">LOOKING AHEAD</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Short-term</h3>
                <p>
                  Improve the integration between the core business activities
                  and LB CIM wallet
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Medium-term</h3>
                <p>Expand the range of low-cost digital channels</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Long-term</h3>
                <p>
                  Process innovations and knowledge sharing through investment
                  in technology and platforms
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 mb-">
            <h2 className="text-2xl font-semibold mb-4">
              Composition of Manufactured Capital
            </h2>
            <div className="w-full" style={{ height: '400px' }}>
              <Chart
                options={pieChartOptions}
                series={pieChartSeries}
                type="pie"
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
