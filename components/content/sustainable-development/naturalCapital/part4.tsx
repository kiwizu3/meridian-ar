'use client';

import Image from 'next/image';

export default function NaturalCapitalPart4() {
  return (
    <div>
      <div className="bg-white text-gray-800 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-[#97c93c]">
            THE SIX PILLARS OF EMS
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              {
                title: 'REDUCE',
                content:
                  'Identify and implement strategies to reduce energy consumption, water usage, and waste generation across all operations.',
              },
              {
                title: 'REUSE',
                content:
                  'Prioritise reusing materials whenever possible and explore creative ways to extend the lifespan of resources.',
              },
              {
                title: 'RECYCLE',
                content:
                  'Implement a comprehensive recycling programme encompassing various materials and diverting waste from landfills.',
              },
              {
                title: 'TRAINING',
                content:
                  'All employees undergo regular environmental awareness training to understand their role in minimising our negative impact.',
              },
              {
                title: 'POLICIES AND PRACTICES',
                content:
                  'Establish clear environmental policies and procedures that guide our operations and decision-making.',
              },
              {
                title: 'EMPLOYEE ENGAGEMENT',
                content:
                  'Foster a culture of environmental responsibility, encouraging employees to participate in sustainability initiatives actively.',
              },
            ].map((pillar, index) => (
              <div key={index} className="bg-green-100 p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-2 text-green-700">
                  {pillar.title}
                </h2>
                <p>{pillar.content}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#4e70b7]">
                OUR WATER FOOTPRINT
              </h2>
              <div className="bg-[#f9f4ea] p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Image
                    src="/images/sustainability/climate-water-icon.PNG"
                    alt="OUR WATER FOOTPRINT"
                    width={100}
                    height={100}
                    className="w-16 h-16 mr-4"
                    style={{ width: '4rem' }}
                  />
                  <div>
                    <p className="text-sm">Total water</p>
                    <p className="text-2xl font-bold">44,908m³</p>
                    <p className="text-xs text-gray-500">38,047m³ (2022/23)</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Per employee</span>
                    <span className="font-bold">10.87m³</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Per working day</span>
                    <span className="font-bold">186.34m³</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Per outlet</span>
                    <span className="font-bold">224.54m³</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#4e70b7]">
                WATER MANAGEMENT
              </h2>
              <p className="mb-4">
                We manage our water consumption, primarily reserved for
                essential staff utility purposes. Reducing our water footprint
                is a key objective outlined in our EMS. To achieve this, we have
                established a company-wide water management plan, outlining
                clear guidelines to minimise daily water usage. Additionally, we
                raise staff awareness, encouraging vigilance to minimise wastage
                and support conservation efforts.
              </p>

              <h3 className="text-xl font-semibold mb-2">
                Water Management Initiatives
              </h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">
                  FOCUS PILLAR: Reduce consumption
                </h4>
                <ul className="list-disc list-inside">
                  <li>
                    Using high-intensity pressure pumps for vehicle washing
                  </li>
                  <li>
                    Using pressure-reducing valves to maintain consistent water
                    pressure
                  </li>
                  <li>Regulating water flow with taps with spray attachment</li>
                </ul>
                <h4 className="font-bold mt-4 mb-2">Awareness</h4>
                <ul className="list-disc list-inside">
                  <li>Displaying water-saving tips</li>
                </ul>
                <h4 className="font-bold mt-4 mb-2">Reuse</h4>
                <ul className="list-disc list-inside">
                  <li>Using drain water for air conditioner cooling</li>
                </ul>
                <h4 className="font-bold mt-4 mb-2">Policies and procedures</h4>
                <ul className="list-disc list-inside">
                  <li>Employees committing to the Sustainability Pledge</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="font-semibold mb-2">
              Sustainability Pledge and Environment Policy
            </p>
            <Image
              src="/images/sustainability/climate-page-book-cover.PNG"
              alt="OUR WATER FOOTPRINT"
              width={700}
              height={600}
              style={{ width: '65%', margin: '0 auto' }}
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-100 text-gray-800 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#f9f4ea] p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-[#97c93c]">
                OUR ENERGY FOOTPRINT
              </h2>
              <div className="flex items-center mb-4">
                <Image
                  src="/images/sustainability/climate-energy-icon.PNG"
                  alt="OUR ENERGY FOOTPRINT"
                  width={100}
                  height={100}
                  className="w-16 h-16 mr-4"
                  style={{ width: '4rem' }}
                />
                <div>
                  <p className="text-sm">Overall energy consumption</p>
                  <p className="text-3xl font-bold">16,852.95GJ</p>
                  <p className="text-xs text-gray-500">14,394.00 (2022/23)</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Per employee</span>
                  <span className="font-bold">4.08GJ</span>
                </div>
                <div className="flex justify-between">
                  <span>Per working day</span>
                  <span className="font-bold">69.93GJ</span>
                </div>
                <div className="flex justify-between">
                  <span>Per outlet</span>
                  <span className="font-bold">84.26GJ</span>
                </div>
              </div>
            </div>

            <div className="bg-[#f9f4ea] p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-[#4e70b7]">
                OUR EMISSION FOOTPRINT
              </h2>
              <div className="flex items-center mb-4">
                <Image
                  src="/images/sustainability/climate-co2-icon.PNG"
                  alt="OUR EMISSION FOOTPRINT"
                  className="w-16 h-16 mr-4"
                  width={100}
                  height={100}
                  style={{ width: '4rem' }}
                />
                <div>
                  <p className="text-sm">Total CO₂ emitted</p>
                  <p className="text-3xl font-bold">3,983 tCO₂</p>
                  <p className="text-xs text-gray-500">3,488 tCO₂ (2022/23)</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Per employee</span>
                  <span className="font-bold">0.96 tCO₂</span>
                </div>
                <div className="flex justify-between">
                  <span>Per working day</span>
                  <span className="font-bold">16.53 tCO₂</span>
                </div>
                <div className="flex justify-between">
                  <span>Per outlet</span>
                  <span className="font-bold">19.91 tCO₂</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="font-bold">EMISSION INTENSITY RATIO</p>
                <p className="text-2xl font-bold">0.0809 tCo2e/Rs.Mn</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#97c93c]">
                ENERGY MANAGEMENT
              </h2>
              <p className="mb-4">
                We recognise the environmental impact of our growing energy
                consumption and are committed to mitigating it through our
                Energy Management Framework.
              </p>

              <h3 className="text-xl font-semibold mb-2">
                Energy Management Initiatives
              </h3>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-[#4e70b7]">
                  FOCUS PILLAR: Reduce consumption
                </h4>
                <ul className="list-disc list-inside mb-4">
                  <li>Using high-tech energy-efficient equipment</li>
                  <li>Adopting energy reduction methodologies</li>
                  <li>
                    Using energy-efficient lighting for sign boards at outlets
                  </li>
                  <li>Maximising usage of natural light</li>
                </ul>
                <h4 className="font-bold mb-2 text-[#4e70b7]">Awareness</h4>
                <ul className="list-disc list-inside mb-4">
                  <li>Displaying of energy-saving tips</li>
                  <li>
                    Conducting an e-mail campaign on the benefits of
                    energy-saving
                  </li>
                </ul>
                <h4 className="font-bold mb-2 text-[#4e70b7]">Reuse</h4>
                <ul className="list-disc list-inside mb-4">
                  <li>
                    Using energy reduction methods at the office and buildings
                  </li>
                </ul>
                <h4 className="font-bold mb-2 text-[#4e70b7]">
                  Policies and procedures
                </h4>
                <ul className="list-disc list-inside">
                  <li>Employees committing to the Sustainability Pledge</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#4e70b7]">
                EMISSION MANAGEMENT
              </h2>
              <p className="mb-4">
                As a financial services institution, our direct emission (scope
                1 as defined by the GHG protocol) resulting from business
                activities are minimal. However, we recognise that our
                responsibility extends beyond direct emission and are taking
                steps to address scope 2 and 3 emissions associated with our
                operations. We are pursuing energy efficiency measures and
                exploring renewable energy options to reduce our reliance on
                grid electricity, thus minimising our scope 2 emissions.
              </p>
              <p className="mb-4">
                To address scope 3 emission, we are implementing programmes to
                encourage employees to adopt sustainable commuting options such
                as carpooling, public transportation, cycling, and walking. We
                are also exploring options for remote work and flexible work
                arrangements to further reduce commuting-related emission.
              </p>
              <p className="mb-4">
                While our assessments did not reveal significant air emissions
                or hazardous compounds, we are committed to continuous
                improvement. We are exploring more comprehensive emission
                measurement methodologies to further refine the understanding of
                our environmental impact and identify additional areas for
                improvement.
              </p>

              <h3 className="text-xl font-semibold mb-2">
                Emission Management Initiatives
              </h3>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-[#4e70b7]">
                  FOCUS PILLAR: Reduce consumption
                </h4>
                <ul className="list-disc list-inside">
                  <li>
                    Moving away from high-energy intensive equipment to
                    energy-saving equipment
                  </li>
                  <li>
                    Promoting common transport as opposed to private transport
                  </li>
                  <li>Regulating AC during peak times</li>
                  <li>
                    Providing integrated transport solutions for business duties
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
