import Image from 'next/image';

export default function GRIReporting40() {
  return (
    <div className="py-24 container px-5 lg:px-0">
      <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6">
        <div className="px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col">
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
                        <p className="text-xs text-gray-500">
                          38,047m³ (2022/23)
                        </p>
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
                    essential staff utility purposes. Reducing our water
                    footprint is a key objective outlined in our EMS. To achieve
                    this, we have established a company-wide water management
                    plan, outlining clear guidelines to minimise daily water
                    usage. Additionally, we raise staff awareness, encouraging
                    vigilance to minimise wastage and support conservation
                    efforts.
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
                        Using pressure-reducing valves to maintain consistent
                        water pressure
                      </li>
                      <li>
                        Regulating water flow with taps with spray attachment
                      </li>
                    </ul>
                    <h4 className="font-bold mt-4 mb-2">Awareness</h4>
                    <ul className="list-disc list-inside">
                      <li>Displaying water-saving tips</li>
                    </ul>
                    <h4 className="font-bold mt-4 mb-2">Reuse</h4>
                    <ul className="list-disc list-inside">
                      <li>Using drain water for air conditioner cooling</li>
                    </ul>
                    <h4 className="font-bold mt-4 mb-2">
                      Policies and procedures
                    </h4>
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
        </div>
      </div>
    </div>
  );
}
