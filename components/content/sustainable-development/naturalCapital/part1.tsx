'use client';

import Image from 'next/image';

export default function NaturalCapitalPart1() {
  return (
    <div>
      <div className="min-h-screen bg-[#c0db89] text-black p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <svg
              className="w-12 h-12 mr-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3L4 9V21H20V9L12 3Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 3V21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h1 className="text-4xl font-bold">Natural Capital</h1>
          </div>

          <div className="bg-[#8BC34A] rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">SHORT TERM</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold mb-2">Challenges</h3>
                <ul className="list-disc list-inside">
                  <li>
                    Implementing an effective resource optimisation system to
                    reduce energy consumption
                  </li>
                  <li>
                    Creating awareness among customers regarding the benefits of
                    green projects
                  </li>
                  <li>
                    Ensuring Green Office practices are maintained and internal
                    stakeholders are aware of its benefits
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Managing capital</h3>
                <ul className="list-disc list-inside">
                  <li>
                    Implemented an organisation-wide Carbon reduction and
                    resource optimisation initiative
                  </li>
                  <li>
                    Leveraged our relationships with regulators and multilateral
                    organisations to increase green financing
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">
                  Opportunities arising from this risk
                </h3>
                <ul className="list-disc list-inside">
                  <li>
                    Increasing efficiencies to reduce reliance on domestic
                    supplied utilities through innovative and green solutions
                    and resource-efficient green initiatives results in lower
                    operating costs
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-4 text-center text-[#0A3D5F]">
              <p className="text-3xl font-bold">+8,000</p>
              <p>Island wide trees planted</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center text-[#0A3D5F]">
              <p className="text-3xl font-bold">3,983 tCO₂e</p>
              <p>Carbon footprint</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center text-[#0A3D5F]">
              <p className="text-2xl font-bold mb-2">Carbon Conscious</p>
              <p>Company</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center text-[#0A3D5F]">
              <p className="text-3xl font-bold">Rs. 5.05 Bn</p>
              <p>Green Lending</p>
            </div>
          </div>

          <div className="relative h-64 md:h-96 mx-[-2rem]">
            <Image
              src="/images/sustainability/climate-page-1.PNG"
              alt="climate action"
              className="rounded-lg"
              width={800}
              height={500}
              style={{ height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-[#c0db89] text-black p-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#A3D175] rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 6V12L16 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                Impact to value chain
              </h2>
              <ul className="list-disc list-inside">
                <li>
                  Continuous awareness on organisation wide resource
                  optimisation
                </li>
              </ul>
            </div>
            <div className="bg-[#A3D175] rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 6V12L15 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                MEDIUM TERM
              </h2>
              <h3 className="font-bold mb-2">Space for development</h3>
              <ul className="list-disc list-inside">
                <li>
                  Conducted training through seminars and establish Sustainable
                  Finance Help Desks with aim towards establishing Green office
                </li>
              </ul>
            </div>
            <div className="bg-[#A3D175] rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 6V12L18 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                LONG TERM
              </h2>
              <h3 className="font-bold mb-2">Future crafting</h3>
              <ul className="list-disc list-inside">
                <li>
                  Continue to conduct and disclose carbon footprint analysis and
                  monitor and reduce net carbon emission
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#A3D175] rounded-lg p-4 text-center">
              <p className="text-3xl font-bold">26</p>
              <p>Solar Powered Hybrid Branches</p>
            </div>
            <div className="bg-[#A3D175] rounded-lg p-4 text-center">
              <p className="text-xl font-bold">
                Strengthen E-learning Platform
              </p>
            </div>
            <div className="bg-[#A3D175] rounded-lg p-4 text-center">
              <p className="text-xl font-bold">Low CO₂ Emitting Equipments</p>
            </div>
          </div>

          <div className="relative h-64 md:h-96 mx-[-2rem]">
            <Image
              src="/images/sustainability/climate-page-2.PNG"
              alt="climate action"
              className="rounded-lg"
              width={800}
              height={500}
              style={{ height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
